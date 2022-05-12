import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import User from '../views/sys/User.vue'
import Role from '../views/sys/Role.vue'
import Menu from '../views/sys/Menu.vue'
import UserCenter from '../views/UserCenter.vue'
import axios from "axios";
import store from '../store'

const modules = import.meta.glob('../views/sys/**.vue')
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/index',
                name: 'Index',
                component: Index
            },
            {
                path: '/userCenter',
                name: 'UserCenter',
                component: UserCenter
            },
            {
                path: '/sys/users',
                name: 'SysUser',
                component: User
            },
            {
                path: '/sys/roles',
                name: 'SysRole',
                component: Role
            },
            {
                path: '/sys/menus',
                name: 'SysMenu',
                component: Menu
            }
        ]
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let hasRoute = store.state.menus.hasRoute;
    if (!hasRoute) {
        axios.get('/sys/menu/nav',{
            headers: {
                Authorization:localStorage.getItem('token')
            }
        }).then(res => {
            // 拿到menuList
            store.commit("setMenuList",res.data.data.nav)
            // 拿到用户权限
            store.commit("setPermList",res.data.data.authorities)
            // 动态绑定路由
            let newRoutes = router.options.routes
            res.data.data.nav.forEach(menu => {
                if(menu.children){
                    menu.children.forEach(e => {
                        // 转成路由
                        let route = menuToRouter(e)
                        // 把路由添加到路由管理中
                        if (route){
                            newRoutes[0].children.push(route)
                        }
                    })
                }
            })

            //newRoutes.forEach(newRoute => {
                router.addRoute(newRoutes)
            //})
            hasRoute = true
            store.commit("changeRouteStatus",hasRoute)
        })
    }

    next()
})

// 导航转成路由
const menuToRouter = (menu) => {
    if(!menu.component){
        return null
    }
    let route = {
        path: menu.path,
        name: menu.name,
        meta: {
            icon: menu.icon,
            title: menu.title
        }
    }

    route.component = () => import('../views/' + menu.component + '.vue')

    return route
}

export default router