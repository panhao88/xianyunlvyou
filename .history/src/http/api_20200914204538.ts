import service from './index'
export default {
    getData(){
        return service.get('/scenics/banners')
    }
}