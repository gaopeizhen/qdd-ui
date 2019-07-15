import Vue from 'vue';
import QddUI from '../src';
import App from './App';
Vue.use(QddUI);

const app = new Vue({
  ...App
});

app.$mount('#app');
