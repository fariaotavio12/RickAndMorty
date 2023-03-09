import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/personagem/:id',
      name: 'personagem',
      props: true,
      component: () => import('../views/PersonagemView.vue')
    },
  ]


})

router.beforeEach((to, from, next) => {
  if (to.name === 'NotFound') {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
