<!-- components/LogoutButton.vue -->
<template>
  <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
    ログアウト
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/login')
}
</script>
