<template>
  <section id="contact">
    <h2>Contacto</h2>
    <form>
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label for="message">Mensaje:</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
/* Estilos para la sección de contacto */
</style>
