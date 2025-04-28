<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  age: Number,
  job: String,
  car: String,
  persons: [String, Number],
});

</script>

<template>
  <section class="container">
    <span>8</span>
    <h1>
      Props / Ref <br />
      Composition API
    </h1>
    <div class="propsDiv">
      <label><strong>Name</strong></label>
      <p>{{ props.name }}</p>
      <label><strong>Age</strong></label>
      <p>{{ props.age }}</p>
      <label><strong>Job</strong></label>
      <p>{{ props.job }}</p>
      <label><strong>Car</strong></label>
      <p>{{ props.car }}</p>
    </div>
  </section>

  <section class="container">
    <h1>
      Props / Reactive <br />
      Composition API
    </h1>
    <ul>
      <li v-for="person in persons" :key="person.id">
        <p><strong>ID </strong>{{ person.id }}</p>
        <p><strong>Name </strong>{{ person.firstName }}</p>
        <p><strong>Surname </strong>{{ person.lastName }}</p>
        <p><strong>Age </strong>{{ person.age }}</p>
      </li>
    </ul>
  </section>

  <section class="container">

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
.propsDiv {
  border: 1px solid rgba(0, 0, 0, 0.459);
  border-radius: 10px;
  /* display: flex; */
  padding: 5px;
}
</style>
