
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('vue-multiselect/dist/vue-multiselect.min.css');

import VModal from 'vue-js-modal';
import Vue from 'vue';
import Turbolinks from 'turbolinks';

Vue.use(VModal);
Turbolinks.start();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('card-component', require('./components/Card.vue'));
Vue.component('menu-container', require('./modules/menu/MenuContainer.vue'));
Vue.component('resto-group', require('./modules/restos/RestoGroup.vue'));
Vue.component('order-group', require('./modules/orders/OrderGroup.vue'));
Vue.component('manage-orders', require('./modules/orders/ManageOrders.vue'));

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

window.eventBus = new Vue({});

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('app');
  if (element != null) {
    const app = new Vue({
      el: element
    });
  }
});
