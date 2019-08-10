<template>
    <div class="todo-item" v-bind:class="{'is-completed':todo.completed}">
        <p>
        <input type="checkbox" v-on:change="markeComplete"/>
        {{todo.title}}
        <button @click="$emit('del-todos', todo.id)" class="del">X</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ["todo"],
    methods: {
        markeComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>
    .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted
    }
    .is-completed {
        text-decoration: line-through
    }
    .del {
        background: #ff0000;
        color: #fff;
    }
</style>

