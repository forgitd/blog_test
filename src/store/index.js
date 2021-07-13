import { createStore } from 'vuex'

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import moduleA from "./modules/moduleA";


const a = moduleA

export default createStore({
  state: {
  },
  mutations,
  actions,
  getters,
  modules: {
    a
  }
})
