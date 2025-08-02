<template>
  <DuckBubbleTail />
  <DuckImage />
  <div class="step-layout">
    <h1>{{ step.title }}</h1>
    <LogoutButton class="absolute top-4 right-4" />
    <div class="step-description">
      <p
        v-for="(descGroup, i) in descriptionGroups"
        :key="i"
        :style="descGroup.style"
      >
        <template v-for="(line, j) in descGroup.lines" :key="j">
          {{ line }}<br v-if="j !== descGroup.lines.length - 1" />
        </template>
      </p>
    </div>

    <StepForm
      v-if="step.formFields"
      v-model:formData="formData"
      :fields="step.formFields"
      :form-style="step.formStyle"
    />

    <div
      v-for="(buttonGroup, groupIndex) in buttonGroups"
      :key="groupIndex"
      class="button-area"
    >
      <StepButton
        v-for="(btn, index) in buttonGroup.list"
        :key="index"
        :button="btn"
        :style="buttonGroup.style"
        @action="
          () => {
            props.onAction(btn.actionKey, formData)
          }
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Step } from '@/types/Step'
import StepButton from './StepButton.vue'
import StepForm from './StepForm.vue'
import { useAppFlow } from '@/composables/useAppFlow'
import LogoutButton from '@/components/OtherParts/LogoutButton.vue'
import DuckImage from '@/components/OtherParts/DuckImage.vue'
import DuckBubbleTail from '@/components/OtherParts/DuckBubbleTail.vue'

const { getSavedInput } = useAppFlow()

const formData = ref<Record<string, string>>({})

const props = defineProps<{
  step: Step
  onAction: (key: string, formData?: Record<string, string>) => void
}>()

type ButtonGroup = {
  list: string[]
  style: Record<string, string>
}

const buttonGroups = computed<ButtonGroup[]>(() => {
  if (!props.step) return []

  return [1, 2, 3, 4]
    .map((i) => {
      const list = props.step[`button${i}` as const]
      const style = props.step[`button${i}Style` as const]
      return list ? { list, style } : null
    })
    .filter((group): group is ButtonGroup => group !== null)
})

const descriptionGroups = computed(() => {
  if (!props.step || !props.step.description) return []

  const base = props.step.description

  return base.map((desc, i) => {
    const styleKey = `description${i + 1}Style` as keyof Step
    return {
      lines: desc.split('\n'),
      style: props.step[styleKey] || {},
    }
  })
})

watch(
  () => props.step.id,
  (id) => {
    formData.value = getSavedInput(id)
    console.log('[watch] step.id changed → formData restored:', formData.value)
  },
  { immediate: true }
)
</script>
