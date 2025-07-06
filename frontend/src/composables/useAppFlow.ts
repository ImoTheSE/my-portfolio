import { ref, computed } from 'vue'
import { appSteps } from '@/data/appSteps'
import type { Step } from '@/types/Step'

export const useAppFlow = () => {
  const currentStepIndex = ref(0)
  const steps = ref<Step[]>(appSteps)
  const router = useRouter()
  const route = useRoute()

  const currentStep = computed(() => steps.value[currentStepIndex.value])

  onMounted(() => {
    const stepFromState = history.state?.restoreStep
    if (typeof stepFromState === 'number' && stepFromState >= 0 && stepFromState < steps.value.length) {
      currentStepIndex.value = stepFromState
    }
  })

  const goToStep = (index: number, inputData?: Record<string, string>) => {
    if (index >= 0 && index < steps.value.length) {
      if (Array.isArray(currentStep.value.formFields) && currentStep.value.formFields.length > 0) {
        const formatted =
          inputData && Object.keys(inputData).length > 0
            ? Object.entries(inputData)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\n')
            : ''
        saveInput(currentStep.value.title, formatted)
      }

      currentStepIndex.value = index
    }
  }



  const actionHandlers: Record<string, (inputData?: Record<string, string>) => void> = {
    goToNext: (data) => goToStep(currentStepIndex.value + 1, data),
    goToNext2: (data) => goToStep(currentStepIndex.value + 2, data),
    goToNext3: (data) => goToStep(currentStepIndex.value + 3, data),
    goToPrevious: (data) => goToStep(currentStepIndex.value - 1, data),
    goToPrevious2: (data) => goToStep(currentStepIndex.value - 2, data),
    goToPrevious3: (data) => goToStep(currentStepIndex.value - 3, data),
    goToStart: (data) => goToStep(0, data),
    goToChatGPT: () =>
      router.push({
        path: '/chatgpt',
        query: {
          command: '○○',
          from: 'appFrame'
        },
        state: {
          fromStep: currentStepIndex.value
        }
      }),
    goToHowToDebug: () =>
      router.push({
        path: '/howToDebug',
        query: {
          command: '○○',
          from: 'appFrame'
        },
        state: {
          fromStep: currentStepIndex.value
        }
      }),
    finish: () => alert('完了しました！'),
    showHelp: () => alert('ヘルプを表示します')
  }

  const handleAction = (actionKey: string, inputData?: Record<string, string>) => {
  const handler = actionHandlers[actionKey]
  if (handler) handler(inputData)
  else console.warn(`未定義のアクション: ${actionKey}`)
}


  return {
    currentStep,
    handleAction,
    goToStep
  }
}
