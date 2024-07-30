import "@/styles/home.css"; // Importar estilos de Home
import axios from 'axios';

export default {
  name: "Home",
  data() {
    return {
      data: null,
      position: null,
    };
  },

  methods: {

  getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition( //Obtiene posición y sigue los cambios
          (position) => { //Igual que: function(position){this.position=position}
            this.position=position; // 'this' se refiere a la instancia del componente Vue
          },
          (error) => {
            console.error("Error obteniendo la ubicación", error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      } else {
        console.error("La geolocalización no es soportada por este navegador");
      }
    },
  },
  mounted() {
    this.getLocation();
    },
};