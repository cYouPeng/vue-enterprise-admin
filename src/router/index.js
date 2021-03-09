import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: {
      icon: 'el-icon-s-tools',
      title: '首页'
    },
    children: [
      {
        path: 'contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
        meta: {
          icon: 'el-icon-s-tools',
          title: '联系'
        },
        children: [
          {
            path: 'phone',
            name: 'phone',
            component: () => import(/* webpackChunkName: "about" */ '../views/phone.vue'),
            meta: {
              icon: 'el-icon-s-tools',
              title: '电话'
            }
          },
          {
            path: 'about',
            name: 'About',
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
            meta: {
              icon: 'el-icon-s-tools',
              title: '传真'
            }
          }
        ]
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          icon: 'el-icon-s-tools',
          title: '关于'
        }
      }
    ]
  },
  {
    path: '/info',
    name: 'Home',
    component: Layout,
    meta: {
      icon: 'el-icon-s-tools',
      title: '介绍'
    },
    children: [
      {
        path: 'contact2',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
        meta: {
          icon: 'el-icon-s-tools',
          title: '历史'
        }
      },
      {
        path: 'about2',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          icon: 'el-icon-s-tools',
          title: '创建'
        }
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
