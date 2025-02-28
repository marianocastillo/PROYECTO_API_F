import { createRouter, createWebHistory } from 'vue-router';
import App from '../components/App.vue';
import ViewArchivo from '../components/ViewArchivo.vue'; // Importa tu componente ViewArchivo

const routes = [
  {
    path: '/', // Ruta principal
    name: 'Home',
    component: App // Puedes poner el componente principal o crear una vista específica
  },
  {
    path: '/archivos', // Ruta para ver archivos
    name: 'ViewArchivo',
    component: ViewArchivo // Componente que se muestra cuando se accede a esta ruta
  }
];

// Crear el enrutador con la configuración de las rutas
const router = createRouter({
  history: createWebHistory(), // Usa el historial de la web para la navegación
  routes,
});

export default router;
