<template>
  <component :is="currentComponent" :step="currentStep" :onAction="handleAction" />
</template>

<script setup lang="ts">
import { useAppFlow } from '@/composables/useAppFlow'
import { shallowRef, watchEffect } from 'vue'

const { currentStep, handleAction } = useAppFlow()
const currentComponent = shallowRef()

watchEffect(async () => {
  if (currentStep.value.layoutComponent) {
    currentComponent.value = (await import(`@/components/Flow/${currentStep.value.layoutComponent}.vue`)).default
  } else {
    currentComponent.value = (await import('@/components/Flow/StepLayout.vue')).default
  }
})
</script>
