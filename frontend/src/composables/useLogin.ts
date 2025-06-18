import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useLogin() {
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')
  const router = useRouter()

  const login = async () => {
    errorMessage.value = '' // 前のエラーをクリア

    try {
      const res = await $fetch('/login', {
        method: 'POST',
        body: {
          user: {
            email: email.value,
            password: password.value
          }
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include'
      })

      router.push('/appFrame')
    } catch (error) {
      errorMessage.value = 'ログインに失敗しました'
      console.error('❌ ログイン失敗', error)
    }
  }

  return {
    email,
    password,
    login,
    errorMessage
  }
}
