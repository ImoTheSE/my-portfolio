<template>
  <div class="chatgpt-page">
    <button @click="goBack" class="back-button">← 戻る</button>
    <div class="description">
      <p>
        ※フォームで入力した内容を元に質問文を送っています。過去に同じ質問があった場合は、保存した回答から出力します。新規の質問文はAI出力するので少し時間がかかります。
      </p>
    </div>
    <div class="chat-window">
      <div v-if="loading">回答を取得中...</div>
      <div v-else>{{ answer }}</div>
    </div>
  </div>
  <DuckBubbleTail />
  <DuckImage />
</template>

<script setup lang="ts">
import { useChatGpt } from '@/composables/useChatGpt'
import DuckImage from '@/components/OtherParts/DuckImage.vue'
import DuckBubbleTail from '@/components/OtherParts/DuckBubbleTail.vue'

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

.description {
  max-width: 768px;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  line-height: 1.6;
  padding: 0 1rem;
  text-align: center;
}
</style>
