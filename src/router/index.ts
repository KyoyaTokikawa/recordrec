import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/UI/views/Home.vue'
import AttendanceTime from '@/UI/views/AttendanceTime.vue'
import UserMaster from '@/UI/views/UserMaster.vue'
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
  {
    path: '/UserMaster',
    name: 'UserMaster',
    component: UserMaster
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
