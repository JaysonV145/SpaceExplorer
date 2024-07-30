<!--Aquí se encuentra la estructura global de la aplicación-->

<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- Esto renderizará las vistas correspondientes -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
