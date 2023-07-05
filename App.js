<template>
  <div id="app">
    <input type="text" v-model="todo_message" placeholder="enter todo name">
    <button @click="addTodo()">Add todo</button>

    <table v-if="todos.length > 0">
      <tr>
        <th>Todo</th>
        <th>Action</th>
      </tr>
      <tr :key="index" v-for="(todo, index) in todos">
        <td>{{ todo }}</td>
        <td>
          <span class="del-btn" @click="deleteTodo(index)">Delete</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'app',
  data() {
    return {
      todo_message: ''
    }
  },
  methods: {
    addTodo() {
      this.$store.dispatch('ADD_TODO', this.todo_message)
      this.todo_message = '';
    },
    deleteTodo(index) {
      this.$store.dispatch('REMOVE_TODO', index);
    }
  },
  computed: {
    ...mapGetters(['todos'])
  }
}
</script>