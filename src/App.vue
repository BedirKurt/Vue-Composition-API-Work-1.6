<script setup>
import RefExample from './components/examples/RefExample.vue';
import ReactiveExample from './components/examples/ReactiveExample.vue';
import MethodsExample from './components/examples/MethodsExample.vue';
import ComputedExample from './components/examples/ComputedExample.vue';
import WatchersExample from './components/examples/WatchersExample.vue';
import ExpenseTracker from './components/ExpenseTracker.vue';
import BindingExample from './components/examples/BindingExample.vue';
import PropsExample from './components/examples/PropsExample.vue';
import EmitExample from './components/examples/EmitExample.vue';
import ProvideInjectExample from './components/examples/ProvideInjectExample.vue';
import LifeCycleHooks from './components/examples/LifeCycleHooks.vue';

import { ref, reactive, provide } from 'vue';
const showComponent = ref(true);
const job = ref('Front-End');
const carModel = ref('Nissan');
const persons = reactive([
  {
    id: '1',
    firstName: 'Bedir',
    lastName: 'Kurt',
    age: 28,
  },
  {
    id: '2',
    firstName: 'Julie',
    lastName: 'Canys',
    age: 25,
  },
]);

// LifeCycleHooks için
setTimeout(() => {
  showComponent.value = false;
}, 4000);

provide('datatest', { job, persons });

function setNewJob(newjob) {
  job.value = newjob;
}
function resetJobName(newjob) {
  job.value = newjob;
}
const setNewName = (newName) => {
  persons[0].firstName = newName;
};
</script>

<template>
  <RefExample />
  <ReactiveExample />
  <MethodsExample />
  <ComputedExample />
  <BindingExample />
  <WatchersExample />
  <ExpenseTracker />
  <PropsExample
    name="BedVader"
    :age="29"
    :job="job"
    :car="carModel"
    :persons="persons"
  />
  <EmitExample
    :job="job"
    :persons="persons"
    @change-job="setNewJob"
    @reset-job="resetJobName"
    @update-name="setNewName"
  />
  <ProvideInjectExample />

  <section class="container">
    <h1>
      LifeCycleHooks <br />
      Composition API
    </h1>
    <LifeCycleHooks v-if="showComponent" />
    <button @click="showComponent = !showComponent">On/Off Component</button>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: monospace;
  background-color: rgba(0, 0, 0, 0.068);
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.534);
  padding: 1rem;
  text-align: center;
  background-color: white;
  transition: transform 0.3s ease;
}

.container:hover {
  transform: scale(1.03);
}

h1 {
  margin-bottom: 10px;
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
