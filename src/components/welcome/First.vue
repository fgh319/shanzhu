<script setup>

</script>

<template>
  <div class="card-wrapper">
    <div class="card">
      <img src="@/assets/icons/存钱罐.svg" alt="存钱罐">
      <h2>会挣钱<br>还要会省钱</h2>
    </div>
    <div class="buttons">
      <RouterLink to="">跳过</RouterLink>
      <RouterLink to="/welcome/2">下一步</RouterLink>
    </div>
  </div>

</template>

<style scoped lang="scss">
  .card-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 8px #ddd;
    flex-grow: 4;
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
    flex-grow: 1;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }
</style>