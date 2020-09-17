import service from './index'
export default {
    //轮播图
    getData() {
        return service.get('/scenics/banners')
    },
    //验证码
    getcaptchas ({tel},{yel}){
        return service.post(`/captchas`)
    },
    //注册
    getzhuce({ username,
        nickname, captcha, password }: {
            username: string,
            password: string,
            nickname: string,
            captcha: string }) {
        return service.post(`/accounts/register`, {
            username, nickname, captcha, password
        })
    },
    //国内推荐机票
    getsale() {
        return service.get('/airs/sale')
    }
}