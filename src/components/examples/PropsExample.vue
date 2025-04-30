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
