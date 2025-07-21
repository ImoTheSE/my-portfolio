<template>
    <LogoutButton class="" />
</template>

<script setup lang="ts">
import LogoutButton from '@/components/OtherParts/LogoutButton.vue'

definePageMeta({
  middleware: ['admin']
})

</script>
