import './assets/main.css';
import "@/styles/home.css";
import "@/styles/global.css"; /**Esta e sotra forma */
import store from '../store';


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(store)
app.mount('#app');
