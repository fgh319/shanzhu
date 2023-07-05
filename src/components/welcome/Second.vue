<script setup>

</script>

<template>
  <div class="card">
    <img src="../../assets/icons/clock.svg" alt="闹钟">
    <h2>每日提醒<br>不遗漏每一笔账单</h2>
  </div>
  <div class="buttons">
    <RouterLink to="/start">跳过</RouterLink>
    <RouterLink to="/welcome/3">下一步</RouterLink>
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
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
</style>