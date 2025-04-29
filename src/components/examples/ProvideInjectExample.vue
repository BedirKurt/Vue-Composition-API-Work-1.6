<script setup>
import { inject } from 'vue';

const { job, persons } = inject('datatest');
</script>

<template>
  <section class="container">
    <header>
      <h1>
        Provide - Inject<br />
        Composition API
      </h1>
    </header>
    <span>11</span>
    <div>
      <h2>{{ job }}</h2>
      <ul>
        <li v-for="person in persons" :key="person.id">
          {{ person.id }}
          {{ person.firstName }}
          {{ person.lastName }}
          {{ person.age }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
