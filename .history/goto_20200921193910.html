<template>
 <div class="w-100 d-f f-d-c a-i-c">
 <div class="d-f">
 <div>
 <div class="d-f">
 <img src="../../img/t.png" alt="" class="img">
 <div class="m-l-10 orange">国内机票</div>
 </div>
 <div class="ticket p-r">
 <div class="p-a ticket1">
  <div class="barter d-f j-c-c a-i-c" @click="barter">换</div>
 </div>

 <div class="d-f">
 <div class="way d-f j-c-c a-i-c">
  <div class="tlineds d-f j-c-c a-i-c"><SwapRightOutlined /></div>
 <div>单程</div>
 </div>
 <div class="ways d-f j-c-c a-i-c" @click="returns">
  <div class="tlineds d-f j-c-c a-i-c"><SwapOutlined /></div>
 <div>往返</div>
 </div>
 </div>
<div class="d-f m-t-10">
<div class="m-l-10 m-t-5">出发城市</div>
  <div class="input m-l-10">
  <a-input
      v-model:value="valuee"
      placeholder="请搜索出发城市"
      allow-clear 
      @change="onChange"
    />
  </div>
</div>
<div class="d-f m-t-10">
<div class="m-l-10 m-t-5">到达城市</div>
  <div class="input m-l-10">
  <a-input
      v-model:value="value1"
      placeholder="请搜索到达城市"
      allow-clear 
      @change="onChange"
    />
  </div>
</div>
<div class="d-f m-t-10">
<div class="m-l-10 m-t-5">出发时间</div>
  <div class="input m-l-10">
  <a-date-picker v-model:value="value2" @change="onChange" placeholder="请选择日期" :allowClear="allowClear"/>
  </div>
</div>
 <div class="button">
 <a-button type="primary" class="button" block @click="search">
            搜索
            <template v-slot:icon>
              <SearchOutlined />
            </template>
          </a-button>
 </div>
 </div>

 </div>
 <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="" width="620" height="350" class="img1">
 </div>
 <div class="d-f ensure j-c-s-a a-i-c">
  <div class="d-f">
  <img src="../../img/1.png" alt="">
  <div class="m-t-5">100%航协认证</div>
  </div>
 <div class="show"></div>
  <div class="d-f">
  <img src="../../img/2.png" alt="">
  <div class="m-t-10">出行保证</div>
  </div>
   <div class="show"></div>
  <div class="d-f">
  <img src="../../img/3.png" alt="">
  <div class="m-t-10">7x24小时服务</div>
  </div>
 </div>
 <div class="d-f special1">
 <img src="../../img/4.png" alt="">
 <div class="special">特价机票</div>
 </div>
 <div class="passenger m-t-20 d-f j-c-c a-i-c">
 <div v-for="(item,index) in specialTicket" :key="index">
 <img :src="item.cover" alt="图片加载失败" width="225" height="150" @click="clickLogo(item)">
 <div class="destCity">
 <div class="d-f departCity m-l-10">
 <div class="color">{{item.departCity}}---</div>
 <div class="color">{{item.destCity}}</div>
 <div class="color m-l-20">￥{{item.price}}</div>
 </div>
 </div>
 </div>
 </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,onMounted} from 'vue';
import { Modal } from 'ant-design-vue';
import { useRouter} from "vue-router";
import api from '@/components/http/api';
import dayjs from 'dayjs';
interface Data {
    name: string;
    value2: string;
    valuee: string;
    value1: string;
    specialTicket: any[];
    allowClear: boolean;
    obj: any;
    arr: any[];
    obj1: any;
    arr1: any[];
}
 export default defineComponent({
   name: '',
   components: {
   },
setup(){
const data: Data = reactive<Data>({
    name: '',
    value2: '',
    value1: '',
    valuee: '',
    specialTicket: [],
    allowClear: false,
    obj: {},
    arr: [],
    arr1: [],
    obj1: {}
});
 const router=useRouter()
 onMounted(()=>{
     api.getSale().then((res: any)=>{
         data.specialTicket=res.data
         console.log(res);
     }).catch((err)=>{
         console.log(err);
     })
 });
 const onChange=(value: string): void=>{
     
//    console.log(dayjs(value).format('YYYY-MM-DD'));
   data.value2=dayjs(value).format('YYYY-MM-DD')
 };
 const search=(): void=>{
     console.log(data.value2);
   router.push({path:'/screener',query:{value:data.valuee,value1:data.value1,value2:data.value2}})
  data.arr=JSON.parse(localStorage.getItem("arr")! as any)
  if(data.arr){
      const index =data.arr.filter(item=>{
          return item.value==data.valuee
      });
      if(index=== -1! as any){
          data.obj.value=data.valuee
   data.obj.value1=data.value1
   data.obj.value2=data.value2
   data.arr.push(data.obj)
   localStorage.setItem("arr",JSON.stringify(data.arr))
      }
  }else{
             data.obj1.value=data.valuee
   data.obj1.value1=data.value1
   data.obj1.value2=data.value2
   data.arr1.push(data.obj1)
   localStorage.setItem("arr",JSON.stringify(data.arr1)) 
  }
 };
 const clickLogo=(item: any)=>{
 console.log(item);
  router.push({path:'/screener',query:{value:item.departCity,value1:item.destCity,value2:item.departDate}})
    data.obj.value=item.departCity
   data.obj.value1=item.destCity
   data.obj.value2=item.departDate
   data.arr.push(data.obj)
   localStorage.setItem("arr",JSON.stringify(data.arr))
 };
const returns=(): void=>{
 Modal.warning({
        title: '提示',
        content: '目前暂不支持往返，请使用单程选票！',
      });
};
const barter=(): void=>{
  console.log(data.valuee);
  const city=data.valuee
  const city1 =data.value1
  data.value1=city;
  data.valuee=city1
};
return {
...toRefs(data),
returns,
barter,
search,
onChange,
clickLogo,
}
},
 })
</script>