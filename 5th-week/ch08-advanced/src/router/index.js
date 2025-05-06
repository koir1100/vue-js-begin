import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Main Page',
            },
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
            beforeEnter: function(to, from, next) {
                if(true) {
                    next(true);
                } else {
                    next(false);
                }
            },
            meta: {
                title: 'About Page',
            },
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) return savedPosition;
        else return { top: 0 };
    }
});

// 권한 체크 용 -> next() 호출되어야 라우트 전환 수행
router.beforeEach(function(to, from, next) {
    console.log(to);
    console.log(from);

    if(to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

// 라우트 전환되기 바로 직전에 실행되는 로직
router.beforeResolve(function(to, from, next) {
    console.log(to);
    console.log(from);
    next();
})

// 라우트 전환 이후 호출
router.afterEach(function(to, from, failure) {
    console.log(to);
    console.log(from);
    console.log(failure);
});

export default router;