import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Ref from './views/posts/Ref.vue';
import Play from './views/posts/Play.vue';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        { path: '/',           name: 'home',       component: Home },
        { path: '/about',           name: 'about',       component: About },
        // blog posts.
        { path: '/play',           name: 'play',       component: Play },
        { path: '/reformers',           name: 'reform',       component: Ref },
    ]
});
