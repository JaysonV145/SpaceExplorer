<template>
  <main>
    <div class="titulo-inicio">
      <h1>Explorar</h1>
      <p>Tu ventana al espacio</p>
      <p class="parrafoBienvenida">
        ¡Bienvenido!, la plataforma definitiva para los entusiastas del espacio
        y la astronomía. Aquí, podrás sumergirte en fascinantes descubrimientos
        sobre el cosmos, desde exoplanetas y misiones espaciales hasta la
        tecnología detrás de las exploraciones espaciales. Explora imágenes
        impresionantes de la NASA, sigue las últimas noticias sobre misiones
        espaciales, y aprende sobre los misterios del universo. Ya seas un
        apasionado del espacio o un curioso explorador, tenemos contenido y
        recursos para todos. Prepárate para un viaje emocionante a través del
        espacio y más allá.
      </p>
    </div>

    <div class="planetaInicio">
      <img src="@/assets/planeta_sin_fondo.png" />
    </div>

    <div class="botonesInicio">
      <button type="submit" class="botonTicket">
        <div class="icono">
          <font-awesome-icon icon="arrow-left" class="iconoFlecha" />
        </div>
        <span>Conseguir ticket</span>
      </button>
      <button type="submit" class="botonDestino">
        <span>Selecciona tu destino</span>
        <svg>
          <rect x="0" y="0" fill="none"></rect>
        </svg>
      </button>
    </div>

    <div class="fraseInicial">
      <h2>
        "En algún lugar, algo increible esta esperando ser descubierto." -Carl
        Sagan
      </h2>
      <div class="botonesFrase">
        <ul>
          <li><router-link to="/">Saber más</router-link></li>
          <li><router-link to="/">Historia</router-link></li>
        </ul>
      </div>
    </div>
    <!--Datalist hace que esten las opciones abajo como del historial
    <input list="planetas" />

      <option>saturno</option>
      <option>urano</option>
      <option>marte</option>
      <option>centaurus</option>
    </datalist>-->
  </main>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import MedioSection from "./MedioSection.vue";

library.add(faMagnifyingGlass);
library.add(faArrowLeft);
/*library.add(faArrowLeft);*/

export default {
  name: "TitleSection",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
.titulo-inicio {
  width: 500px;
  text-align: start;
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
  position: absolute;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: var(--color-azul);
  color: var(--color-blanco);
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  overflow: hidden;
}

.botonTicket span {
  transition: 0.4s ease-in-out all;
  font-size: 15px;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  right: 0%;
}

.botonTicket:hover span {
  right: 50px;
}

.botonTicket .icono {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  right: 10px;
  transform: scale(0.45); /* Centra verticalmente el icon y tambien el tamaño */
  transition: 0.4s ease-in-out all; /*Transición de vuelta*/

  opacity: 0; /** Lo vuelve invisible*/
}

.botonTicket:hover .icono {
  transition: 0.4s ease-in-out all; /**Transición al pasar el mouse */
  right: 60px;
  opacity: 1;
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
  transition: 1.3s ease all; /*Tiempo de transición del botón*/
}

.botonDestino:hover rect {
  stroke-dashoffset: 0.8;
}

.fraseInicial {
  color: var(--color-blanco);
  overflow: hidden;
  display: inline-block;
  position: absolute;
  width: 219px;
  text-align: justify;
  font-size: 12px;
  right: 15px;
  bottom: 1px;
}

.fraseInicial h3 {
  opacity: 0.7;
}

.fraseInicial .botonesFrase {
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  cursor: pointer;
  color: var(--color-blanco);
  opacity: 0.7;
  transition: 0.3 ease all;
  margin-top: 30px;
  margin-bottom: 15px; /*MODIFICAR*/
}

.fraseInicial .botonesFrase ul {
  list-style: none;
  display: flex;
  position: relative;
  padding: 0;
  margin: 0;
}

.fraseInicial .botonesFrase a {
  text-decoration: none;
  color: var(--color-blanco);
  transition: color 0.3s;
}

.fraseInicial .botonesFrase button:hover {
  cursor: pointer;
}
</style>
