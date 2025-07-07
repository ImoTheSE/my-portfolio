
import { useRoute, useRouter } from 'vue-router'
import { useAppFlow } from '@/composables/useAppFlow'
import { appSteps } from '@/data/appSteps'

export const useChatGpt = () => {
  const { getSavedInput } = useAppFlow()
  const route = useRoute()
  const router = useRouter()

  const from = route.query.from as string || 'appFrame'
  const fromStep = history.state?.fromStep ?? 0

  const stepTitle = appSteps[fromStep]?.title ?? ''
  const savedInput = getSavedInput(stepTitle)
  const formattedCommand = Object.entries(savedInput)
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n')


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

  onMounted(async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))

  const stepTitle = appSteps[fromStep]?.title ?? ''
  const savedInput = getSavedInput(stepTitle)
  const formattedCommand = Object.values(savedInput).join('\n')

  answer.value = `「${formattedCommand}」という命令に対するモック回答です。`
  loading.value = false
})


  return {
    answer,
    loading,
    goBack
  }
}
