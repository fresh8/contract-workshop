import Vuex from 'vuex'
// import axios from '~plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      namespaced: true,
      products: {
        state: () => ({
          list: []
        }),
        mutations: {
          add(state, { text }) {
            state.list.push({
              text,
              done: false
            })
          },
          remove(state, { product }) {
            state.list.splice(state.list.indexOf(product), 1)
          },
          setProducts(state, data) {
            state.list = data
          }
        },
        actions: {
          async getProducts({ commit }) {
            let { data } = await this.$axios.get('http://localhost:3002/products')

            console.log(data)
            commit('setProducts', data)
            console.log(data)
          }
        }
      },
      orders: {
        state: () => ({
          list: []
        }),
        mutations: {
          add(state, { text }) {
            state.list.push({
              text,
              done: false
            })
          },
          remove(state, { order }) {
            state.list.splice(state.list.indexOf(order), 1)
          },
          setOrders(state, data) {
            state.list = data
          }
        },
        actions: {
          async getOrders({ commit }) {
            let { data } = await this.$axios.get('http://localhost:3001/orders')

            let orders = []
            for (let id in data) {
              let newOrder = data[id]
              newOrder.id = id
              orders.push(newOrder)
            }

            commit('setOrders', orders)
          }
        }
      }
    }
  })
}

export default createStore
