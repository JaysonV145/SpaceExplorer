import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Experience from '../views/Experience.vue';
import Skills from '../views/Skills.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';

const routes = [ //Aquí se crean las rutas para el router-link
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/experience', component: Experience },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
