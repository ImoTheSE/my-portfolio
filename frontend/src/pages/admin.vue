<template>
  <div class="p-4">
    <LogoutButton class="mb-4" />

    <div class="mb-4">
      <input
        v-model="query"
        type="text"
        placeholder="検索キーワード"
        class="border px-2 py-1 mr-2"
      />
      <button @click="search" class="bg-blue-600 text-white px-3 py-1 rounded">検索</button>
    </div>

    <div v-if="results.length" class="overflow-x-auto">
        <table class="table-auto border border-gray-300 border-collapse w-full text-sm text-left">
            <thead class="bg-gray-100">
            <tr>
                <th class="border border-gray-300 px-4 py-2 w-1/3">質問</th>
                <th class="border border-gray-300 px-4 py-2">回答</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in results" :key="item.id">
                <td class="border border-gray-300 px-4 py-2 align-top font-medium">
                {{ item.question }}
                </td>
                <td class="border border-gray-300 px-4 py-2 align-top">
                {{ expandedId === item.id ? item.answer : truncate(item.answer, 100) }}
                <button @click="toggleExpand(item.id)" class="ml-2 text-blue-500 text-xs">
                    {{ expandedId === item.id ? "閉じる" : "続きを読む" }}
                </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

    <div v-else class="text-gray-500 mt-4">
      検索結果がありません
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuestionSearch } from '@/composables/useQuestionSearch'
import LogoutButton from '@/components/OtherParts/LogoutButton.vue'

definePageMeta({
  middleware: ['admin']
})

const {
  query,
  results,
  expandedId,
  search,
  toggleExpand,
  truncate
} = useQuestionSearch()
</script>
