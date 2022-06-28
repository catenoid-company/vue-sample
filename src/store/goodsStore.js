import axios from 'axios'

const state = {
  goodsDetail: {},
  goodsList: []
}

const getters = {}

const actions = {
  async requestGoodsDetail ({ commit }, code) {
    const res = await axios.get(`${process.env.VUE_APP_BASE_URL}/v1/ms/goods/${code}`)

    if (res.data.resultStatus === 200) {
      commit('setGoodsDetail', res.data.data)
    }
    return res
  },
  async requestGoodsList ({ commit }) {
    const res = await axios.get(`${process.env.VUE_APP_BASE_URL}/v1/ms/goods`)

    // eslint-disable-next-line no-empty
    if (res.data.resultStatus === 200) {
      commit('setGoodsList', res.data.data)
    }

    return res
  }
}

const mutations = {
  setGoodsDetail (state, data) {
    state.goodsDetail = data
  },
  setGoodsList (state, list) {
    state.goodsList = list
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
