import { createStore } from 'vuex'

import loginStore from './loginStore'
import goodsStore from './goodsStore'

export default createStore({
  modules: {
    loginStore,
    goodsStore
  }
})
