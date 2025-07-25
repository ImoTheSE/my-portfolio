import type { Step } from '@/types/Step'

const stepModules = import.meta.glob('./steps/*.ts', { eager: true })
const descModules = import.meta.glob('./descriptions/*.txt', { as: 'raw', eager: true })

export const appSteps: Step[] = Object.keys(stepModules)
  .sort((a, b) => {
    // ファイル名からステップ番号を抽出して数値で比較
    const aNum = Number(a.match(/step(\d+)/)?.[1])
    const bNum = Number(b.match(/step(\d+)/)?.[1])
    return aNum - bNum
  })
  .map((stepPath) => {
    const stepModule = stepModules[stepPath] as any

    const stepName = stepPath.match(/\.\/steps\/(.*)\.ts$/)?.[1]
    if (!stepName) {
      throw new Error(`ステップ名を抽出できません: ${stepPath}`)
    }

    const step: Step = stepModule[stepName]
    if (!step) {
      throw new Error(`モジュール内に ${stepName} のエクスポートが見つかりません: ${stepPath}`)
    }

    const matchingDescPaths = Object.keys(descModules).filter((path) =>
      path.match(new RegExp(`./descriptions/${stepName}(?:_\\d+)?\\.txt$`))
    )

    if (matchingDescPaths.length === 0) {
      throw new Error(`説明ファイルが1つも見つかりません: ${stepName}`)
    }

    const descriptions = matchingDescPaths
      .sort() // 説明文ファイルの並び順は文字列ソートで OK
      .map((path) => descModules[path])

    step.description = descriptions
    return step
  })

