<!-- Home.vue -->
<template>
  <div class="home-page">
    <h1 class="home-title">API</h1>
    <p class="home-description">API</p>
    <div v-if="data.length" class="image-container">
      <h2>Imágenes de la API:</h2>
      <ul class="image-list">
        <li v-for="item in data" :key="item.id" class="image-item">
          <img :src="item.imageUrl" :alt="item.title" class="imagenesNasa" />
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="../view-logic/Home.js"></script>

<style scoped>
/* Estilos para la sección de proyectos */
</style>
