import { createRouter, createWebHistory } from 'vue-router'

const Main = () => import("../views/main")

const routes = [
  {
    path: "",
    redirect: "/main"
  },
  {
    path: "/main",
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
