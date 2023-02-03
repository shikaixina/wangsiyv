/*
 * @Description: 路由
 * @Autor: lkx
 * @Date: 2023-01-31 17:02:54
 * @LastEditors: lkx
 * @LastEditTime: 2023-02-01 16:27:33
 */
import {createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'

const childRouteList:RouteRecordRaw[]=[
  {
    path: '/home',
    name:'Home',
    meta:{
      title: '首页',
    },
    component: () => import('@/pages/home/index.vue')
  },{
    path: '/album',
    name:'Album',
    meta:{
      title: '相册',
    },
    component: () => import('@/pages/album/index.vue')
  },{
    path: '/dynamic',
    name:'Dynamic',
    meta:{
      title: '动态',
    },
    component: () => import('@/pages/dynamic/index.vue')
  },{
    path: '/personalInformation',
    name:'PersonalInformation',
    meta:{
      title: '个人中心',
    },
    component: () => import('@/pages/personalInformation/index.vue')
  },
]

const routes:RouteRecordRaw[]  = [
  {
    path: '/',
    redirect:'/home',
    component: () => import('@/components/layout/index.vue'),
    children: childRouteList
  },
]

const router = createRouter({
  history:createWebHistory(),routes
})

export default router