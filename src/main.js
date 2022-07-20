import { createApp } from 'vue'
import App from './App';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/', component: ImageList},
        { path: '/upload', component: UploadForm}
    ]
});

createApp(App).use(store).use(router).mount('#app');