// composables/useStepForm.ts
import { ref, watch } from 'vue'
import { isEqual } from 'lodash'

export function useStepFormSync(
  initialData: Record<string, string>,
  emit: (event: 'update:formData', value: Record<string, string>) => void,
  getParentFormData: () => Record<string, string>
) {
  const localData = ref({ ...initialData })

  // 親 formData → localData
  watch(
    getParentFormData,
    (newVal) => {
      if (!isEqual(newVal, localData.value)) {
        localData.value = { ...newVal }
      }
    },
    { immediate: true }
  )

  // localData → emit to parent
  watch(
    localData,
    (newVal) => {
      if (!isEqual(newVal, getParentFormData())) {
        emit('update:formData', newVal)
      }
    },
    { deep: true }
  )

  return {
    localData,
  }
}
