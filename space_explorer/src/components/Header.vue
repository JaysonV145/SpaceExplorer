<template>
  <header class="space-header">
    <div class="logo">
      <img src="" alt="space explorer logo" />
    </div>
    <div class="infoPlanetas">
      <input
        type="text"
        placeholder="Escribe el nombre del planeta"
        class="busquedaPlanetas"
      />
      <div class="contadorPlanetas">
        Exoplanetas descubiertos: <span>{{ exoplanetCount }}</span>
      </div>
    </div>
    <h1 class="title">Space Landing</h1>
    <nav class="navegacion">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/about">Exploraciones</router-link></li>
        <li><router-link to="/projects">Exoplanetas</router-link></li>
        <li><router-link to="/skills">Misiones</router-link></li>
        <li><router-link to="/contact">Galería</router-link></li>
        <li class="search-container">
          <input
            type="text"
            class="busqueda"
            placeholder="Buscar misión, planeta..."
          />
          <font-awesome-icon icon="magnifying-glass" class="busquedaIcono" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faMagnifyingGlass);
export default {
  name: "Header",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      exoplanetCount: 0,
    };
  },
  mounted() {
    // Simulación de obtener datos de la API de la NASA
    this.exoplanetCount = 4000; // Aquí iría la lógica real para obtener el conteo de exoplanetas
  },
};
</script>

<style scoped>
.space-header {
  display: flex;
  z-index: 9;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: var(--color-negro);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
}

.logo img {
  height: 50px;
}

.infoPlanetas {
  display: flex;
  align-items: center;
  gap: 15px;
}

.busquedaPlanetas {
  padding: 5px;
  border: none;
  border-radius: 5px;
}

.counter {
  font-size: 14px;
}

.title {
  position: fixed;
  left: 0;
  margin: 0;
  margin-left: 20px;
  padding: 0;
  font-size: 24px;
}

.navegacion {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navegacion ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.navegacion li {
  margin: 0 15px;
}

.navegacion a {
  text-decoration: none;
  color: gray;
  transition: color 0.3s;
}

.navegacion a.router-link-active {
  font-weight: bold;
  color: white;
}

.navegacion a:hover {
  color: white;
}

.navegacion .busqueda {
  position: relative;
  left: 400px;
  bottom: 50%;
  border: solid 2px gray;
  border-radius: 15px;
  padding: 9px;
  background-color: transparent;
  color: white;
}

.navegacion .busquedaIcono {
  color: white;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
