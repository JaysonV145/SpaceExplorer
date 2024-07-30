<template>
  <div class="localizacion">
    <h1>Coordenadas</h1>
    <div v-if="position">
      <p>Latitud: {{ position.coords.latitude }}</p>
      <p>Longitud: {{ position.coords.longitude }}</p>
    </div>
  </div>
</template>

<script src="../view-logic/exoplanetas.js"></script>

<style scoped>
.localizacion {
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 2; /* Asegura que el contenido esté por encima de la capa oscura */
  color: white; /* Asegura que el texto sea visible sobre la imagen de fondo */
}
</style>
