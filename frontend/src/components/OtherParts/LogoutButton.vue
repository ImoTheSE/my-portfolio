<!-- components/LogoutButton.vue -->
<template>
  <button class="btn" @click="logout">ログアウト</button>
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
