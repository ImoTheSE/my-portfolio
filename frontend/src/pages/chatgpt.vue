<template>
  <div class="chatgpt-page">
    <button @click="goBack" class="back-button">← 戻る</button>

    <h1>AIの回答</h1>

    <div class="chat-window">
      <div v-if="loading">回答を取得中...</div>
      <div v-else>{{ answer }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChatGpt } from '@/composables/useChatGpt'

const { loading, answer, goBack } = useChatGpt()
</script>

<style scoped>
.chatgpt-page {
  padding: 1rem;
  max-width: 600px;
  margin: auto;
}

.back-button {
  margin-bottom: 1rem;
}

.chat-window {
  border: 1px solid #ccc;
  padding: 1rem;
  max-height: 300px;
  overflow-y: auto;
  background-color: #f9f9f9;
  white-space: pre-wrap;
}
</style>
