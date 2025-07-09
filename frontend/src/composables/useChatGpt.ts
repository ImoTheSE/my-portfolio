
import { useRoute, useRouter } from 'vue-router'
import { useAppFlow } from '@/composables/useAppFlow'
import { appSteps } from '@/data/appSteps'

export const useChatGpt = () => {
  const { getSavedInput } = useAppFlow()
  const route = useRoute()
  const router = useRouter()

  const from = route.query.from as string || 'appFrame'
  const fromStep = history.state?.fromStep ?? 0

  const stepID = appSteps[fromStep]?.id ?? ''
  const savedInput = getSavedInput(stepID)
  // const formattedCommand = Object.entries(savedInput)
  // .map(([key, value]) => `${key}: ${value}`)
  // .join('\n')


  const answer = ref('')
  const loading = ref(true)

  const goBack = () => {
    router.push({
      path: `/${from}`,
        state: {
        restoreStep: fromStep // 戻る先のページで取得してステップを復元
        }
    })
  }

  const allInputs = ref<{ step: string; key: string; value: string }[]>([])

  onMounted(async () => {
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))

    allInputs.value = loadAllStepInputs()

    const sortedInputs = allInputs.value.sort((a, b) => {
      const aIndex = appSteps.findIndex(step => step.id === a.step)
      const bIndex = appSteps.findIndex(step => step.id === b.step)
      return aIndex - bIndex
    })

    // 例：1件目のvalueだけ表示に使う
    const mainValue = sortedInputs[0]?.value ?? ''
    answer.value = `「${mainValue}」という命令に対するモック回答です。`

    loading.value = false
  })

  return {
    answer,
    loading,
    goBack
  }
}
