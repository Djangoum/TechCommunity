import Vue from 'vue';
import VueRouter from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { createRouter } from './router';
import Vuex from 'vuex';
import { createStore } from './store';

const appComponent = () => import('./components/app').then(({ AppComponent }) => AppComponent);
const navbarComponent = () => import('./components/navbar').then(({ NavbarComponent }) => NavbarComponent);

import './sass/main.scss';
import { AppComponent } from './components/app';

if (process.env.ENV === 'development' && module.hot) {
  const appModuleId = './components/app';
  const navBarId = './components/navbar';

  makeHot(appModuleId, appComponent,
    module.hot.accept('./components/app', () => reload(appModuleId, (<any>require('./components/app')).AppComponent)));

  makeHot(navBarId, navbarComponent,
    module.hot.accept('./components/navbar', () => reload(navBarId, (<any>require('./components/navbar')).AppComponent)));
}

Vue.use(Vuex);

new Vue({
  el: '#app-main',
  store: createStore(),
  router: createRouter(),
  render: h => h(AppComponent)
});
