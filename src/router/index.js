import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage";
import ShowcasePage from "@/views/ShowcasePage";


const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/showcase',
    component: ShowcasePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
