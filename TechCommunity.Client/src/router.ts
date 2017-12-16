import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { SignInOidcComponent } from './components/oidc/signin-oidc/signin-oidc';
import { SignOutOidcComponent } from './components/oidc/signout-oidc/signout-oidc';
import { HomeComponent } from './components/home/home';

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/signin-oidc',
    component: SignInOidcComponent
  },
  {
    path: '/signout-oidc',
    component: SignOutOidcComponent
  }
];

export const createRouter = () => {
    let router = new VueRouter({ mode: 'history', routes: createRoutes() });

    router.beforeEach((to: Route, from: Route, next) => {
        next();
    });
    return router;
};