import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage";
import ShowcasePage from "@/views/ShowcasePage";
import CartPage from "@/views/CartPage";


const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/showcase',
    component: ShowcasePage
  },
  {
    path: '/cart',
    component: CartPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
