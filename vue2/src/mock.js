import Mock from 'mockjs'

const Random = Mock.Random

let Result = {
    code: 200,
    msg: '操作成功',
    data: null
}

Mock.mock('/captcha', 'get', () => {

    Result.data = {
        token: Random.string(32),
        captcha: Random.dataImage('100x40', 'p7n5w')
    }

    return Result
})

Mock.mock('/login', 'post', () => {

    Result.code = 400
    Result.msg = '验证码错误'
    return Result
})

Mock.mock('/sys/userInfo', 'get', () => {

    Result.data = {
        id: "1",
        username: "test",
        avatar: "https://raw.githubusercontent.com/Alexie-Z-Yevich/Project/master/vue2/src/assets/CatAdmin.jpg"
    }
    return Result
})

Mock.mock('/logout', 'post', () => {

    return Result
})

Mock.mock('/sys/menu/nav', 'get', () => {

    let nav = [
        {
            title: '系统管理',
            name: 'SysManege',
            icon: 'expand',
            component: '',
            path: '',
            children: [
                {
                    title: '用户管理',
                    name: 'SysUser',
                    icon: 'avatar',
                    component: 'sys/User',
                    path: '/sys/users',

                },
                {
                    title: '角色管理',
                    name: 'SysRole',
                    icon: 'rank',
                    component: 'sys/Role',
                    path: '/sys/roles',

                },
                {
                    title: '菜单管理',
                    name: 'SysMenu',
                    icon: 'menu',
                    component: 'sys/Menu',
                    path: '/sys/menus',

                },
            ]
        },
        {
            title: '系统工具',
            name: 'SysTools',
            icon: 'tools',
            component: '',
            path: '',
            children: [
                {
                    title: '数字词典',
                    name: 'SysDictionary',
                    path: '/sys/dicts',
                    component: '',
                    icon: 'List'
                },
            ]
        },
    ]
    let authorities = []

    Result.data = {
        nav: nav,
        authorities: authorities
    }

    return Result
})

export default Mock