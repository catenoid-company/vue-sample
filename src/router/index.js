import BaseComponent from '@/components/global/BaseComponent'
import LoginPage from '@/views/login/LoginPage'
import GoodsListPage from '@/views/goods/list/GoodsListPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/',
    name: 'base',
    component: BaseComponent,
    redirect: '/goods',
    children: [
      {
        path: 'goods',
        name: 'goods',
        component: GoodsListPage
      }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
