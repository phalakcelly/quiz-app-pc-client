import Router from 'vue-router';

import Home from '../components/Home.vue';
import Aptitude from '../components/Aptitude.vue';
import Reasoning from '../components/Reasoning.vue';
import Technical from '../components/Technical.vue';
import JobSearch from '../components/JobSearch.vue';
import AppLogin from '../components/Login.vue'
import UserSearch from '../components/UserSearch.vue'
import  ViewPerformanceGeneral from '../components/ViewPerformanceGeneral.vue'
import Register from '../components/Regitser.vue'
import store from '../store';



const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'login',
            path: '/login',
            component: AppLogin
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name:'Aptitude',
            path:'/aptitude',
            component:Aptitude
        },
        {
            name:'Reasoning',
            path:'/reasoning',
            component:Reasoning
        },
        {
            name:'Technical',
            path:'/technical',
            component:Technical
        },
        {
            name:'Jobsearch',
            path:'/jobsearch',
            component:JobSearch
        },
        {
            name:'Usersearch',
            path:'/usersearch',
            component:UserSearch
        },
        {
            name:'ViewPerformance',
            path:'/viewperformancegeneral',
            component:ViewPerformanceGeneral
        }
        
           
    ]
});

// Sending back to login page if not authenticated
router.beforeEach(( to, from, next ) => {
    
    if( to.name !== 'login'  && !store.getters.isAuthenticated && to.name!=='register' ) {
        return next({
            name: 'login'
        });
    } 

    next();
});

export default router;