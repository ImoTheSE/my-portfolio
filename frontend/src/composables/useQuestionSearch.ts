import { ref } from 'vue'

export type QuestionAnswer = {
  id: number
  question: string
  answer: string
  created_at: string
  updated_at: string
}

export function useQuestionSearch() {
  const query = ref('')
  const results = ref<QuestionAnswer[]>([])
  const expandedId = ref<number | null>(null)

  const config = useRuntimeConfig()

  const search = async () => {
    const { data } = await useFetch<QuestionAnswer[]>(
      `${config.public.apiBase}/api/v1/question_answers`,
      {
        query: { q: query.value },
      }
    )

    if (Array.isArray(data.value)) {
      results.value = data.value
    } else {
      results.value = []
    }
  }

  const toggleExpand = (id: number) => {
    expandedId.value = expandedId.value === id ? null : id
  }

  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + '...' : text
  }

  const deleteItem = async (id: number) => {
    const confirmed = window.confirm('本当に削除しますか？')
    if (!confirmed) return

    const { error } = await useFetch(
      `${config.public.apiBase}/api/v1/question_answers/${id}`,
      {
        method: 'DELETE',
      }
    )

    if (!error.value) {
      results.value = results.value.filter((item) => item.id !== id)
    } else {
      alert('削除に失敗しました')
    }
  }

  return {
    query,
    results,
    expandedId,
    search,
    toggleExpand,
    truncate,
    deleteItem,
  }
}
