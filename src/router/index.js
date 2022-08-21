import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage";
import ShowcasePage from "@/views/ShowcasePage";
import CartPage from "@/views/CartPage";
import ProfilePage from "@/views/ProfilePage"
import LoginPage from "@/views/parts/LoginPage";


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
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/auth',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
