import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/song/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/requests',
    name: 'ChangeRequests',
    component: () => import('../views/ChangeRequests.vue')
  },
  {
    path: '/',
    redirect: '/song/1'
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/edit/:id',
    name: 'Editor',
    component: () => import('../views/Editor.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes
})

export default router
