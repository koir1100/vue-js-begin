// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.provide('globalMessage', 'hello!'); // key: globalMessage, value: hello!
app.mount('#app');
