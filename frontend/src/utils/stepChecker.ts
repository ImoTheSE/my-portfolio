// src/utils/stepChecker.ts
import type { Step } from '@/types/Step'

export const checkFormFieldsByStepId = (
  formFields: Step['formFields'],
  inputData: Record<string, string>,
  stepId: string
): boolean => {
  const errors: string[] = []
  if (!formFields || !Array.isArray(formFields)) return true // フォームなし → チェックスキップOK

  switch (stepId) {
    case 's1':
      if (!inputData['yearLevel'] || inputData['yearLevel'].trim() === '') {
        errors.push('未入力です')
      }

      if (inputData['yearLevel'] && inputData['yearLevel'].length > 4) {
        errors.push('四文字以内で表現してください。')
      }

      if (inputData['yearLevel'] && !isAllFullWidth(inputData['yearLevel'])) {
        errors.push('全角のみ入力可能です')
      }

      break

    case 's2':
      if (
        !inputData['programmingLanguage'] ||
        inputData['programmingLanguage'].trim() === ''
      ) {
        errors.push('未入力です')
      }

      if (inputData['programmingLanguage'] && 
        inputData['programmingLanguage'].length > 50) {
        errors.push('50文字以内で表現してください。')
      }

      if (
        inputData['programmingLanguage'] &&
        !isAlphanumeric(inputData['programmingLanguage'])
      ) {
        errors.push(
          'プログラミング言語は英数字・カンマ・スペースのみ入力可能です'
        )
      }

      break

    case 's7':
      if (!inputData['IDEname'] || inputData['IDEname'].trim() === '') {
        errors.push('未入力です')
      }

      if (inputData['IDEname'] && inputData['IDEname'].length > 20) {
        errors.push('20文字以内で表現してください。')
      }

      if (inputData['IDEname'] && !isAlphanumeric(inputData['IDEname'])) {
        errors.push('IDE名は半角英数字のみで入力可能です')
      }

      break

    default:
      break
  }

  if (errors.length > 0) {
    alert(errors.join('\n')) // ← ★ここがポイント：複数行で表示！
    return false
  }

  return true
}

export const isAlphanumeric = (text: string): boolean => {
  return /^[a-zA-Z0-9, ]+$/.test(text)
}

export const isAllFullWidth = (text: string): boolean => {
  return /^[^\u0020-\u007E\uFF61-\uFF9F]+$/.test(text)
}
