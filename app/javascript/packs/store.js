import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
import { mapSetters } from './utils/vuex';
import { axios, fetchAPI } from './utils/ajax';

import { getUrl } from './utils/fetch_data';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    user: null
  },
  mutations: {
    ...mapSetters(['loading', 'user']),
    testObj (state) {
      if (state.user != null)
        state.user.email = "<hidden>";
    }
  },
  actions: {
    runAjax () {
      return axios({
        url: "/api",
        method: "GET"
      });
    },
    fetchData (context, obj) {
      let req_obj = {
        attr: null,
        method: "GET"
      };

      if (typeof obj === "string") {
        // If a string is passed
        req_obj.attr = obj;
      } else if (typeof obj === "object") {
        // Get all properties of request object from obj
        req_obj = {...req_obj, ...obj};
      }

      const attr = req_obj.attr;
      req_obj.attr = undefined;

      // If URL is provided in request object, use that, else use default mapping
      req_obj.url = req_obj.url || getUrl[attr];

      // Sanity check
      if (req_obj.url == null)
        return Promise.reject(null);

      return fetchAPI(context, req_obj).then(({ data }) => {
        context.commit(attr, data);
      }, (err) => {
        context.commit(attr, null);
      });
    },
    fetchDatas (context, arr) {
      return Promise.all(arr.map((elem) => {
        return context.dispatch('fetchData', elem);
      }));
    }
  }
});

export default store;
