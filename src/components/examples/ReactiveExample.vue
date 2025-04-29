<script setup>
import { reactive,toRefs } from 'vue';

const users = reactive([
  {
    id: '1',
    name: 'Bedir',
    age: 29,
  },
  {
    id: '2',
    name: 'Anna',
    age: 25,
  },
]);
const user = reactive({
  id: '1',
  name: 'Bedir',
  lastName: 'Kurt',
});

const convertFromReactionToRef = reactive({
  id: '1',
  name: 'Bedir',
  lastName: 'Kurt',
});
// toRefs() reactive bir yapıyı ref e dönüştürür.
const userRef = toRefs(convertFromReactionToRef);

setTimeout(() => {
  userRef.name = 'toRefs Bed';
}, 2000);

setTimeout(() => {
  users[0].name = 'Bed ';
}, 2000);

setTimeout(() => {
  user.name = 'Bed  Reactive';
}, 2000);
</script>

<template>
  <section class="container">
    <span>2</span>
    <h1>Reactive<br />Composition API</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <p><strong>ID : </strong>{{ user.id }}</p>
        <p><strong>Name : </strong>{{ user.name }}</p>
        <p><strong>Age : </strong>{{ user.age }}</p>
      </li>
    </ul>
    <br />
    <ul>
      <li>
        <p><strong>Name : </strong>{{ user.name }}</p>
      </li>
    </ul>
    <ul>
      <li>
        <p><strong>toRefs Name : </strong>{{ userRef.name }}</p>
      </li>
    </ul>
  </section>

</template>

<style scoped></style>
