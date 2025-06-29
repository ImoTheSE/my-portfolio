

export const useHowToDebug = () => {
  const route = useRoute()
  const router = useRouter()
  const from = route.query.from as string || 'appFrame'
  const fromStep = history.state?.fromStep ?? 0

  const handleLeftClick = () => {
    router.push({
      path: `/${from}`,
        state: {
        restoreStep: 6 // 戻る先のページで取得してステップを復元
        }
    })
  }

  const handleRightClick = () => {
    router.push({
      path: `/${from}`,
        state: {
        restoreStep: 8 // 戻る先のページで取得してステップを復元
        }
    })
  }

  return {
    handleLeftClick,
    handleRightClick,
  }
}
