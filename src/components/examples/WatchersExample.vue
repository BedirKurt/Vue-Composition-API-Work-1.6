<script setup>
import { ref, watch } from 'vue';
const watcherName = ref('');
const watcherAge = ref(null);
const newValueName = ref('');
const oldValueName = ref(null);



// Not *
// Composition API kullanırken birden fazla bağımlılık kullanabiliyoruz watch kullanırken [ ] ile
// normalde   watch(watcherName, function (newValue,oldValue){ ...  }) olarak kullanıyorduk arasındaki fark bu
watch([watcherName, watcherAge], (newValues, oldValues) => {
  newValueName.value = newValues[0];
  oldValueName.value = oldValues[0];
  console.log('Old Value : ' + oldValues[0]);
  console.log('New Value : ' + newValues[0]);

});
</script>

<template>
  <section class="container">
    <span>6</span>
    <h1>Working with Watchers<br />Composition API</h1>
    <p><strong>New Value : </strong>{{ newValueName }}</p>
    <p><strong>Old Value : </strong>{{ oldValueName }}</p>
    <div class="input-group">
      <input type="text" placeholder="First Name" v-model="watcherName" />
      <input type="text" placeholder="Age" v-model="watcherAge" />
    </div>
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
