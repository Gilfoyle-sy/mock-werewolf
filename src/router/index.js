import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../views/Home/index.vue')
const FriendList = () => import('../views/FriendList/index.vue')
const GameRoomme = () => import('../views/GameRoom/index.vue')
const Equipment = () => import('../views/Equipment')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/friendlist',
    name: 'FriendList',
    component: FriendList
  },
  {
    path: '/gameroom',
    name: 'GameRoom',
    component: GameRoomme
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: Equipment
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
