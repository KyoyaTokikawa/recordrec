import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/UI/views/Home.vue'
import AttendanceTime from '@/UI/views/AttendanceTime.vue'
import UserMaster from '@/UI/views/UserMaster/UserMaster.vue'
import AttendanceView from '@/UI/views/AttendanceView.vue'
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
  {
    path: '/AttendanceView',
    name: 'AttendanceView',
    component : AttendanceView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
