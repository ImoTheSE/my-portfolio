import { ref, computed } from 'vue'
import { appSteps } from '@/data/appSteps'
import type { Step } from '@/types/Step'
import { checkFormFieldsByStepId } from '@/utils/stepChecker'

export const useAppFlow = () => {
  const currentStepIndex = ref(0)
  const steps = ref<Step[]>(appSteps)
  const router = useRouter()

  const currentStep = computed(() => steps.value[currentStepIndex.value])

  onMounted(() => {
    const stepFromState = history.state?.restoreStep
    if (
      typeof stepFromState === 'number' &&
      stepFromState >= 0 &&
      stepFromState < steps.value.length
    ) {
      currentStepIndex.value = stepFromState
    }
  })

  const saveFilteredInput = (
    formFields: { name?: string }[] | undefined,
    inputData?: Record<string, string>,
    stepId?: string
  ) => {
    if (
      Array.isArray(formFields) &&
      formFields.length > 0 &&
      inputData &&
      Object.keys(inputData).length > 0 &&
      stepId
    ) {
      const filtered: Record<string, string> = {}

      formFields.forEach((field) => {
        if (field?.name && inputData[field.name]) {
          filtered[field.name] = inputData[field.name]
        }
      })

      if (Object.keys(filtered).length > 0) {
        const formatted = Object.entries(filtered)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n')

        saveInput(stepId, formatted)
      }
    }
  }

  const goToStep = (index: number, inputData?: Record<string, string>) => {
    if (index >= 0 && index < steps.value.length) {
      const current = currentStep.value

      if (inputData) {
        const isValid = checkFormFieldsByStepId(
          current.formFields,
          inputData,
          current.id
        )
        if (!isValid) {
          console.warn(`ステップ "${current.id}" の入力検証に失敗しました。`)
          return // ❌ 中断！
        }
      }

      saveFilteredInput(current.formFields, inputData, current.id)

      currentStepIndex.value = index
    }
  }

  const getSavedInput = (stepID: string): Record<string, string> => {
    const raw = loadInput(stepID)
    const parsed: Record<string, string> = {}

    raw.split('\n').forEach((line) => {
      const [key, value] = line.split(':')
      if (key && value !== undefined) {
        parsed[key.trim()] = value.trim()
      }
    })

    return parsed
  }

  const actionHandlers: Record<
    string,
    (inputData?: Record<string, string>) => void
  > = {
    goToNext: (data) => goToStep(currentStepIndex.value + 1, data),
    goToNext2: (data) => goToStep(currentStepIndex.value + 2, data),
    goToNext3: (data) => goToStep(currentStepIndex.value + 3, data),
    goToPrevious: (data) => goToStep(currentStepIndex.value - 1, data),
    goToPrevious2: (data) => goToStep(currentStepIndex.value - 2, data),
    goToPrevious3: (data) => goToStep(currentStepIndex.value - 3, data),
    goToStart: (data) => goToStep(0, data),
    goToChatGPT: (data) => {
      const current = currentStep.value
      if (data) {
        const isValid = checkFormFieldsByStepId(
          current.formFields,
          data,
          current.id
        )
        if (!isValid) {
          console.warn(`ステップ "${current.id}" の入力検証に失敗しました。`)
          return // ❌ 中断！
        }
      }
      saveFilteredInput(current.formFields, data, current.id)

      router.push({
        path: '/chatgpt',
        query: {
          from: 'appFrame',
        },
        state: {
          fromStep: currentStepIndex.value,
        },
      })
    },
    goToHowToDebug: () =>
      router.push({
        path: '/howToDebug',
        query: {
          from: 'appFrame',
        },
        state: {
          fromStep: currentStepIndex.value,
        },
      }),
  }

  const handleAction = (
    actionKey: string,
    inputData?: Record<string, string>
  ) => {
    const handler = actionHandlers[actionKey]
    if (handler) handler(inputData)
    else console.warn(`未定義のアクション: ${actionKey}`)
  }

  return {
    currentStep,
    handleAction,
    goToStep,
    getSavedInput,
  }
}
