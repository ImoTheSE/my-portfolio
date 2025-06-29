<template>
  <div class="container">
    <!-- Miro埋め込み -->
    <iframe 
      width="768" 
      height="432" 
      src="https://miro.com/app/live-embed/uXjVIzQOrFo=/?embedMode=view_only_without_ui&moveToViewport=-1255,-598,2104,1053&embedId=647444576739" 
      frameborder="0" 
      scrolling="no" 
      allow="fullscreen; clipboard-read; clipboard-write" 
      allowfullscreen>
    </iframe>

    <!-- 左下ボタン -->
    <button class="btn bottom-left" @click="handleLeftClick">
      戻る
    </button>

    <!-- 右下ボタン -->
    <button class="btn bottom-right" @click="handleRightClick">
      次へ
    </button>
  </div>
</template>

<script setup lang="ts">
import { useHowToDebug } from '@/composables/useHowToDebug'
const { handleLeftClick, handleRightClick } = useHowToDebug();
</script>


<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  /* iframeを中央に配置する */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ボタン共通スタイル */
.btn {
  position: absolute;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.bottom-left {
  bottom: 1rem;
  left: 1rem;
}

.bottom-right {
  bottom: 1rem;
  right: 1rem;
}
</style>
