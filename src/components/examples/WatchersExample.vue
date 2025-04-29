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

<style scoped></style>
