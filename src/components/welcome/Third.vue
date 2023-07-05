<script setup>

</script>

<template>
  <div class="card">
    <img src="../../assets/icons/chart.svg" alt="图表">
    <h2>数据可视化<br>收支一目了然</h2>
  </div>
  <div class="buttons">
    <RouterLink to="/start">跳过</RouterLink>
    <RouterLink to="/welcome/4">下一步</RouterLink>
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