import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import App from './App.vue';

import AllProducts from './views/AllProducts.vue';
import ProductDetails from './views/ProductDetails.vue';
import AddProduct from './views/AddProduct.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: AllProducts },
    { path: '/products/:pid', component: ProductDetails, props: true},
    { path: '/products/add', component: AddProduct },
  ],
});

const app = createApp(App);
app.component('the-header', TheHeader);

app.use(router);
app.mount('#app');
