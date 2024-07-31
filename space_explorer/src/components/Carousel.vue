<template>
  <div class="carousel">
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
        <img :src="slide.src" :alt="slide.alt" />
        <div class="carousel-caption">
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
    <button class="prev" @click="prevSlide">Anterior</button>
    <button class="next" @click="nextSlide">Siguiente</button>
  </div>
</template>

<script>
import planetaSinFondo from "@/assets/carl_sagan.jpg";
import coheteSinFondo from "@/assets/cohete_sin_fondo.png";
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          src: planetaSinFondo,
          alt: "Descripción 1",
          description:
            "Carl sagan fue un reconocido astronomo, su investigación ayudo a las astrofísica y su gran sueño siempre fue la divulgación de la ciencia",
        },
        { src: coheteSinFondo, alt: "Descripción 22" },
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1); /*Sombra suave*/
}

.carousel-track {
  display: flex;
  height: 700px;
  transition: transform 0.7s ease-in-out; /*Transición suave*/
}

.carousel-slide {
  display: flex; /* Usa flexbox para centrar el contenido */
  justify-content: space-between; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  min-width: 100%;
  transition: opacity 0.5s, transform 0.5s; /*Transición de opacidad y escala*/
  position: relative;
  padding: 20px;
  box-sizing: border-box;
}

.carousel-slide img {
  max-width: 100%; /* Asegura que la imagen no exceda el ancho del slide */
  max-height: 100%; /* Mantiene la proporción original */
  display: block;
  object-fit: contain;
  border-radius: 20px; /* Bordes redondeados */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Sombra */
  transition: transform 0.3s, box-shadow 0.3s; /* Transiciones en hover */
}

.carousel-slide img:hover {
  transform: scale(1.05); /* Aumenta ligeramente el tamaño */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4); /* Sombra más pronunciada */
}

.carousel-caption {
  flex: 1; /* Toma el resto del espacio disponible */
  padding-left: 20px; /* Espacio entre la imagen y el texto */
  max-width: 50%; /* Limita el ancho de la descripción */
  color: var(--color-blanco);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 5px;
  text-align: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.carousel-caption:hover {
  opacity: 0.9;
  transform: scale(1.05);
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
