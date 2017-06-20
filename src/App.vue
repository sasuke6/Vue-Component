<template>
  <div id="app">
    <img src="./assets/logo.png">
    <todos v-bind:todos="todos"></todos>
    <todo-form v-bind:todos="todos"></todo-form>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export default {
  name: 'app',
  data() {

    return {
      todos: [
          //  ['id' => 1, 'title' => 'Learn Vue js', 'completed' => false],
        ],
      }                      
    },
    mounted() {
      this.axios.get('http://laravel.app/todos').then(response => {
        this.todos = response.data
        // console.log(response.data)
      })
    },
    computed: {
        todoCount() {
            return this.todos.length;
    }
  },
  components: {
    Hello,  TodoForm, Todos,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
