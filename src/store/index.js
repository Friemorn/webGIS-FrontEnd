import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    points: [],
    lines: [],
    polygons: []
  },
  mutations: {
    setPoint (state, payload) {
      state.points = payload
    },
    setLine (state, payload) {
      state.lines = payload
    },
    setPolygon (state, payload) {
      state.polygons = payload
    }
  },
  actions: {
    getPoint (context) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/point')
          .then((res) => {
            context.commit('setPoint', res.data)
            resolve(res.data)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getLine (context) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/line')
          .then((res) => {
            context.commit('setLine', res.data)
            resolve(res.data)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getPolygon (context) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_BASE_URL + '/polygon')
          .then((res) => {
            console.log(res.data)
            context.commit('setPolygon', res.data)
            resolve(res.data)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  },
  getters: {
    point (state) {
      return state.points
    },
    line (state) {
      return state.lines
    },
    polygon (state) {
      return state.polygons
    }
  },
  modules: {
  }
})
