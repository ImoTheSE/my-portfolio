<template>
  <form @submit.prevent="login">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">ログイン</button>
  </form>
  <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
</template>

<script setup lang="ts">
import { useLogin } from '~/composables/useLogin'

const { email, password, login, errorMessage } = useLogin()
</script>
