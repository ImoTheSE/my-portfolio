<template>
  <div class="duck-wrapper">
    <img v-if="imageSrc" :src="imageSrc" alt="アヒル" class="duck-image" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fukidashiImage from '@/assets/image/fukidashi.png'

const imageSrc = ref('')
onMounted(() => {
  imageSrc.value = `https://random-d.uk/api/randomimg?${Date.now()}`
})
</script>

<style scoped>
.duck-wrapper {
  position: absolute;
  top: 573px; /* ← ウィンドウ下から16pxに固定 */
  left: 50%;
  transform: translateX(-50%);
  width: 300px;  /* ← ここで固定サイズ */
  height: 180px;
  pointer-events: none;
  z-index: 0;
}

.duck-image {
  position: static; /* ← wrapperがすでに中央配置なので static でOK */
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

</style>
