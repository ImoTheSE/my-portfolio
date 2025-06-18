import { ref, computed } from 'vue'
import { appSteps } from '@/data/appSteps'
import type { Step } from '@/types/Step'

export const useAppFlow = () => {
  const currentStepIndex = ref(0)
  const steps = ref<Step[]>(appSteps)

  const currentStep = computed(() => steps.value[currentStepIndex.value])

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.value.length) {
      currentStepIndex.value = index
    }
  }

  const actionHandlers: Record<string, () => void> = {
    goToNext: () => goToStep(currentStepIndex.value + 1),
    goToPrevious: () => goToStep(currentStepIndex.value - 1),
    finish: () => alert('完了しました！'),
    showHelp: () => alert('ヘルプを表示します')
  }

  const handleAction = (actionKey: string) => {
    const handler = actionHandlers[actionKey]
    if (handler) handler()
    else console.warn(`未定義のアクション: ${actionKey}`)
  }

  return {
    currentStep,
    handleAction
  }
}
