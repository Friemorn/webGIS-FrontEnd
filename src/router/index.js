import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Point from '../views/Point.vue'
import Line from '../views/Line.vue'
import Polygon from '../views/Polygon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/point',
    name: 'Point',
    component: Point
  },
  {
    path: '/line',
    name: 'Line',
    component: Line
  },
  {
    path: '/polygon',
    name: 'Polygon',
    component: Polygon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
