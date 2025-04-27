<script>
export default {
    props: {
        isEditing: {
            type: Boolean,
            default: false,
        },
        editTarget: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            inputMsg: '',
        };
    },
    emits: ["addTodo", "confirmEdit"],
    watch: {
        editTarget: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.inputMsg = newVal.msg;
                } else {
                    this.inputMsg = '';
                }
            }
        }
    },
    methods: {
        handleAction() {
            if (this.isEditing) {
                this.$emit('confirmEdit', this.inputMsg);
            } else {
                this.$emit('addTodo', this.inputMsg);
            }
            this.inputMsg = '';
        }
    }
}
</script>

<template>
    <div class="todo__input">
        <input v-model="inputMsg" type="text" class="todo__input-text" placeholder="할 일을 입력하세요."
            v-on:keydown.enter="handleAction" />
        <button class="todo__input-btn" v-on:click="handleAction">
            <slot>등록</slot>
        </button>
    </div>
</template>

<style></style>
