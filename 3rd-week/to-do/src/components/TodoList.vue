<script>
export default {
    props: {
        computedTodo: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    emits: ["delete-todo", "update-todo", "edit-todo"],
    methods: {
        deleteTodo(id) {
            this.$emit('delete-todo', id);
        },
        updateTodo(id) {
            this.$emit('update-todo', id);
        },
        editTodo(item) {
            this.$emit('edit-todo', item);
        }
    },
}
</script>

<template>
    <div class="todo__list">
        <div v-for="item in computedTodo" v-bind:key="item.id" class="todo__item"
            v-bind:class="{ 'todo__item--completed': item.completed }">
            <input type="checkbox" v-bind:id="'chk' + item.id" v-bind:checked="item.completed"
                v-on:click="updateTodo(item.id)" />
            <label v-bind:for="'chk' + item.id" class="todo__checkbox-label"></label>
            <span class="todo__item-text">{{ item.msg }}</span>
            <span v-if="!item.completed" class="material-symbols-outlined todo__edit-icon" v-on:click="editTodo(item)">
                edit
            </span>
            <span class="material-symbols-outlined todo__delete-icon" v-on:click="deleteTodo(item.id)">
                delete
            </span>
        </div>
        <div v-if="computedTodo.length === 0" class="todo__item--no">
            <p>할일 목록이 없습니다.</p>
        </div>
    </div>
</template>

<style></style>
