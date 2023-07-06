<script setup>

</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 85%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  :slotted(h2) {
    margin-top: 25px;
    font-weight: normal;
  }
  :deep(svg) {
    width: 150px;
    height: 150px;
  }
}
</style>