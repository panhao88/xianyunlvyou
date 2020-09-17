<template>
 <div>
     <!-- 旅游 -->
      <div class="box1">

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
    width: ;
  }
</style>