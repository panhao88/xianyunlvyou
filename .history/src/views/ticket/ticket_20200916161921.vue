<template>
 <div>
     <!-- 国内机票 -->
     <div class="box1">
       <div class="box2">468468468</div>
     </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import api from '@/http/api'
import {Res} from '@/types'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
});
onMounted(() => {
  api.getsale().then((res: Res) => {
    console.log(res ,"国内机票")
  }).catch((err:Error) => {
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
    width:100%;
    display: flex;
    flex-direction: column;
    
  }
  .box2{
    width: 1200px;
    background: blueviolet;
    dis
    justify-content: center;
  }
</style>