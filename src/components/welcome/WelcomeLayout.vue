<script setup>

</script>

<template>
  <div class="card">
    <slot name="card"></slot>
  </div>
  <div class="buttons">
    <slot name="buttons"></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px #ddd;
  flex-grow: 1;
  width: 90%;
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

.buttons {
  height: 20%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
}
</style>