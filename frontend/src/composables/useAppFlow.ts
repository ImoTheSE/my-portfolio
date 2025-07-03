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

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.value.length) {
      if (Array.isArray(currentStep.formFields) && currentStep.formFields.length > 0) {
      console.log('フォームがあるステップに遷移します')
      }
      
      currentStepIndex.value = index
    }
  }

  const actionHandlers: Record<string, () => void> = {
    goToNext: () => goToStep(currentStepIndex.value + 1),
    goToNext2: () => goToStep(currentStepIndex.value + 2),
    goToNext3: () => goToStep(currentStepIndex.value + 3),
    goToPrevious: () => goToStep(currentStepIndex.value - 1),
    goToPrevious2: () => goToStep(currentStepIndex.value - 2),
    goToPrevious3: () => goToStep(currentStepIndex.value - 3),
    goToStart: () => goToStep(0),
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

  const handleAction = (actionKey: string) => {
    const handler = actionHandlers[actionKey]
    if (handler) handler()
    else console.warn(`未定義のアクション: ${actionKey}`)
  }

  return {
    currentStep,
    handleAction,
    goToStep
  }
}
