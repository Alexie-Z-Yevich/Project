import Mock from 'mockjs'

const Random = Mock.Random

let Result = {
    code: 200,
    msg: '操作成功',
    data: null
}

Mock.mock('/captcha', 'get', () => {

    Result.data = {
        tocken: Random.string(32),
        captcha: Random.dataImage('100x40', 'p7n5w')
    }

    return Result
})

Mock.mock('/login', 'post', () => {

    Result.code = 400
    Result.msg = '验证码错误'
    return Result
})

export default Mock