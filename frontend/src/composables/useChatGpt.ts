
import { useRoute, useRouter } from 'vue-router'
import { useAppFlow } from '@/composables/useAppFlow'

export const useChatGpt = () => {
  const route = useRoute()
  const router = useRouter()

  const from = route.query.from as string || 'appFrame'
  const fromStep = history.state?.fromStep ?? 0


  const command = (route.query.command as string) || ''

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
    answer.value = `「${command}」という命令に対するモック回答です。`
    loading.value = false
  })

  return {
    command,
    answer,
    loading,
    goBack
  }
}
