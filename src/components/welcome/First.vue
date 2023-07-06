<script setup>
import WelcomeLayout from "@/components/welcome/WelcomeLayout.vue";


</script>

<template>
    <WelcomeLayout>
      <template v-slot:card>
        <img src="../../assets/icons/pig.svg" alt="存钱罐">
        <h2>会挣钱<br>还要会省钱</h2>
      </template>
      <template v-slot:buttons>
        <RouterLink to="/start">跳过</RouterLink>
        <RouterLink to="/welcome/2">下一步</RouterLink>
      </template>
    </WelcomeLayout>
</template>

<style scoped lang="scss">

</style>