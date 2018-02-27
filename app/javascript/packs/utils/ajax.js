import * as _axios from 'axios';

export function axios() {
  // Adding CSRF Token to axios
  _axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector("meta[name=csrf-token]").content;

  return _axios.apply(null, arguments);
}

export function fetchAPI (context, ajaxObject) {
  context.commit('loading', true);
  return axios(ajaxObject).then((data) => {
    context.commit('loading', false);
    return data;
  }, (resp) => {
    context.commit('loading', false);
    return Promise.reject(resp);
  });
}
