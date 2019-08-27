import Login from './pages/login/Login'
import Global from './pages/Global'
import Index from './pages/index/Index';
import Finance from './pages/finance/Finance';
import Customer from './pages/customer/Customer';

const routes = [
    {
        path:'/',
        component:Login,
        exact:true
    },
    {
        path:'/global',
        component:Global,
        exact:false,
        routes:[
            {
                path:'/global/index',
                type:'index',
                icon:'&#xe616;',
                name:'首页',
                component:Index
            },
            {
                path:'/global/finance',
                type:'finance',
                icon:'&#xe624;',
                name:"财务",
                component:Finance
            },
            {
                path:'/global/customer',
                type:'customer',
                icon:'&#xe624;',
                name:"用户",
                component:Customer
            }
        ]
    }
]

export default routes




