<template>
 <div>
     <!-- 旅游 -->
      <div class="box1">
        <div class="box2">
          <div class="box3">
            <div class="box4">
              <div  v-for="(item,index) in city" :key="index" style="">
                <div class="box5">
                  <div style="color:black;font-size:20px">{{item.type}}</div>
                  <div><RightOutlined style="color:black;font-size:20px"/></div>
                </div>
                <div v-for="(item,index) in item.children" :key="index">

                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {dataItem,tuyo} from '@/types'
import api from '@/http/api'
interface Data {
  city:dataItem[];
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
  city:[]
})
onMounted(() => {
    api.getcities().then((res:tuyo)=>{
        data.city = res.data
      console.log(res ,"城市列表")
    }).catch((err:any) => {
      console.log(err)
    })
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
  .box1{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box2{
    width: 1400px;
    // background: chartreuse;
  }
  .box3{
    width: 400vw;
  }
  .box4{
    width: 300px;
    height: 200px;
    border: solid 1px gainsboro;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .box5{
    display: flex;
    justify-content: space-around;
  }
  .box4:hover{
    color: red;
  }
</style>