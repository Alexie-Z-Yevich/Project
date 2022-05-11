import {createStore} from 'vuex'

export default ({
    state: {
        menuList: [],
        permList: [],

        hasRoute: false
    },
    mutations: {
        setMenuList(state, menus) {
            state.menuList = menus

        },
        setPermList(state, perm) {
            state.permList = perm
        },

        changeRouteStatus(state, hasRoute) {
            state.hasRoute = hasRoute

            //sessionStorage.setItem('hasRoute', hasRoute)
        }
    },
    actions: {},
    modules: {}
})
