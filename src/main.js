import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router.js';






const app = createApp(App);
app.use(router);
app.mount('#app')



