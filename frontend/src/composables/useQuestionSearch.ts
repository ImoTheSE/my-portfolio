import { ref } from 'vue'

type QuestionAnswer = {
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

  const search = async () => {
    const config = useRuntimeConfig()

    const { data } = await useFetch<QuestionAnswer[]>(`${config.public.apiBase}/api/v1/question_answers`, {
      query: { q: query.value }
    })

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

  return {
    query,
    results,
    expandedId,
    search,
    toggleExpand,
    truncate
  }
}
