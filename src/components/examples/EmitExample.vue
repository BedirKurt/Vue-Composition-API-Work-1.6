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

li {
  color: rgba(0, 0, 0, 0.562);
  justify-content: center;
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
  margin-bottom: 10px;
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
