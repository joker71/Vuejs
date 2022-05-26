import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/list',
    name: 'Product',
    meta: { title: 'Product', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'Products',
        component: () => import('@/views/product/index'),
        meta: { title: 'Products', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Add Product',
        component: () => import('@/views/product/add'),
        meta: { title: 'Add Products', icon: 'tree' }
      },
      {
        path: 'details/:id',
        name: 'Product',
        component: () => import('@/views/product/details'),
        meta: { title: 'Product', icon: 'tree' },
        hidden: true
      }
    ]
  },
  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/list',
    name: 'Customer',
    meta: { title: 'Customer', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'Customers',
        component: () => import('@/views/customer/customers'),
        meta: { title: 'Customer', icon: 'user' }
      },
      {
        path: 'details/:id',
        name: 'Infor',
        component: () => import('@/views/customer/details'),
        meta: { title: 'Infor', icon: 'tree' },
        hidden: true
      },
      {
        path: 'orders/:id',
        name: 'Carts',
        component: () => import('@/views/cart/carts'),
        meta: { title: 'Cart', icon: 'tree' },
        hidden: true
      }
    ]
  },
  {
    path: '/cart',
    component: Layout,
    redirect: '/cart/list',
    name: 'Cart',
    meta: { title: 'Cart', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'Carts',
        component: () => import('@/views/cart/carts'),
        meta: { title: 'Cart', icon: 'tree' }
      },
      {
        path: 'details/:id',
        name: 'Order',
        component: () => import('@/views/cart/details'),
        meta: { title: 'Order', icon: 'tree' },
        hidden: true
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
