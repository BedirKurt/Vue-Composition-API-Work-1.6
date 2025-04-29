<script setup>
import {
  ref,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

const name = ref('Hmm console');

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpdated');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});
</script>

<template>
  <div>
    {{ name }}
  </div>
  <button @click="name = 'Look at the console'">Update Name ^_^</button>
</template>

<style scoped></style>
