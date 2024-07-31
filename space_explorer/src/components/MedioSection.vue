<template>
  <main>
    <div class="titulo-inicio">
      <h1>Historia</h1>
      <p>
        ¡Conoce los hechos históricos de la ciencia en la exploración del
        universo. Grandes astrónomos, astronautas, físicos, descubre quiénes han
        hecho parte de los grandes descubrimientos del universo y los
        astronautas que se han embarcado en la aventura de explorarlos.
      </p>
    </div>

    <div class="botonesInicio">
      <button type="submit" class="botonTicket">
        <div class="icono"><i class="mdi mdi-home"></i></div>
        <span>Conseguir ticket</span>
      </button>
      <button type="submit" class="botonDestino">
        <span>Selecciona tu destino</span>
        <svg>
          <rect x="0" y="0" fill="none"></rect>
        </svg>
      </button>
    </div>
    <div class="carruselPrincipal">
      <Carousel :slides="slides" />
    </div>
  </main>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Carousel from "@/components/Carousel.vue";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default {
  name: "MedioSection",
  components: {
    FontAwesomeIcon,
    Carousel,
  },
};
</script>

<style scoped>
main {
  position: relative;
  height: 100%;
}

.titulo-inicio {
  margin-top: 50px;
  width: 500px;
  text-align: end;
  text-align: justify;
  margin: 20px 0;
  color: white;
}

.titulo-inicio h1 {
  font-size: 80px;
}

.parrafoBienvenida {
  color: white;
  opacity: 0.7;
}

.planetaInicio {
  display: flex;
  position: fixed;
  justify-content: center;
  right: 15px;

  top: 50px;
}

.planetaInicio img {
  height: 700px;
  transform: rotate(30deg);
}

.botonesInicio {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 50px;
}

.botonTicket {
  border: none;
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: var(--color-azul);
  color: var(--color-blanco);
  cursor: pointer;
  margin: 5px 5px 5px 5px;
}

.botonTicket span {
  transition: 0.4s ease-in-out all;
  position: relative;
  justify-content: center;
  right: 0%;
}

.botonTicket .icono {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
  left: -20px;
  transition: 0.3 ease-in-out all;
  opacity: 0;
}

.botonTicket svg {
  color: var(--color-blanco);
  width: 35px;
  height: 35px;
}

.botonTicket:hover {
  background-color: var(--color-azul-hover);
  transition: 0.5s;
}

.botonTicket:hover .icono {
  left: calc(100% - 50px);
  opacity: 1;
}

.botonTicket:hover span {
  right: 50px;
}

.botonDestino {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  padding: 15px;
  background-color: transparent;
  color: var(--color-blanco);
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  transition: 0.3 ease all;
}

.botonDestino span {
  position: relative;
  z-index: 2;
  transition: 0.3s ease all;
}

.botonDestino svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  fill: none;
}

.botonDestino rect {
  width: 100%;
  height: 50px;
  stroke: var(--color-blanco);
  stroke-width: 2px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: 0.6s ease all;
}

.botonDestino:hover rect {
  stroke-dashoffset: 0;
}

.carruselPrincipal {
  position: absolute;
  top: 60px;
  transform: translateX(600px);
}
</style>
