// Importa createStore desde Vuex para crear la tienda
import { createStore } from 'vuex';

// Define la tienda con estado inicial, mutaciones y getters
export default createStore({
  state: {
    // Estado inicial
    user: null,
    items: [] // Puedes inicializar con datos si los tienes
  },
  mutations: {
    // Mutaciones para modificar el estado
    setUser(state, user) {
      state.user = user;
    },
    setItems(state, items) {
      state.items = items;
    }
  },
  getters: {
    // Getters para acceder al estado
    userName: (state) => state.user ? state.user.name : 'Invitado',
    itemsCount: (state) => state.items.length
  }
});
