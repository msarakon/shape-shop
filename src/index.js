import Vue from 'vue';
import App from './components/app.vue';

const vm = new Vue({ render: createElem => createElem(App) });
vm.$mount('#app');
