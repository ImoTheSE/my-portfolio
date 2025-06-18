<template>
  <button class="step-button" @click="$emit('action')">
    {{ button.label }}
  </button>
</template>

<script setup lang="ts">
import type { StepButton } from '@/types/Step'
defineProps<{ button: StepButton }>()
</script>
