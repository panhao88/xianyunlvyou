<template>
 <div>
    <img src="../../assets/QQ图片20200914160810.png" class="img" alt="">
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
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
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
  // .img{
  //   width: 100%;
  //   height: 100%;
  //   background: url('../../assets/QQ图片20200914160810.png');
  //   background-size: 100% 100% ;
  //   background-size: cover;
  // }
</style>