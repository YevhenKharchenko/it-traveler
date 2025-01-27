import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '@/api/authService/index.js'

const AuthPage = () => import('@/views/AuthView.vue')
const GreetingPage = () => import('@/views/GreetingView.vue')
const Homepage = () => import('@/views/HomepageView.vue')
const LoginPage = () => import('@/views/LoginView.vue')
const RegistrationPage = () => import('@/views/RegistrationView.vue')

const routes = [
  { path: '/', component: GreetingPage, name: 'greeting' },
  { path: '/map', component: Homepage, name: 'homepage' },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginPage, name: 'login' },
      { path: 'register', component: RegistrationPage, name: 'register' },
    ],
  },
]

export const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
  const authRoutes = ['login', 'register']
  const { name } = to

  if (authService.isLoggedIn() && authRoutes.includes(name)) {
    next({
      name: 'homepage',
    })
  } else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
    next({
      name: 'login',
    })
  } else {
    next()
  }
})
