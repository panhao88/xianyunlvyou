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
  user?:haha
}
export interface haha{
  created_at?:number
  defaultAvatar?:string
  email?:null
  id?:number
  nickname?:string
  role?:number
  starPosts?:null
  updated_at?:number
  username?:string
}
// 登录
export interface todo{
  user:userItem
}
export interface userItem{
  id:number
  username:string
  email:null
  role:number
  nickname:string
  created:number
  updated_at:number
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
//城市列表
export interface tuyo{
  data: dataItem[];
  total?:number
}
export interface dataItem{
  type?:string
  children?:childrenItem[]
}
export interface childrenItem{
  city?:string
  desc?:string
}
//获取文章
export interface dateITEM{
  data:dadwfv
  total:number
}
export interface dadwfv{
  account:account1
  city:city1
  comments:comments1[]
  content:string
  created_at:number
  id
}