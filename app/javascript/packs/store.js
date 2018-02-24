import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    runAjax () {
      return window.promisedAjax({
        url: "/api",
        type: "GET"
      });
    }
  }
});

export default store;
