<template>
  <div style="padding: 16px;">
    <h1>質問検索</h1>
    <LogoutButton class="absolute top-4 right-4" />

    <div style="margin-bottom: 16px;">
      <input
        v-model="query"
        type="text"
        placeholder="検索キーワード"
        style="padding: 4px; margin-right: 8px;"
      />
      <button @click="search" style="padding: 4px 12px;">検索</button>
    </div>

    <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse;">
      <thead style="background-color: #f0f0f0;">
        <tr>
          <th style="width: 30%;">質問</th>
          <th>回答</th>
          <th style="width: 80px;">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in results" :key="item.id">
          <td>{{ item.question }}</td>
          <td>
            {{ expandedId === item.id ? item.answer : truncate(item.answer, 100) }}
            <button @click="toggleExpand(item.id)" style="margin-left: 8px;">
              {{ expandedId === item.id ? '閉じる' : '続きを読む' }}
            </button>
          </td>
          <td>
            <button @click="deleteItem(item.id)" style="color: red;">削除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="results.length === 0" style="margin-top: 16px; color: gray;">
      検索結果がありません
    </p>
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
  truncate,
  deleteItem
} = useQuestionSearch()
</script>
