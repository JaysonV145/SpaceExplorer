<template>
  <div class="containerPrincipal">
    <TitleSection></TitleSection>
    <MedioSection></MedioSection>
    <Carousel></Carousel>
  </div>
</template>

<!--Mala práctica: <script src="../view-logic/Home.js"></script>
-->

<script>
import Home from "../view-logic/Home.js";

import TitleSection from "../components/TitleSection.vue";
import MedioSection from "@/components/MedioSection.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  components: {
    TitleSection,
    MedioSection,
    Carousel,
  },
};
</script>

<style scoped>
.containerPrincipal {
  flex-direction: column;
  margin-bottom: 50px;
  height: 100%; /* Asegura que el contenedor ocupe la altura completa de la ventana */
  color: white; /* Asegura que el texto sea visible sobre la imagen de fondo */
}

.containerPrincipal > * {
  /** Aplican espacio con el * a cada hijo de containerPrincipal/ */
  margin-top: 200px; /* Espacio entre cada componente */
}
</style>
