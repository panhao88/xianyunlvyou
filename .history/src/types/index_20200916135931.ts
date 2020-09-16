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
export interface Des {

}