import {createRouter, createWebHashHistory} from 'vue-router'
import Welcome from "@/views/Welcome.vue";
import Card1 from "@/components/welcome/Card1.vue";
import Buttons1 from "@/components/welcome/Buttons1.vue";
import Card2 from "@/components/welcome/Card2.vue";
import Buttons2 from "@/components/welcome/Buttons2.vue";
import Card3 from "@/components/welcome/Card3.vue";
import Buttons3 from "@/components/welcome/Buttons3.vue";
import Card4 from "@/components/welcome/Card4.vue";
import Buttons4 from "@/components/welcome/Buttons4.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', redirect: '/welcome'},
    {
      path: '/welcome',
      component: Welcome,
      children: [
        {path: '', redirect: '/welcome/1'},
        {
          path: '1', components: {
            cards: Card1,
            buttons: Buttons1
          }
        },
        {
          path: '2', components: {
            cards: Card2,
            buttons: Buttons2
          }
        },
        {
          path: '3', components: {
            cards: Card3,
            buttons: Buttons3
          }
        },
        {
          path: '4', components: {
            cards: Card4,
            buttons: Buttons4
          }
        }
      ]
    }
  ]
})