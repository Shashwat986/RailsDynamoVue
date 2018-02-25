import Rails from 'rails-ujs';

export function promisedAjax (params) {
  return new Promise((resolve, reject) => {
    Rails.ajax({...params, ...{
        success: (data) => {
          if (params.success) params.success(data);
          resolve(data);
        },
        error: (resp) => {
          if (params.error) params.error(resp);
          reject(resp);
        }
      }
    });
  });
};

export function fetchAPI (context, ajaxObject) {
  context.commit('loading', true);
  return promisedAjax(ajaxObject).then((data) => {
    context.commit('loading', false);
    return data;
  }, (resp) => {
    context.commit('loading', false);
    return Promise.reject(resp);
  });
}
