<script setup>
import { inject } from 'vue';
const products = inject('products');
</script>

<template>
  <section class="router-container">
    <h2>All products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h2>{{ product.title }}</h2>
        <strong>${{ product.price }}</strong>
        <p>{{ product.description }}</p>
        <router-link :to="'/products/' + product.id">View Details</router-link>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0px 0px 15px rgb(125, 3, 224);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  transition: transform 0.03s ease;
}
li:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 15px rgb(255, 254, 255);
}

h3,
h4 {
  margin: 0.5rem 0;
}

.router-container {
  background-color: #570080;
  color: white;
}
.router-container:hover {
  background-color: #570080;
  color: white;
}

a {
  color: red;
}

strong {
  color: red;
}
</style>
