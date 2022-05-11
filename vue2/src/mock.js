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

export default Mock