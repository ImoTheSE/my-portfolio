<template>
  <div class="step-layout">
    <h1>{{ step.title }}</h1>
    <pre class="step-description">{{ step.description }}</pre>

    <StepForm v-if="step.formFields" :fields="step.formFields" />

    <div class="button-area" v-if="step.buttons">
      <StepButton
        v-for="(btn, index) in step.buttons"
        :key="index"
        :button="btn"
        @action="onAction(btn.actionKey)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Step } from '@/types/Step'
import StepButton from './StepButton.vue'
import StepForm from './StepForm.vue'

defineProps<{ step: Step; onAction: (key: string) => void }>()
</script>
