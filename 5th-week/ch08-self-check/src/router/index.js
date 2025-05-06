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
