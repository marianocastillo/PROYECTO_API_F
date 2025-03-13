<template>

    <div class="container mt-2" style="text-align: center; ">

        <h2 class="text-center text-primary border-bottom pb-3 mt-3">
            Buscar Documentos
        </h2>

        <input v-model="descripcion" placeholder="Buscar por descripción" @input="buscarArchivos"
            class="form-control-lg" />

        <div v-if="archivos.length" class="d-flex justify-content-center mt-3">
            <ul class="list-group" style="max-width: 400px;">
                <li v-for="archivo in archivos" :key="archivo.ruta"
                    class="list-group-item d-flex justify-content-between align-items-center ">
                    <button @click="mostrarArchivo(archivo.ruta)" class="btn btn-link p-0 "
                        style="text-decoration: none;">{{ archivo.descripcion }}
                    </button>
                    &nbsp;
                    <span @click="mostrarArchivo(archivo.ruta)" class="badge bg-primary rounded-pill btn btn-link"
                        style="text-decoration: none;">Ver</span>
                </li>
            </ul>
        </div>

        <!-- <div v-if="archivoSeleccionado">

            <iframe :src="`http://localhost:5015/api/Documento/archivos/${obtenerNombreArchivo(archivoSeleccionado)}`"
                width="100%" height="900"></iframe>
                <br>
             <button type="button" class="btn btn-outline-warning text-dark"
                @click="descargarArchivo(archivoSeleccionado)">Descargar</button> 
        </div> -->


        <!-- <br><br> -->
        <!-- <button class="btn btn-info"><router-link to="/" style="text-decoration: none;">Registro</router-link></button>  -->
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            descripcion: '',
            archivos: [],
            archivoSeleccionado: null
        };
    },
    methods: {
        buscarArchivos() {
            axios.get(`http://localhost:5015/api/Documento/ObtenerPorDescripcion?descripcion=${this.descripcion}`)
                .then(response => {
                    this.archivos = response.data;
                })
                .catch(error => {
                    console.error("Error al obtener los archivos", error);
                });
        },
        mostrarArchivo(ruta) {
            // this.archivoSeleccionado = ruta;
            window.open(`http://localhost:5015/api/Documento/archivos/${this.obtenerNombreArchivo(ruta)}`, '_blank');
            
        },

        descargarArchivo(ruta) {
            const link = document.createElement('a');
            link.href = `http://localhost:5015/api/archivos/${encodeURIComponent(ruta)}`;
            link.download = ruta.split('/').pop();
            link.click();
        },


        obtenerNombreArchivo(rutaCompleta) {
            return rutaCompleta.split('\\').pop(); // Extrae solo el nombre del archivo

        }

    }
};
</script>