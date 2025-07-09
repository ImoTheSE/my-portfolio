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

// 🔽 追加：すべてのstepInput_◯◯を取得
export function loadAllStepInputs(): { step: string; key: string; value: string }[] {
  const result: { step: string; key: string; value: string }[] = []

  for (let i = 0; i < localStorage.length; i++) {
    const fullKey = localStorage.key(i)
    if (fullKey && fullKey.startsWith(prefix)) {
      const stepID = fullKey.replace(prefix, '')
      const raw = localStorage.getItem(fullKey) || ''
      raw.split('\n').forEach(line => {
        const [key, value] = line.split(':')
        if (key && value !== undefined) {
          result.push({
            step: stepID,
            key: key.trim(),
            value: value.trim()
          })
        }
      })
    }
  }

  return result
}
