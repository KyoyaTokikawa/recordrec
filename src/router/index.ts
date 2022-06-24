import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/UI/views/Home.vue'
import AttendanceTime from '@/UI/views/AttendanceTime.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AttendanceTime',
    component : AttendanceTime
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
