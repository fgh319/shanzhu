<script setup>

import WelcomeLayout from "@/components/welcome/WelcomeLayout.vue";
</script>

<template>
  <WelcomeLayout>
    <template v-slot:card>
      <img src="../../assets/icons/clock.svg" alt="闹钟">
      <h2>每日提醒<br>不遗漏每一笔账单</h2>
    </template>
    <template v-slot:buttons>
      <RouterLink to="/start">跳过</RouterLink>
      <RouterLink to="/welcome/3">下一步</RouterLink>
    </template>
  </WelcomeLayout>
</template>

<style scoped lang="scss">

</style>