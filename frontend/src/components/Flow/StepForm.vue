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
        v-model="localData[field.name]"
        :style="formStyle"
      />
      <textarea
        v-else
        :name="field.name"
        :id="field.name"
        :placeholder="field.placeholder"
        v-model="localData[field.name]"
        :style="formStyle"
      ></textarea>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { StepFormField } from '@/types/Step'

const props = defineProps<{
  fields: StepFormField[]
  formStyle: Record<string, string>
  formData: Record<string, string>
}>()

const emit = defineEmits(['update:formData'])

const localData = ref({ ...props.formData })

watch(localData, (newVal) => {
  emit('update:formData', newVal)
}, { deep: true })

</script>
