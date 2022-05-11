import {createStore} from 'vuex'
import menus from './modules/menus'

export default createStore({
    state: {
        token: '',
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },

        resetState: (state) => {
            state.token = ''
        }
    },
    actions: {},
    modules: {
        menus,
    }
})
