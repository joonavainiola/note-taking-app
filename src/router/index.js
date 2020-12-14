import Vue from 'vue';
import VueRouter from 'vue-router';
import Notes from '../views/Notes.vue';
import NoteInfo from '../views/NoteInfo.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/note/:noteIndex',
        name: 'NoteInfo',
        component: NoteInfo
    },
    {
        path: '/',
        name: 'Notes',
        component: Notes
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
