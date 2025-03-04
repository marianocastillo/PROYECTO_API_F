import { createRouter, createWebHistory } from 'vue-router';

import VistaDeArchivos from './components/VistaDeArchivos';
import InicioDeApp from './components/InicioDeApp.vue';



// Crear el enrutador con la configuración de las rutas
const router = createRouter({
  history: createWebHistory(), // Usa el historial de la web para la navegación
  routes:[
  { path: '/', name: "InicioDeApp", component: InicioDeApp },
  { path: '/archivos', name: "VistaDeArchivos", component: VistaDeArchivos },
  
  ]

});

export default router;
