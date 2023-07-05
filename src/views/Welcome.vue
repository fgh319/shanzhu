<script setup>

</script>

<template>
  <div class="wrapper">
    <header>
      <img src="@/assets/icons/logo.svg" alt="logo">
      <h1>轻记账</h1>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    background: #eee;
    header {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
      }
      h1 {
        font-weight: normal;
      }
    }
    main {
      flex-grow: 4;
      //display: flex;
      //flex-direction: column;
      //justify-content: center;
      //align-items: center;
    }
  }
</style>