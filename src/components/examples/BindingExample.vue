<script setup>
import { ref, computed } from 'vue';
const secondFistName = ref('');
const secondLastName = ref('');

const setSecondFullName = computed(function () {
  return (
    'Name : ' +
    secondFistName.value +
    ' ' +
    'Last Name : ' +
    secondLastName.value
  );
});
</script>

<template>
  <section class="container">
    <span>5</span>
    <h1>Two-Way-Binding and the Composition API</h1>
    <h2>{{ setSecondFullName }}</h2>
    <div class="input-group">
      <input type="text" placeholder="First Name" v-model="secondFistName" />
      <input type="text" placeholder="Last Name" v-model="secondLastName" />
    </div>
  </section>
</template>

<style scoped></style>
