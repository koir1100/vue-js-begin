<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import booksData from '@/data/books.json';

const route = useRoute();
const book = ref(null);

onMounted(() => {
    const id = Number(route.params.id);
    book.value = booksData.find(b => b.id === id);
});
</script>

<template>
    <div v-if="book">
        <h1>제목: {{ book.title }}</h1>
        <p>id: {{ book.id }}</p>
        <p>저자: {{ book.author }}</p>
        <p>출판년도: {{ book.publishYear }}</p>
        <p>설명: {{ book.description }}</p>
    </div>
    <div v-else>
        <h1>도서의 상세 정보가 없습니다.</h1>
    </div>
    <router-link to="/books">목록으로 돌아가기</router-link>
</template>
