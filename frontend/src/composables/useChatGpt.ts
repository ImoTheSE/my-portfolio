
import { useRoute, useRouter } from 'vue-router'
import { appSteps } from '@/data/appSteps'

export const useChatGpt = () => {
  const route = useRoute()
  const router = useRouter()

  const from = route.query.from as string || 'appFrame'
  const fromStep = history.state?.fromStep ?? 0

  const stepID = appSteps[fromStep]?.id ?? ''

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

    const mainValue = loadAllStepInputs()

    try {
        const res = await fetch('http://localhost:3000/api/chatgpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inputs: mainValue,
          from_step: appSteps[fromStep]?.id ?? 'default'
        }),
        credentials: 'include'
      })
      const data = await res.json()
      answer.value = data.answer
    } catch (e) {
      answer.value = 'API通信に失敗しました。'
    } finally {
      loading.value = false
    }
  })

  return {
    answer,
    loading,
    goBack
  }
}
