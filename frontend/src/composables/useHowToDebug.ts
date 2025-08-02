import { ref, onMounted } from 'vue'

export const useHowToDebug = () => {
  const handleLeftClick = ref<() => void>(() => {})
  const handleRightClick = ref<() => void>(() => {})

  onMounted(() => {
    const route = useRoute()
    const router = useRouter()
    const from = (route.query.from as string) || 'appFrame'

    handleLeftClick.value = () => {
      router.push({
        path: `/${from}`,
        state: {
          restoreStep: 6,
        },
      })
    }

    handleRightClick.value = () => {
      router.push({
        path: `/${from}`,
        state: {
          restoreStep: 8,
        },
      })
    }
  })

  return {
    handleLeftClick,
    handleRightClick,
  }
}
