<script setup>

import WelcomeLayout from "@/components/welcome/WelcomeLayout.vue";
</script>

<template>
  <WelcomeLayout>
    <template v-slot:card>
      <img src="../../assets/icons/cloud.svg" alt="云">
      <h2>云备份<br>再也不怕数据丢失</h2>
    </template>
    <template v-slot:buttons>
      <RouterLink to="/start">完成</RouterLink>
    </template>
  </WelcomeLayout>
</template>

<style scoped lang="scss">

</style>