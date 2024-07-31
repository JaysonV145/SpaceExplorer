<template>
  <div class="carousel">
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>
    <button class="prev" @click="prevSlide">Anterior</button>
    <button class="next" @click="nextSlide">Siguiente</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        { src: "ruta/a/imagen1.jpg", alt: "Descripción 1" },
        { src: "ruta/a/imagen2.jpg", alt: "Descripción 2" },
        { src: "ruta/a/imagen3.jpg", alt: "Descripción 3" },
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0; // Vuelve al primer slide
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.slides.length - 1; // Vuelve al último slide
      }
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  transition: opacity 0.5s;
}

.carousel-slide img {
  width: 100%;
  display: block;
}

button.prev,
button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}
</style>
