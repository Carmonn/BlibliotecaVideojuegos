import { createRouter, createWebHistory } from "vue-router";

import Inicio from './paginas/Inicio.vue'

const router = new createRouter({
  history: createWebHistory(),
  routes:[
    {path:'/', redirect: '/inicio'},
    {path:'/inicio', naame:'Inicio', component: Inicio}
  ]
})

export default router