<script setup>

import WelcomeLayout from "@/components/welcome/WelcomeLayout.vue";
</script>

<template>
  <WelcomeLayout>
    <template v-slot:card>
      <img src="../../assets/icons/chart.svg" alt="图表">
      <h2>数据可视化<br>收支一目了然</h2>
    </template>
    <template v-slot:buttons>
      <RouterLink to="/start">跳过</RouterLink>
      <RouterLink to="/welcome/4">下一步</RouterLink>
    </template>
  </WelcomeLayout>
</template>

<style scoped lang="scss">

</style>