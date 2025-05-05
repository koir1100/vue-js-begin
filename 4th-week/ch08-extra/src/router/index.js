import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/NotFound.vue';
import UserGeneric from "../views/UserGeneric.vue";

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            alias: ['/home', '/root'],
        },
        {
            path: '/about',
            name: 'about',
            component: function() {
                return import('../views/AboutView.vue');
            },
        },
        {
            path: '/user',
            name: 'user',
            // component: function() {
            //     return import('../views/UserView.vue');
            // },
            components: {
                header: () => import('../views/TheHeader.vue'),
                default: () => import('../views/UserLayout.vue'),
                footer: () => import('../views/TheFooter.vue'),
            },
            props: {header: false, default: true, footer: false},
            children: [
                {
                    path: '',
                    name: 'user-view',
                    component: function() {
                        return import('../views/UserView.vue');
                    },
                },
                {
                    path: 'info',
                    name: 'user-info',
                    component: function() {
                        // return import('../views/UserInfo.vue');
                        return import('../views/UserInfo2.vue');
                    },
                    props: function(route) {
                        return {
                            id: route.query.name,
                            age: Number(route.query.age),
                        };
                    },
                },
                {
                    path: ':id',
                    name: 'user-profile',
                    // redirect: function(to) {
                    //     return {name: 'person-id', params: {id: to.params.id}};
                    // },
                    component: function() {
                        return import('../views/UserProfile.vue');
                    },
                    alias: ['/:id', '/u/:id'],
                    props: true,
                },
            ],
        },
        // {
        //     path: '/person/:id',
        //     name: 'person-id',
        //     component: function() {
        //         return import('../views/UserDetail.vue');
        //     },
        //     props: true,
        // },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
        },
        {
            path: '/username-:afterUser(.*)',
            component: UserGeneric,
        },
    ],
});

export default router