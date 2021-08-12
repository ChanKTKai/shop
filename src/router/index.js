import Vue from 'vue';
import VueRouter from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';


Vue.use(VueRouter);
export default new VueRouter({
routes:[
    {
        path:'*',
        redirect:'/login'
    },
    // {
    //     path:'/',
    //     name:'HelloWorld',
    //     component:HelloWorld,
    //     meta: { requiresAuth: true }
    // },
    {
        path:'/login',
        name:'Login',
        component:Login,
    },
    {
        path:'/admin',
        name:'Dashboard',
        component:Dashboard,
        
        children:[
            {
                path:'products',
                name:'Products',
                component:Products,
                meta: { requiresAuth: true },
            }
        ]
    },
]
});