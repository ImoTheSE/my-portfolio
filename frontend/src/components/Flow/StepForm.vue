<template>
  <form class="step-form" @submit.prevent>
    <div v-for="(field, index) in fields" :key="index" class="form-field">
      <label :for="field.name">{{ field.label }}</label>
      <input
        v-if="field.type !== 'textarea'"
        :type="field.type"
        :name="field.name"
        :id="field.name"
        :placeholder="field.placeholder"
      />
      <textarea
        v-else
        :name="field.name"
        :id="field.name"
        :placeholder="field.placeholder"
      ></textarea>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { StepFormField } from '@/types/Step'
defineProps<{ fields: StepFormField[] }>()
</script>
