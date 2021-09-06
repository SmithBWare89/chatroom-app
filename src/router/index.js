import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import { projectAuth } from '../firebase/config'

// function to handle user being authenticated
const requireAuth = (to, from, next) => {
  // Grab the current user
  let user = projectAuth.currentUser
  if(!user) {
    next({name: 'Welcome'})
  } else {
    next()
  }
}

// function to stop user from requiring auth to navigate if logged in
const requireNoAuth = (to, from, next) => {
  // Grab the current user
  let user = projectAuth.currentUser
  if(user) {
    next({name: 'Chatroom'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: () => import('../views/Chatroom.vue'),
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
