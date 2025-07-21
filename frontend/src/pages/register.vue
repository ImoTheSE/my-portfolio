<template>
  <div class="flex justify-center items-center min-h-screen">
    <form @submit.prevent="onRegister" class="space-y-4 w-80">
      <h1 class="text-center text-2xl font-bold">ユーザー登録</h1>
      <input v-model="username" placeholder="ユーザー名" class="input" />
      <input v-model="password" type="password" placeholder="パスワード" class="input" />
      <button type="submit" class="btn">登録</button>
      <NuxtLink to="/login" class="text-sm text-blue-500 underline block text-center">ログインに戻る</NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
const username = ref('')
const password = ref('')

const onRegister = async () => {
  try {
    await $fetch('/api/v1/auth/register', {
      baseURL: 'http://localhost:3000',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { username: username.value, password: password.value }
    })
    alert('登録完了。ログインしてください')
    useRouter().push('/login')
  } catch (e) {
    alert('登録失敗')
  }
}
</script>
