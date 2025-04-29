<script setup>
import { ref ,computed} from 'vue';

const user3 = ref('Bedir');
const user3Age = ref(29);
const toggleVisibility = ref(true);


const changeButtonName = computed(() =>
  toggleVisibility.value ? 'Hide' : 'Show'
);

const setUser3Age = () => {
  user3Age.value = 30;
};
function setVisibility() {
  toggleVisibility.value = !toggleVisibility.value;
}

</script>

<template>
  <section class="container">
    <span>3</span>
    <h1>Replacing "methods" with Regular Functions<br />Composition API</h1>
    <h2>{{ user3 }}</h2>
    <ul v-if="toggleVisibility">
      <li>
        <p><strong>Name : </strong>{{ user3 }}</p>
        <p><strong>Age : </strong>{{ user3Age }}</p>
      </li>
    </ul>
    <div class="button-group">
      <button @click="setUser3Age()">Update Age</button>
      <button @click="setVisibility()">{{ changeButtonName }}</button>
    </div>
  </section>
</template>

<style scoped></style>
