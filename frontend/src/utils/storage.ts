// utils/storage.ts

const prefix = 'stepInput_'

export function saveInput(step: string, value: string) {
  localStorage.setItem(`${prefix}${step}`, value)
}

export function loadInput(step: string): string {
  return localStorage.getItem(`${prefix}${step}`) || ''
}

export function clearInput(step: string) {
  localStorage.removeItem(`${prefix}${step}`)
}

export function clearAllSteps(steps: string[]) {
  steps.forEach(step => clearInput(step))
}
