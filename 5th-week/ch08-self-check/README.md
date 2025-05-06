■ 전체 개요: 이 Vue 프로젝트가 하는 일

이 프로젝트는 다음을 수행합니다:

* 로컬 JSON 데이터(도서 목록)를 Vue 앱에서 불러와
* /books 경로에서 도서 목록을 보여주고
* 각 도서 제목을 클릭하면 /books/\:id 경로에서 상세 내용을 보여주며
* 없는 id나 잘못된 경로는 안전하게 처리하고
* Vue Router의 alias와 내비게이션 가드로 라우팅을 관리합니다.

──────────────────────────────────────────────
■ Vue 파일 구성

| 파일명             | 역할                            |
| --------------- | ----------------------------- |
| App.vue         | Vue 앱의 최상위 컴포넌트 (앱 뼈대)        |
| BookList.vue    | 도서 목록을 보여주는 페이지 컴포넌트          |
| BookDetail.vue  | 개별 도서의 상세 내용을 보여주는 페이지 컴포넌트   |
| router/index.js | Vue Router 설정 (라우트, 경로, 가드 등) |
| books.json      | 화면에 보여줄 도서 데이터 (로컬 JSON)      |

──────────────────────────────────────────────
■ App.vue – 최상위 뼈대

```javascript
<script setup>  
import { RouterLink, RouterView } from 'vue-router';  
</script>

<template>  
  <nav>  
    <RouterLink to="/books">도서 목록</RouterLink>  
  </nav>  
  <RouterView />  
</template>
```

설명:

* RouterLink: HTML <a> 대신 사용하는 Vue Router 전용 링크, 페이지 새로고침 없이 이동
* RouterView: 현재 라우트에 맞는 컴포넌트를 여기에 끼워 넣음

──────────────────────────────────────────────
■ BookList.vue – 도서 목록 페이지

```javascript
<script setup>  
import books from '@/data/books.json';  
</script>

<template>  
  <div>  
    <h1>도서 목록</h1>  
    <ul>  
      <li v-for="book in books" :key="book.id">  
        {{ book.id }} -   
        <router-link :to="`/books/${book.id}`">{{ book.title }}</router-link>  
      </li>  
    </ul>  
  </div>  
</template>
```

설명:

* v-for: books 배열을 순회해 각 book 객체로 렌더링
* \:key: Vue의 가상 DOM 최적화를 위한 고유 식별자
* router-link: 상세 페이지로 연결되는 링크

──────────────────────────────────────────────
■ BookDetail.vue – 도서 상세 페이지

```javascript
<script setup>  
import { ref, onMounted } from 'vue';  
import { useRoute, useRouter } from 'vue-router';  
import books from '@/data/books.json';

const route = useRoute();  
const router = useRouter();  
const book = ref(null);

onMounted(() => {  
  const id = Number(route.params.id);  
  book.value = books.find(b => b.id === id);  
});  
</script>

<template>  
  <div v-if="book">  
    <h1>{{ book.title }}</h1>  
    <p>id: {{ book.id }}</p>  
    <p>저자: {{ book.author }}</p>  
    <p>출판년도: {{ book.publishYear }}</p>  
    <p>{{ book.description }}</p>  
  </div>  
  <div v-else>  
    <h1>도서의 상세 정보가 없습니다.</h1>  
  </div>

<router-link to="/books">← 도서 목록으로 돌아가기</router-link> </template>
```

설명:

* useRoute().params.id: URL에서 \:id 값 가져오기
* books.find(...): 로컬 데이터에서 해당 id의 도서 찾기
* v-if: 책이 있으면 상세 정보, 없으면 에러 메시지
* router-link: 목록 페이지로 돌아가는 링크

──────────────────────────────────────────────
■ router/index.js – Vue Router 설정

```javascript
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/books',
            name: 'Books',
            component: () => import('../views/BookList.vue'),
            alias: ['', '/bk']
        },
        {
            path: '/books/:id',
            name: 'BookDetail',
            component: () => import('../views/BookDetail.vue'),
            alias: ['/:id', '/book/:id'],
            beforeEnter: function(to, from, next) {
                const id = to.params.id;
                if (isNaN(Number(id))) {
                    return next('/books');
                }
                next();
            },
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) return savedPosition;
        else return { top: 0 };
    }
});

export default router;
```

설명:

* /books: 도서 목록 페이지
* /bk: 목록 페이지 별칭
* /books/\:id: 도서 상세 페이지
* /\:id: 상세 페이지 별칭
* beforeEnter: 숫자가 아닌 id로 상세 페이지 접근 시 목록으로 이동
* () => import(...): 동적 import로 필요한 컴포넌트만 로드

──────────────────────────────────────────────
■ Vue 핵심 개념 요약

| 개념            | 설명                                      |
| ------------- | --------------------------------------- |
| 컴포넌트          | 화면 단위를 나누어 작성한 Vue 파일 (예: BookList.vue) |
| 라우터 (Router)  | SPA에서 페이지 전환 역할, 각 URL에 컴포넌트 연결         |
| ref           | 반응형 데이터 선언 (값이 바뀌면 화면 자동 갱신)            |
| v-for         | 리스트 반복 렌더링                              |
| v-if / v-else | 조건부 렌더링                                 |
| router-link   | SPA에서 페이지 이동용 링크 (새로고침 없이)              |
| router-view   | 현재 라우트에 맞는 컴포넌트를 이 위치에 렌더링              |
| 내비게이션 가드      | 라우트 진입 전 검사나 처리 (예: 숫자가 아닌 id 차단)       |

──────────────────────────────────────────────
■ 최종 요약

이 Vue 프로젝트는:

* Vue 3의 컴포넌트, 라우터, 리스트 렌더링, 조건부 렌더링을 활용해
* JSON 데이터 기반 도서 목록과 상세 페이지를 보여주며
* 올바른 라우팅과 예외 처리를 위한 alias와 내비게이션 가드를 추가한 학습용 웹앱입니다.
