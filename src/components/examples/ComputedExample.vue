<script setup>
import { ref, computed } from 'vue';
const firstName = ref('');
const lastName = ref('');

const setFullName = computed(function () {
  return firstName.value + ' ' + lastName.value;
});

function setFirstName(event) {
  firstName.value = event.target.value;
}
const setLastName = (event) => {
  lastName.value = event.target.value;
};
</script>

<template>
  <section class="container">
    <span>4</span>
    <h1>Computed<br />Composition API</h1>
    <h2>{{ setFullName }}</h2>
    <div class="input-group">
      <input
        type="text"
        placeholder="First Name"
        @input="setFirstName($event)"
      />
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<style scoped></style>
