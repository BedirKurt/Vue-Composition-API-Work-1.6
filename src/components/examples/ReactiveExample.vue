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

<style scoped>
ul li {
  list-style: none;
  border: 1px solid grey;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  transition: transform 0.3s ease;
}

ul li:hover {
  transform: scale(1.03);
}

strong {
  color: rgba(255, 0, 0, 0.658);
}

h1 {
  color: rgba(0, 0, 255, 0.507);
}

button {
  padding: 2px 5px;
  background-color: rgba(0, 0, 0, 0.582);
  color: rgba(255, 255, 255, 0.432);
  cursor: pointer;
  border-radius: 10px;
  font-weight: bolder;
  transition: transform 0.3s ease;
}

button:hover {
  transform: scale(1.03);
  color: white;
  background-color: rgba(0, 0, 0, 0.801);
}

.button-group {
  display: flex;
  justify-content: space-between;
}

input {
  transition: transform 0.4s ease;
  margin-bottom: 0.5rem;
}

input:hover {
  transform: scale(1.1);
}

.input-group {
  margin: 0.5rem 0px;
  display: flex;
  justify-content: space-between;
}

span {
  width: 20px;
  border: 1px solid rgba(0, 0, 255, 0.507);
  display: flex;
  justify-content: center;
  border-radius: 100%;
  padding: 2px;
  color: rgba(0, 0, 0, 0.76);
  margin: 5px 0px;
}

label {
  font-weight: bolder;
  font-size: larger;
}
</style>
