// composables/useAuth.ts
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export function useAuth() {
  const username = ref('')
  const password = ref('')
  const auth = useAuthStore()
  const router = useRouter()
  const config = useRuntimeConfig()

  const onLogin = async () => {
    try {
      await auth.login(username.value, password.value)
      router.push(auth.isAdmin ? '/admin' : '/appFrame')
    } catch (e) {
      console.error('ログイン失敗:', e)
      alert('ログイン失敗')
    }
  }

  const onRegister = async () => {
    try {
      await $fetch('/api/v1/auth/register', {
        baseURL: config.public.apiBase,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          username: username.value,
          password: password.value,
        },
      })
      alert('登録完了。ログインしてください')
      router.push('/login')
    } catch (e) {
      console.error('登録失敗:', e)
      alert('登録失敗')
    }
  }

  const onDelete = async () => {
    if (!username.value) {
      alert('ユーザー名を入力してください')
      return
    }

    if (!confirm(`ユーザー ${username.value} を削除しますか？`)) return

    try {
      await $fetch(`/api/v1/auth/${encodeURIComponent(username.value)}`, {
        baseURL: config.public.apiBase,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      alert('削除完了')
      username.value = ''
      password.value = ''
    } catch (e) {
      console.error('削除失敗:', e)
      alert('削除失敗')
    }
  }

  return {
    username,
    password,
    onLogin,
    onRegister,
    onDelete,
  }
}
