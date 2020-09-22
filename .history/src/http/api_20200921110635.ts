import service from './index'
export default {
    //轮播图
    getData() {
        return service.get('/scenics/banners')
    },
    //验证码
    getcaptchas({tel}: {tel: string}){
        return service.post(`captchas`,{tel})
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
      //登录
  postlogin({ username, password }: { username: string; password: string }) {
    return service.post("/accounts/login", {
      username,
      password,
    });
  },
    //国内推荐机票
    getsale() {
        return service.get('/airs/sale')
    },
    //机票列表
    getairs()
    //城市菜单列表
    getcities(){
        return service.get(`/posts/cities`)
    },
    //获取文章
    getposts(){
        return service.get(`/posts`)
    },
    //获取文章详情
    getgetposts({id}:{id:number}){
        return service.get(`/posts?id=${id}`)
    },
    //获取文章评论
    getcomments({post,_limit,_start}:{post:number,_limit:number,_start:number}){
        return service.get(`/posts/comments?post=${post}&_limit=${_limit}&_start=${_start}`)
    }

}