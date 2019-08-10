<template>
  <div id="apps">
    <Header />
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todos="deleteTodos"/>
  </div>
</template>

<script>
import Todos from '../components/Todos'
import Header from '../components/layout/Header'
import AddTodo from '../components/AddTodo'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    Todos,
    Header,
    AddTodo
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodos(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed })
      .then(res => this.todos = [...this.todos, newTodo])
      .catch(err => console.log(err))
    }   
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => {
      this.todos = res.data;
    })
    .catch(err => console.log(err))
  }
}
</script>

<style>
#apps {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
</style>
