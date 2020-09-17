  // 机票
export interface ResItem {
    url:string
    desc:string
    cover:string
    departCity:string
    departCode:string
    departDate:string
    destCity:string
    destCode:string
    price:number
  }
  // 轮播图
  export interface Res {
    success?: boolean,
    data: ResItem[]
  }
  // 注册
export interface Des {
  user?:Itemuser
}
export interface Itemuser {
  id:number
  username:string
  nickname:string
}
//手机验证
export interface Resyanzheng {
  status:number
  message:string
}