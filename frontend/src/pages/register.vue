<template>
  <div class="flex justify-center items-center min-h-screen">
    <form class="space-y-4 w-80" @submit.prevent="onRegister">
      <h1 class="text-center text-2xl font-bold">ユーザー登録・削除</h1>
      <input v-model="username" placeholder="ユーザー名" class="input" />
      <input
        v-model="password"
        type="password"
        placeholder="パスワード"
        class="input"
      />
      <button type="submit" class="btn">ユーザー登録</button>

      <button
        type="button"
        class="btn bg-red-500 text-white w-full"
        @click="onDelete"
      >
        ユーザー削除
      </button>

      <NuxtLink
        to="/login"
        class="text-sm text-blue-500 underline block text-center"
      >
        ログインに戻る
      </NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { username, password, onRegister, onDelete } = useAuth()
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 8px;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>
