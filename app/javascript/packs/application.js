/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Rails from 'rails-ujs';
Rails.start();

window.promisedAjax = (params) => {
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

document.addEventListener('DOMContentLoaded', () => {
  [].forEach.call(document.getElementsByClassName("notice-alert"), (el) => {
    setTimeout(() => {
      el.classList.add('d-none');
    }, 2000);
  });
});
