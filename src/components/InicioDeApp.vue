<template>

    <div class="container mt-5">
      <h2>Subir Documento</h2>
      <form @submit.prevent="subirDocumento">
        <div class="form-group">
          <label for="descripcion">Descripción:</label>
          <input type="text" id="descripcion" v-model="documento.descripcion" class="form-control" required />
        </div>
  
        <div class="form-group">
          <label for="archivo">Archivo:</label>
          <input type="file" id="archivo" @change="handleFileUpload" class="form-control" required />
        </div>
  
        <button type="submit" class="btn btn-primary">Subir Documento</button>
        &nbsp;
        <button type="button" class="btn btn-outline-warning"><router-link to="/archivos" style="text-decoration: none;">Ver Archivos</router-link></button>
        
      </form>
  
      <div v-if="mensaje" class="alert mt-3" :class="mensajeTipo">
        {{ mensaje }}
      </div>
      
      
    </div>
    <router-view></router-view>
  </template>
  
  
  
  <script>
  
  import axios from "axios";
  
  
  export default {
    name: "InicioDeApp",
    components: {
     
    },
    data() {
      return {
        documento: {
          descripcion: "",
          archivo: "",
         
        },
        mensaje: "",
        mensajeTipo: "",
      };
    },
    methods: {
      handleFileUpload(event) {
        this.documento.archivo = event.target.files[0];
      },
  
       
      async subirDocumento() {
        if (!this.documento.archivo) {
          this.mensaje = "Por favor, selecciona un archivo.";
          this.mensajeTipo = "alert-danger";
          return;
        }
  
        const formData = new FormData();
        formData.append("Descripcion", this.documento.descripcion);
        formData.append("Archivo", this.documento.archivo);
  
        try {
          const response = await axios.post("http://localhost:5015/api/Documento/Subir", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
  
          this.mensaje = response.data.mensaje;
          this.mensajeTipo = "alert-success";
  
          // Limpiar formulario después de subir
          this.documento.descripcion = "";
          this.documento.archivo = null;
        } catch (error) {
          console.error("Error al subir documento:", error);
          this.mensaje = "Error al subir el documento.";
          this.mensajeTipo = "alert-danger";
        }
      },
    },
  };
  </script>
  
  
  
  
  
  
  
  
  
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  .form-group {
    margin-bottom: 15px;
  }
  </style>
  