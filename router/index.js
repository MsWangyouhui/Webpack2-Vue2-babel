
import Vue from 'vue'

import VueRouter from 'vue-router'

import  {One,Two,Three} from '../bulid/Complate/child/'

import Vuex from 'vuex'



Vue.use(Vuex)
Vue.use(VueRouter);
const loading =  {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '0.5s', opacity: '0.6s', termination: 300}}
        ]
      }
  }
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: One
    },
    {
      path: '/Center',
      name: 'article',
      component: Two
    },
    {
      path: '/Last',
      name: 'Article',
      component: Three
    }/*,
    {
      path: '/news',
      name: 'News',
      component: Naws
    }*/
  ]
})
