<script setup>
import { ref } from 'vue';
const userName = ref('Bedir');
const user2 = ref({
  id: '1',
  name: 'Bedir',
  lastName: 'Kurt',
});

setTimeout(() => {
  userName.value = 'Bed ';
}, 2000);
setTimeout(() => {
  user2.value.name = 'Bed Ref';
}, 2000);
</script>

<template>
  <section class="container">
    <span>1</span>
    <h1>Ref<br />Composition API</h1>
    <h2>{{ userName }}</h2>
    <ul>
      <li>
        <p><strong>Name : </strong>{{ user2.name }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
