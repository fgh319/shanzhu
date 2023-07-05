<script setup>

</script>

<template>
  <div class="card">
    <img src="../../assets/icons/cloud.svg" alt="云">
    <h2>云备份<br>再也不怕数据丢失</h2>
  </div>
  <div class="buttons">
    <RouterLink to="/start">完成</RouterLink>
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
  h2 {
    margin-top: 20px;
    font-weight: normal;
  }
}

.buttons {
  height: 20%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>