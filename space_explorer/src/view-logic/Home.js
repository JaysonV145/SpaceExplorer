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
    async fetchData() {
      try {
        const response = await axios.get('https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image');
        const items = response.data.collection.items;

        this.data = items.map(item => ({
          id: item.data[0].nasa_id,
          title: item.data[0].title,
          imageUrl: item.links[0].href
        }));
      } catch (error) {
      
      console.error('Error fetching data:', error);
    }
  },  
  getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            this.position=position;
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
  created() {
    this.fetchData();
  },
  mounted() {
    this.getLocation();
    },
};

  /** 
  methods: {
    async fetchData(){
      try {
        const response = await axios.get('/api/images-api');
        this.data = response.data.map(item ({
          id: item.ref,
          nombre: item.sat_fullname

        }));
      } catch (error){
        console.log("Error al realizar GET")
      }
    }
  },
  created(){
    this.fetchData();
  }*/