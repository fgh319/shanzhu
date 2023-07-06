import {createRouter, createWebHashHistory} from 'vue-router'
import Welcome from "@/views/Welcome.vue";
import Card1 from "@/components/welcome/Card1.vue";
import Button1 from "@/components/welcome/Button1.vue";
import Card2 from "@/components/welcome/Card2.vue";
import Button2 from "@/components/welcome/Button2.vue";
import Card3 from "@/components/welcome/Card3.vue";
import Button3 from "@/components/welcome/Button3.vue";
import Card4 from "@/components/welcome/Card4.vue";
import Button4 from "@/components/welcome/Button4.vue";

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
            buttons: Button1
          }
        },
        {
          path: '2', components: {
            cards: Card2,
            buttons: Button2
          }
        },
        {
          path: '3', components: {
            cards: Card3,
            buttons: Button3
          }
        },
        {
          path: '4', components: {
            cards: Card4,
            buttons: Button4
          }
        }
      ]
    }
  ]
})