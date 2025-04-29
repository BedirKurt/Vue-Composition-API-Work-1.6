<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  age: Number,
  job: String,
  car: String,
  persons: Array,
});
</script>

<template>
  <section class="container">
    <span>8</span>
    <h1>
      Props / Ref <br />
      Composition API
    </h1>
    <div class="propsContainer">
      <label><strong>Name</strong></label>
      <p>{{ props.name }}</p>
      <label><strong>Age</strong></label>
      <p>{{ props.age }}</p>
      <label><strong>Job</strong></label>
      <p>{{ props.job }}</p>
      <label><strong>Car Model</strong></label>
      <p>{{ props.car }}</p>
    </div>
  </section>

  <section class="container">
    <span>9</span>
    <h1>
      Props / Reactive <br />
      Composition API
    </h1>
    <div class="propsContainer">
      <li v-for="person in persons" :key="person.id">
        <label><strong>ID</strong></label>
        <p>{{ person.id }}</p>
        <label><strong>Name</strong></label>
        <p>{{ person.firstName }}</p>
        <label><strong>Surname</strong></label>
        <p>{{ person.lastName }}</p>
        <label><strong>Age</strong></label>
        <p>{{ person.age }}</p>
        <br />
        <hr />
      </li>
    </div>
  </section>
</template>

<style scoped>
p {
  font-size: larger;
  background-color: rgba(0, 0, 0, 0.808);
  border-radius: 10px;
  padding: 5px;
  color: white;
  transition: transform 0.4s ease;
}
p:hover {
  transform: scale(1.03);
  box-shadow: rgba(255, 0, 0, 0.801) 0px 5px 15px;
}
.propsContainer {
  border: 1px solid rgba(0, 0, 0, 0.459);
  border-radius: 10px;
  /* display: flex; */
  padding: 5px;
}
li {
  list-style: none;
}
</style>
