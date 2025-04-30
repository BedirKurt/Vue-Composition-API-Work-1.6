<script setup>
import { inject, computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
// defineProps importla
// const props = defineProps(['pid']);
const products = inject('products');

console.log(products);
console.log(route);

const selectedProduct = computed(() =>
  products.value.find((product) => product.id === route.params.pid)
);
const details = reactive([
  {
    id: selectedProduct.value.id,
    title: selectedProduct.value.title,
    price: selectedProduct.value.price,
    description: selectedProduct.value.description,
  },
]);

// const id = selectedProduct.value.id;
// const title = selectedProduct.value.title;
// const price = selectedProduct.value.price;
// const description = selectedProduct.value.description;
</script>

<template>
  <section class="detail-container">
    <ul>
      <li v-for="detail in details" :key="detail.id">
        <div>
          <h2>{{ detail.title }}</h2>
          <strong>${{ detail.price }}</strong>
          <p>{{ detail.description }}</p>
        </div>
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

.detail-container {
  background-color: #570080;
  color: white;
  font-weight: bolder;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border-radius: 10px;
  padding: 1rem;
  transition: transform 0.03s ease;
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
