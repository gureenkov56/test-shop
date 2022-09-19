import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage";
import ShowcasePage from "@/views/ShowcasePage";
import CartPage from "@/views/CartPage";
import ProfilePage from "@/views/ProfilePage"
import LoginPage from "@/views/parts/LoginPage";


const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { title: 'Burger Shop' }
  },
  {
    path: '/showcase',
    component: ShowcasePage,
    meta: { title: 'Меню' }
  },
  {
    path: '/cart',
    component: CartPage,
    meta: { title: 'Корзина' }

  },
  {
    path: '/profile',
    component: ProfilePage,
    meta: { title: 'Профиль' }

  },
  {
    path: '/auth',
    component: LoginPage,
    meta: { title: 'Авторизация' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
});

export default router
