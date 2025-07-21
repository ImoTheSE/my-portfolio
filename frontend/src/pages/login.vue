<template>
  <div class="flex justify-center items-center min-h-screen">
    <form @submit.prevent="onSubmit" class="space-y-4 w-80">
      <h1 class="text-center text-2xl font-bold">ログイン</h1>
      <input v-model="username" placeholder="ユーザー名" class="input" />
      <input v-model="password" type="password" placeholder="パスワード" class="input" />
      <button type="submit" class="btn">ログイン</button>
      <NuxtLink to="/register" class="text-sm text-blue-500 underline block text-center">新規登録</NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
const username = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

const onSubmit = async () => {
  try {
    await auth.login(username.value, password.value)
    router.push(auth.isAdmin ? '/admin' : '/appFrame')
  } catch (e) {
    alert('ログイン失敗')
  }
}
</script>

<style scoped>
.input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; }
.btn { width: 100%; background: #2563eb; color: white; padding: 10px; border-radius: 6px; }
</style>
