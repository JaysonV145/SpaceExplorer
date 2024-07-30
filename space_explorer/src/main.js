import './assets/main.css';
import "@/styles/home.css";
import "@/styles/global.css"; /**Esta e sotra forma */


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
