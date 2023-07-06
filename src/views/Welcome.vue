<script setup>

</script>

<template>
  <div class="wrapper">
    <header>
      <img src="@/assets/icons/logo.svg" alt="logo">
      <h1>轻记账</h1>
    </header>
    <main>
      <RouterView name="cards"></RouterView>
    </main>
    <footer>
      <RouterView name="buttons"></RouterView>
    </footer>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    background: #eee;
    header {
      height: 25%;
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
      height: 60%;
      display: flex;
      flex-direction: column;
    }
    footer {
      height: 15%;
      display: flex;
    }
  }
</style>