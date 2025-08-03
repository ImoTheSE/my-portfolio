<template>
  <form class="step-form" @submit.prevent>
    <div v-for="(field, index) in fields" :key="index" class="form-field">
      <label :for="field.name">{{ field.label }}</label>
      <input
        v-if="field.type !== 'textarea'"
        :id="field.name"
        v-model="localData[field.name]"
        :type="field.type"
        :name="field.name"
        :placeholder="field.placeholder"
        :style="formStyle"
      />
      <textarea
        v-else
        :id="field.name"
        v-model="localData[field.name]"
        :name="field.name"
        :placeholder="field.placeholder"
        :style="formStyle"
      ></textarea>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { StepFormField } from '@/types/Step'
import { useStepFormSync } from '@/composables/useStepForm'

const props = defineProps<{
  fields: StepFormField[]
  formStyle: Record<string, string>
  formData: Record<string, string>
}>()

const emit = defineEmits<{
  (e: 'update:formData', value: Record<string, string>): void
}>()

const { localData } = useStepFormSync(props.formData, emit, () => props.formData)
</script>
