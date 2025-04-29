<script setup>
import { ref, watch ,computed} from 'vue';
const availableFunds = ref(100);
const currentExpenses = ref(0);
const enteredExpense = ref(0);


const remainingFunds = computed(
  () => availableFunds.value - currentExpenses.value
);

watch([remainingFunds], (newValues) => {
  if (newValues[0] < 0) {
    alert('You are broke ! ');
    availableFunds.value = 100;
    currentExpenses.value = 0;
    enteredExpense.value = 0;
  }
});

const addExpense = () => {
  currentExpenses.value += enteredExpense.value;
  if (enteredExpense.value <= 0) {
    availableFunds.value = 100;
    currentExpenses.value = 0;
    enteredExpense.value = 0;
  } else {
    enteredExpense.value = 0;
  }
};



</script>

<template>
  <section class="container">
    <span>7</span>
    <header>
      <h1>
        Expense Tracker <br />
        Composition API
      </h1>
    </header>

    <div>Available Funds: {{ availableFunds }}</div>
    <div>Total Expenses: {{ currentExpenses }}</div>
    <hr />
    <div>Funds left: {{ remainingFunds }}</div>

    <section>
      <form @submit.prevent="addExpense">
        <label for="amount"><strong>Amount</strong></label>
        <div>
          <input id="amount" type="number" v-model="enteredExpense" />
        </div>
        <button>Add Expense</button>
        <button>Reset</button>
      </form>
    </section>
  </section>
</template>

<style scoped></style>
