import { createApp } from 'vue'
import App from '../components/App.vue'
import ViewArchivo from '../components/ViewArchivo.vue';

import router from './router/router';


const app = createApp(App);
createApp(App).mount('#app')
createApp(ViewArchivo).mount('#app')

app.use(router);