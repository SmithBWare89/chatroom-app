import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import { projectAuth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  // Grab the current user
  const user = projectAuth.currentUser
  if(!user) {
    next({name: 'Welcome'})
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chatroom.vue'),
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
