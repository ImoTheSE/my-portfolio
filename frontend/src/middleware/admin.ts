import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore()
  if (!auth.token || !auth.isAdmin) {
    return navigateTo('/login')
  }
})
