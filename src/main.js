import { createApp } from 'vue'
import App from './components/App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import router from './router/router';


const app = createApp(App);
createApp(App).mount('#app')



app.use(router);