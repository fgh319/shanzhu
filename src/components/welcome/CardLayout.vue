<script setup>

</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  margin: 0 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px #ddd;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  :slotted(h2) {
    margin-top: 20px;
    font-weight: normal;
  }
}
</style>