<script setup>
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['change-job', 'reset-job', 'update-name']);
const props = defineProps({
  job: String,
  persons: Array,
});

const changeJob = () => {
  if (props.job === 'Front-End') {
    emit('change-job', 'Back-end');
  }
};
function resetJob() {
  if (props.job === 'Back-end') {
    emit('reset-job', 'Front-End');
  }
}
const setNewName = () => {
  if (props.persons[0].firstName === 'Bedir') {
    emit('update-name', 'BedVader');
  }
};
</script>

<template>
  <section class="container">
    <span>10</span>
    <h1>
      Emits <br />
      Composition API
    </h1>
    <div>
      <p>{{ props.job }}</p>
      <button @click="changeJob">Update Job</button>
      <button @click="resetJob">Reset Job</button>
    </div>
    <div>
      <h2>Person List</h2>
      <ul>
        <li v-for="person in persons" :key="person.id">
          {{ person.id }}
          {{ person.firstName }}
          {{ person.lastName }}
          {{ person.age }}
        </li>
      </ul>
      <button @click="setNewName">Change Name</button>
    </div>
  </section>
</template>

<style scoped>
p {
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.692);
  color: white;
}
button {
  margin-bottom: 10px;
}
li {
  color: rgba(0, 0, 0, 0.562);
  justify-content: center;
}
</style>
