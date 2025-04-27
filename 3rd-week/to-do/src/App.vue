<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoList from '@/components/TodoList.vue';
import TodoInput from '@/components/TodoInput.vue';

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
  },
  data() {
    return {
      todo: [],
      current: 'all',
      isEditing: false,
      editId: null,
    };
  },
  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(),
        msg: inputMsg,
        completed: false,
      };
      this.todo.push(item);
    },
    updateTab(tab) {
      this.current = tab;
    },
    deleteTodo(id) {
      this.todo = this.todo.filter((value) => value.id !== id);
    },
    updateTodo(id) {
      this.todo = this.todo.map((value) =>
        value.id === id ? { ...value, completed: !value.completed } : value
      );
    },
    startEdit(todo) {
      this.isEditing = true;
      this.editId = todo.id;
    },
    confirmEdit(newMsg) {
      this.todo = this.todo.map((value) =>
        value.id === this.editId ? { ...value, msg: newMsg } : value
      );
      this.isEditing = false;
      this.editId = null;
    }
  },
  computed: {
    computedTodo() {
      if (this.current === 'all') {
        return this.todo;
      } else {
        return this.todo.filter((value) => value.completed);
      }
    },
    editTarget() {
      return this.todo.find((value) => value.id === this.editId) || null;
    }
  },
}
</script>

<template>
  <div class="todo">
    <TodoHeader v-bind:current="current" v-on:update-tab="updateTab" />
    <TodoList v-bind:computed-todo="computedTodo" v-on:delete-todo="deleteTodo" v-on:update-todo="updateTodo"
      v-on:edit-todo="startEdit" />
    <TodoInput v-bind:is-editing="isEditing" v-bind:edit-target="editTarget" v-on:add-todo="addTodo"
      v-on:confirm-edit="confirmEdit">
      <template v-if="isEditing">
        수정 완료
      </template>
      <template v-else>
        등록
      </template>
    </TodoInput>
  </div>
</template>

<style></style>
