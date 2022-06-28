import axios from 'axios'

const state = {
  loginId: '',
  loginPassword: ''
}

const getters = {}

const actions = {
  async requestLogin ({ commit }, data) {
    const res = await axios.post(`${process.env.VUE_APP_BASE_URL}/v1/ms/authorize`, data)

    if (res.data.resultStatus === 200) {
      document.cookie = 'token=' + encodeURIComponent(res.data.data.token) + ';expires=' + new Date(res.data.data.expiresDate).toUTCString() + ';path=/'
      axios.interceptors.request.use((config) => {
        config.headers['x-auth-token'] = res.data.data.token

        return config
      })
    }
    return res
  }
}

const mutations = {
  initializeLoginInfo (state) {
    state.loginId = ''
    state.loginPassword = ''
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
