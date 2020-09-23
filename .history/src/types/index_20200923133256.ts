// 机票
export interface ResItem {
  url: string
  desc: string
  cover: string
  departCity: string
  departCode: string
  departDate: string
  destCity: string
  destCode: string
  price: number
}
// 轮播图
export interface Res {
  success?: boolean,
  data: ResItem[]
}
// 注册
export interface Des {
  user?: haha
}
export interface haha {
  created_at?: number
  defaultAvatar?: string
  email?: null
  id?: number
  nickname?: string
  role?: number
  starPosts?: null
  updated_at?: number
  username?: string
}
// 登录
export interface todo {
  user: userItem
}
export interface userItem {
  id: number
  username: string
  email: null
  role: number
  nickname: string
  created: number
  updated_at: number
}
//手机验证
export interface Resyanzheng {
  status: number;
  message: string;
}
export interface Code {
  code?: string
  created_at?: number
  id?: number
  isValid?: number
  tel?: string
  updated_at?: number
}
//城市列表
export interface tuyo {
  data: dataItem[];
  total?: number
}
export interface dataItem {
  type?: string
  children?: childrenItem[]
}
export interface childrenItem {
  city?: string
  desc?: string
}
// //获取文章
// export interface dateITEM{
//   data:dadwfv
//   total:number
// }
// export interface dadwfv{
//   account:account1
//   city:city1
//   comments:comments1[]
//   content:string
//   created_at:number
//   id:number
//   images:images1[]
//   summary:string
//   title:string
//   updated_at:number
//   watch:number
// }
// export interface account1{
//   created_at:number
//   defaultAvatar:string
//   email: null
//   id: number
//   nickname:string
//   password:string
//   role:number
//   starPosts: null
//   updated_at:number
//   username:string
// }
// export interface city1{
//   code:string
//   created_at:string
//   id:number
//   level:string
//   name:string
//   parentCode:string
//   sort:string
//   updated_at:number
// }
// export interface comments1{
//   account:number
//   content:string
//   created_at:number
//   id:number
//   level:number
//   post:number
//   type:number
//   updated_at:number
// }
// export interface images1{
//   [key: string]: string;
// }
//机票数组
export interface Resairslist {
  flights?: flightsItem;
  info?: infoitem;
  options?: optionsItem;
  total?: number;
}
export interface infoitem {
  departCity?: string;
  departDate?: string;
  destCity?: string;
}
export interface flightss {
  flights?: flightsItem;
}
export interface flightsItem {
  airline_name: string;
  airorders: null;
  airport_tax_audlet: number;
  airport_tax_child: number;
  arr_date: string;
  arr_datetime: string;
  arr_time: string;
  base_price: number;
  created_at: number;
  dep_date: string;
  dep_datetime: string;
  dep_time: string;
  dst_airport: string;
  dst_airport_name: string;
  dst_airport_quay: string;
  dst_city_name: string;
  flight_no: string;
  flights: null;
  id: number;
  org_airport: string;
  org_airport_name: string;
  org_airport_quay: string;
  org_city_name: string;
  plane_name: string;
  plane_size: string;
  seat_infos: seat_infositem[];
  updated_at: number;
  time111?: string;
}
interface seat_infositem {
    updated_at: number;
  airline_name: string;
  airorders: null;
  airport_tax_audlet: number;
  airport_tax_child: number;
  arr_date: string;
  arr_datetime: string;
  arr_time: string;
  base_price: number;
  created_at: number;
  dep_date: string;
  dep_datetime: string;
  dep_time: string;
  dst_airport: string;
  dst_airport_name: string;
  dst_airport_quay: string;
  dst_city_name: string;
  flight_no?: string;
  flights: null;
  id: number;
  org_airport: string;
  org_airport_name: string;
  org_airport_quay: string;
  org_city_name: string;
  plane_name: string;
  plane_size: string;
  seat_infos: seat_infosItem[];
  type: number;
  }
  interface seat_infosItem{
    class: string;
    code: string;
    code_child: string;
    discount: number;
    fareitem_id: string;
    flight_no: string;
    group_name: string;
    index: number;
    insurance_info: [];
    name: string;
    nums: string;
    org_settle_price: number;
    org_settle_price_child: number;
    org_settle_price_coupon: number;
    ota_id: number;
    package_name: string;
    par_price: number;
    policy_info: policy_infoItem;
    provision_info: provision_infoItem;
    seat_xid: string;
    settle_price: number;
    settle_price_child: number;
    settle_price_coupon: number;
    supplierIATANumber: string;
    supplierName: string;
    tag_name: string;
}