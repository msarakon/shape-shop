import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './components/app.vue';

Vue.use(VueAxios, axios);

const vm = new Vue({ render: createElem => createElem(App) });
vm.$mount('#app');
