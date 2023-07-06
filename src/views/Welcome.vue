<script setup>

</script>

<template>
  <div class="wrapper">
    <header>
      <img src="@/assets/icons/logo.svg" alt="logo">
      <h1>轻记账</h1>
    </header>
    <main>
      <router-view name="cards" v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer>
      <router-view name="buttons"></router-view>
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
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;

    }
    footer {
      height: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s ease;
    position: absolute;
  }

  .slide-enter-from {
    transform: translateX(100vw);
    opacity: 0;
  }

  .slide-leave-to {
    transform: translateX(-100vw);
    opacity: 0;
  }
</style>