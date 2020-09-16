import service from './index'
export default {
    //轮播图
    getData(){
        return service.get('/scenics/banners')
    },
    //注册
    getzhuce({ username,nickname,captcha,password}){
        return service.post('/accounts/register',{
          username,nickname,captcha,password
        })
    },
    //机票
    getsale(){
        return service.get('/airs/sale')
      }
}