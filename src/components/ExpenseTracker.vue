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
