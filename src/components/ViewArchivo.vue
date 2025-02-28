<template>
    <div v-if="urlArchivo">
      <h3>Vista previa del archivo</h3>
      <iframe :src="urlArchivo" width="600" height="400" frameborder="0">
        Tu navegador no soporta iframes.
      </iframe>
    </div>
    <div v-else>
      <p>No hay archivo para mostrar.</p>
    </div>
  </template>
  
  <script>

  
  export default {
     name: "ViewArchivo",
    props: {
      urlArchivo: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  