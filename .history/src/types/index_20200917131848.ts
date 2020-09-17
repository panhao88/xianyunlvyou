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
  user?:string
}
export interface Itemuser {
  id:number
  username:string
  nickname:string
}
//手机验证
export interface Resyanzheng {
  status:number;
  message:string;
}
export interface Code {
  code?:string
  created_at?:number
  id?:number
  isValid?:number
  tel?:string
  updated_at?:number
}
export interface haha{
  created_at?:number
  defaultAvatar?:string
  email?:null
  id?:number
  nickname:string
  role:number
  starPosts:null
  updated_at:number
  username:string
}