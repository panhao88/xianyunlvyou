import service from './index'
export default {
    //轮播图
    getData(){
        return service.get('/scenics/banners')
    },
    //注册
    getzhuce(){
        return service.post('')
    }
}