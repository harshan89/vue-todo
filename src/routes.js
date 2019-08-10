import Home from './views/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

export default routes;