<template>
  <div class="bubble-wrapper">
    <svg
      viewBox="0 0 500 300"
      preserveAspectRatio="none"
      class="bubble-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M0,0
          H500
          V260
          L270,260
          L250,300
          L230,260
          H0
          Z
        "
        fill="white"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<style scoped>
.bubble-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 570px;
  z-index: -1; /* 最背面 */
  pointer-events: none; /* ボタンなどが上で押せるように */
}

.bubble-svg {
  width: 100%;
  height: 100%;
}
</style>
