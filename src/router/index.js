import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from "@/views/Welcome.vue";
import First from "@/components/welcome/First.vue";
import Second from "@/components/welcome/Second.vue";
import Third from "@/components/welcome/Third.vue";
import Forth from "@/components/welcome/Forth.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', redirect: '/welcome'},
    {path: '/welcome',
      component: Welcome,
      children: [
        {path: '', redirect: '/welcome/1'},
        {path: '1', component: First},
        {path: '2', component: Second},
        {path: '3', component: Third},
        {path: '4', component: Forth}
      ]}
  ]
})