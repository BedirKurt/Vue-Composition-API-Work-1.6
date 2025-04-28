<script setup>
import UserData from './components/UserData.vue';
import { ref, reactive, toRefs, watch } from 'vue';
import { computed } from 'vue';

// Props

// Hooks, Custom Hooks, Library Instances

// Stores

// States
const firstName = ref('');
const lastName = ref('');

const secondFistName = ref('');
const secondLastName = ref('');

const watcherName = ref('');
const watcherAge = ref(null);
const newValueName = ref('');
const oldValueName = ref(null);

const userName = ref('Bedir');

const user3 = ref('Bedir');
const user3Age = ref(29);
const toggleVisibility = ref(true);

const availableFunds = ref(100);
const currentExpenses = ref(0);
const enteredExpense = ref(0);

const job = ref('Front-End');
const car = ref('Nissan S2000');

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

const users = reactive([
  {
    id: '1',
    name: 'Bedir',
    age: 29,
  },
  {
    id: '2',
    name: 'Anna',
    age: 25,
  },
]);

const user = reactive({
  id: '1',
  name: 'Bedir',
  lastName: 'Kurt',
});

const user2 = ref({
  id: '1',
  name: 'Bedir',
  lastName: 'Kurt',
});

const convertFromReactionToRef = reactive({
  id: '1',
  name: 'Bedir',
  lastName: 'Kurt',
});
// toRefs() reactive bir yapıyı ref e dönüştürür.
const userRef = toRefs(convertFromReactionToRef);

// Computed States
const changeButtonName = computed(() =>
  toggleVisibility.value ? 'Hide' : 'Show'
);

const setFullName = computed(function () {
  return firstName.value + ' ' + lastName.value;
});
const setSecondFullName = computed(function () {
  return (
    'Name : ' +
    secondFistName.value +
    ' ' +
    'Last Name : ' +
    secondLastName.value
  );
});

const remainingFunds = computed(
  () => availableFunds.value - currentExpenses.value
);

// Methods

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

const setUser3Age = () => {
  user3Age.value = 30;
};

function setVisibility() {
  toggleVisibility.value = !toggleVisibility.value;
}

function setFirstName(event) {
  firstName.value = event.target.value;
}
const setLastName = (event) => {
  lastName.value = event.target.value;
};

// Watchers

// Not *
// Composition API kullanırken birden fazla bağımlılık kullanabiliyoruz watch kullanırken [ ] ile
// normalde   watch(watcherName, function (newValue,oldValue){ ...  }) olarak kullanıyorduk arasındaki fark bu
watch([watcherName, watcherAge, remainingFunds], (newValues, oldValues) => {
  newValueName.value = newValues[0];
  oldValueName.value = oldValues[0];
  console.log('Old Value : ' + oldValues[0]);
  console.log('New Value : ' + newValues[0]);
  if (newValues[2] < 0) {
    alert('You are broke ! ');
    availableFunds.value = 100;
    currentExpenses.value = 0;
    enteredExpense.value = 0;
  }
});

// -----------
setTimeout(() => {
  userRef.name = 'Kurt';
}, 2000);

setTimeout(() => {
  userName.value = 'Bed ';
}, 2000);

setTimeout(() => {
  users[0].name = 'Bed ';
}, 2000);

setTimeout(() => {
  user.name = 'Bed  Reactive';
}, 2000);

setTimeout(() => {
  user2.value.name = 'Bed Ref';
}, 2000);

// Life-cycle Hooks
</script>

<template>
  <section class="container">
    <span>1</span>
    <h1>Ref<br />Composition API</h1>
    <h2>{{ userName }}</h2>
    <ul>
      <li>
        <p><strong>Name : </strong>{{ user2.name }}</p>
      </li>
    </ul>
  </section>

  <section class="container">
    <span>2</span>
    <h1>Reactive<br />Composition API</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <p><strong>ID : </strong>{{ user.id }}</p>
        <p><strong>Name : </strong>{{ user.name }}</p>
        <p><strong>Age : </strong>{{ user.age }}</p>
      </li>
    </ul>
    <br />
    <ul>
      <li>
        <p><strong>Name : </strong>{{ user.name }}</p>
      </li>
    </ul>
    <ul>
      <li>
        <p><strong>Name : </strong>{{ userRef.name }}</p>
      </li>
    </ul>
  </section>

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

  <section class="container">
    <span>4</span>
    <h1>Computed<br />Composition API</h1>
    <h2>{{ setFullName }}</h2>
    <div class="input-group">
      <input
        type="text"
        placeholder="First Name"
        @input="setFirstName($event)"
      />
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>

  <section class="container">
    <span>5</span>
    <h1>Two-Way-Binding and the Composition API</h1>
    <h2>{{ setSecondFullName }}</h2>
    <div class="input-group">
      <input type="text" placeholder="First Name" v-model="secondFistName" />
      <input type="text" placeholder="Last Name" v-model="secondLastName" />
    </div>
  </section>

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

  <div>
    <UserData
       name="BedVader"
      :age="29"
      :job="job"
      :car="car"
      :persons="persons"
    />
  </div>
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
