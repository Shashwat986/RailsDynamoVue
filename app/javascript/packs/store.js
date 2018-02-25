import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
import {mapSetters} from './utils/vuex';
import {promisedAjax, fetchAPI} from './utils/ajax';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    username: null
  },
  mutations: {
    ...mapSetters(['loading', 'username']),
  },
  actions: {
    runAjax () {
      return window.promisedAjax({
        url: "/api",
        type: "GET"
      });
    },
    fetchUser (context) {
      return fetchAPI(context, {
        url: "/api/users",
        type: "GET"
      }).then((d) => {
        context.commit('username', d.username);
      }, (err) => {
        context.commit('username', null);
      });
    }
  }
});

export default store;
