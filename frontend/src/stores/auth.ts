import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    isAdmin: false,
  }),
  actions: {
    async login(username: string, password: string) {
      const config = useRuntimeConfig()

      const { data, error } = await useFetch<{
        token: string
        is_admin: boolean
      }>(`${config.public.apiBase}/api/v1/auth/login`, {
        method: 'POST',
        body: { username, password },
      })

      if (error.value) throw error.value

      if (data.value) {
        this.token = data.value.token
        this.isAdmin = data.value.is_admin
      } else {
        throw new Error('ログインレスポンスが不正です')
      }
    },

    logout() {
      this.token = ''
      this.isAdmin = false
    },
  },
  persist: true,
})
