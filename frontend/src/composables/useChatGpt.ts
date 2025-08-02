import { useRoute, useRouter } from 'vue-router'
import { appSteps } from '@/data/appSteps'

export const useChatGpt = () => {
  const answer = ref('')
  const loading = ref(true)
  const goBack = ref<() => void>(() => {})

  onMounted(() => {
    const route = useRoute()
    const router = useRouter()

    const from = (route.query.from as string) || 'appFrame'
    const fromStep = history.state?.fromStep ?? 0
    const stepID = appSteps[fromStep]?.id ?? ''
    const config = useRuntimeConfig()

    goBack.value = () => {
      router.push({
        path: `/${from}`,
        state: { restoreStep: fromStep },
      })
    }

    const mainValue = loadAllStepInputs()

    fetch(`${config.public.apiBase}/api/chatgpt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inputs: mainValue,
        from_step: stepID || 'default',
      }),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          answer.value = data.errors.join('\n') // ✅ バリデーションエラーを表示して中断
          return
        }

        answer.value = data.answer
      })
      .catch(() => {
        answer.value = 'API通信に失敗しました。'
      })
      .finally(() => {
        loading.value = false
      })
  })

  return {
    answer,
    loading,
    goBack,
  }
}
