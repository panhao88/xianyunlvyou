import service from './index'
export default {
    //轮播图
    getData(){
        return service.get('/scenics/banners')
    },
    //注册
    getzhuce(){
        return service.post('/accounts/register',{
          username,nickname,captchapassword
        }:{usernamestr})
    },
    //机票
    getsale(){
        return service.get('/airs/sale')
      }
}