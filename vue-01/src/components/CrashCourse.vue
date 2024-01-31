<script setup>
import { onMounted, reactive } from 'vue'
import { ref } from 'vue'
import { computed } from 'vue'
import { watch } from 'vue'
import ChildComponent from './ChildComponent.vue';
import JSConfetti from 'js-confetti'

const counter = reactive({ count: 0 })
const message = ref('Hello World!')
message.value = 'Sample updated heading'

const count = ref(0)
const lineClass = ref('line')
const titleClass = ref('title')

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}

const text = ref('')

function onInput(e) {
  text.value = e.target.value
}

const altText = ref('')

const awesome = ref(true)

function toggleAwesome() {
  awesome.value = !awesome.value
}

// List rendering
let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter(t => t.id !== todo.id)
}

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter(t => !t.done) : todos.value
})

// Lifecycle and Template Refs
const pElementRef = ref(null);

onMounted(() => {
  console.log('Component mounted')
  pElementRef.value.textContent = 'This text is updated from the lifecycle hook'
})

// Watchers
const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

watch(todoId, (id, prevId) => {
  console.log(`Todo ID changed from ${prevId} to ${id}`)
  fetchData()
});

fetchData()

// Child component & Props
const greeting = ref('Hello from parent')

// Emits
const childMsg = ref('No child msg yet')

function handleEmits(mx) {
  childMsg.value = mx;
} 

const childMsg2 = ref('No child msg yet')

// Confetti
const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
}

showConfetti()

</script>

<template>
  <h1>Vue 3 Crash Course 🔥</h1>
  <p>On your marks. Get set. Go 🚀</p>
  <hr :class="lineClass" />

  <h2>Declarative Rendering</h2>
  <p>{{ message }}</p>
  <p>Static Count is: {{ counter.count }}</p>
  <hr :class="lineClass" />

  <h2>Attritbute Bindings</h2>
  <p v-bind:class="titleClass">Make this red using
  <code>v-bind:class</code>
  </p>
  <p :class="titleClass">Make this red using the shorthand. Simply
  <code>:class</code>
  </p>
  <hr :class="lineClass" />

  <h2>Event Listeners</h2>
  <p>Dynamic Count is: {{ count }}</p>
  <button @click="increment">Increment</button>
  <button v-on:click="decrement">Decrement</button>
  <hr :class="lineClass" />

  <h2>Form Bindings (2-way bindings)</h2>
  <h3> Using <code>:value</code> and <code>@input</code> </h3>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
  <h3> Using
    <code>v-model</code>
  </h3>
  <input v-model="altText" placeholder="Type here">
  <p>{{ altText }}</p>
  <hr :class="lineClass" />

  <h2>Conditional Rendering</h2>
  <button @click="toggleAwesome">Toggle Awesomeness</button>
  <h3 v-if="awesome">Vue is awesome!</h3>
  <h3 v-else>Oh no 😢</h3>
  <hr :class="lineClass" />

  <h2>List Rendering</h2>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <hr :class="lineClass" />

  <h2>Computed Properties</h2>
  <p>Continue referring to the list above</p>
  <!-- <p>Completed Todos: {{ completedTodos.length }}</p> -->
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
  <hr :class="lineClass" />

  <h2>Lifecycle and Template Refs</h2>
  <p ref="pElementRef">This is a referenced template element</p>
  <hr :class="lineClass" />

  <h2>Watchers</h2>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
  <hr :class="lineClass" />

  <h2>Child Component</h2>
  <ChildComponent />
  <hr :class="lineClass" />

  <h2>Props & Emits</h2>
  <ChildComponent :msg="greeting" @response="handleEmits"/>
  <p>{{ childMsg }}</p>
  <hr :class="lineClass" />

  <h2>Emits</h2>
  <ChildComponent msg="Hi Child" @response="(msg) => childMsg2 = msg"/>
  <p>{{ childMsg2 }}</p>
  <hr :class="lineClass" />

  <h2>Slots</h2>
  <ChildComponent msg="Child Slot Example" >
    <p :class="titleClass">Slot content passed from Parent</p>
  </ChildComponent>
  <hr :class="lineClass" />

  <h2>End of Course!</h2>
  <h1 class="congrats" @click="showConfetti">🎉 Congratulations!</h1>
</template>

<style>
.title {
  color: red;
}

.line {
  margin: 20px 0;
}

button {
  margin: 5px;
}

code {
  font-family: monospace;
  white-space: pre;
}

.done {
  text-decoration: line-through;
}

h1.congrats {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}
</style>