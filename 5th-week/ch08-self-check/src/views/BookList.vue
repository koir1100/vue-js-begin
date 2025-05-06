<script setup>
import { ref } from 'vue';
import booksData from '@/data/books.json';
const books = ref(booksData)
</script>
<template>
    <ul>
        <li v-for="book in books" v-bind:key="book.id">
            {{ book.id }} - 
            <router-link :to="`/book/${book.id}`">{{ book.title }}</router-link>
        </li>
    </ul>
</template>