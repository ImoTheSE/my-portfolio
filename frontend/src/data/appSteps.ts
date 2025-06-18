import type { Step } from '@/types/Step'

// ステップモジュールをすべて eager import
const stepModules = import.meta.glob('./steps/*.ts', { eager: true })
// 説明文をすべて eager import（as: 'raw' でテキストとして）
const descModules = import.meta.glob('./descriptions/*.txt', { as: 'raw', eager: true })

// appSteps を生成
export const appSteps: Step[] = Object.keys(stepModules).map((stepPath) => {
  const stepModule = stepModules[stepPath] as any

  // ステップファイルのエクスポート名を推測（例: './steps/step1.ts' → 'step1'）
  const stepName = stepPath.match(/\.\/steps\/(.*)\.ts$/)?.[1]
  if (!stepName) {
    throw new Error(`ステップ名を抽出できません: ${stepPath}`)
  }

  const step: Step = stepModule[stepName]
  if (!step) {
    throw new Error(`モジュール内に ${stepName} のエクスポートが見つかりません: ${stepPath}`)
  }

  // 対応する description をセット
  const descPath = `./descriptions/${stepName}.txt`
  const description = descModules[descPath]
  if (!description) {
    throw new Error(`説明ファイルが見つかりません: ${descPath}`)
  }

  step.description = description
  return step
})
