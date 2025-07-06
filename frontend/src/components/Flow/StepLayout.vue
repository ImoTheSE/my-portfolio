<template>
  <div class="step-layout">
    <h1>{{ step.title }}</h1>
    <div class="step-description">
      <p v-for="(descGroup, i) in descriptionGroups"
      :key="i" 
      :style="descGroup.style"
      >
        <template v-for="(line, j) in descGroup.lines" :key="j">
          {{ line }}<br v-if="j !== descGroup.lines.length - 1" />
        </template>
      </p>
    </div>


    <StepForm v-if="step.formFields" 
      :fields="step.formFields" 
      :formStyle="step.formStyle"
      v-model:formData="formData"
    />

    <div
    class="button-area"
    v-for="(buttonGroup, groupIndex) in buttonGroups"
    :key="groupIndex"
    >
      <StepButton
        v-for="(btn, index) in buttonGroup.list"
        :key="index"
        :button="btn"
        :style="buttonGroup.style"
        @action="() => {
          props.onAction(btn.actionKey, formData)
          clearFormData()
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Step } from '@/types/Step'
import StepButton from './StepButton.vue'
import StepForm from './StepForm.vue'
import { ref } from 'vue'

const formData = ref<Record<string, string>>({})


const props = defineProps<{
  step: Step
  onAction: (key: string, formData?: Record<string, string>) => void
}>()

const buttonGroups = computed(() => {
  if (!props.step) return []
  return [
    props.step.button1 ? { list: props.step.button1, style: props.step.button1Style } : null,
    props.step.button2 ? { list: props.step.button2, style: props.step.button2Style } : null,
    props.step.button3 ? { list: props.step.button3, style: props.step.button3Style } : null,
    props.step.button4 ? { list: props.step.button4, style: props.step.button4Style } : null
  ].filter((group): group is { list: any; style: any } => group !== null)
})

const descriptionGroups = computed(() => {
  if (!props.step || !props.step.description) return []

  const base = props.step.description

  return base.map((desc, i) => {
    const styleKey = `description${i + 1}Style` as keyof Step
    return {
      lines: desc.split('\n'),
      style: props.step[styleKey] || {}
    }
  })
})

const clearFormData = () => {
  for (const key in formData.value) {
    formData.value[key] = ''
  }
}

</script>

