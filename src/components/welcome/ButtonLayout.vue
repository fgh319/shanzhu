<script setup>

</script>

<template>
  <div class="buttons">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.buttons {
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
}
</style>