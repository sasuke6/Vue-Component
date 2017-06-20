<template>
    <form v-on:submit.prevent="addTodo(newTodo)">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Add a new todo" v-model="newTodo.title">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-success">Add Todo</button>
        </div>
    </form>
</template>

<script>

export default {
    props: ['todos'],
    
    data() {
        return {
            newTodo:{id:null, title:'', completed:false}
        }
    },

    methods: {
        addTodo(newTodo) {
            this.todos.push(newTodo)
            this.newTodo = {id:null, title:''}
        },
    }
}
</script>

<style>
    .completed {
        color: #5cb85c;
        text-decoration: line-through;
    }
    .margin-right-10 {
        margin-right: 10px; 
    }
</style>
