<template>
 <div class="box">
    <div><img src="../../assets/QQ图片20200914163322.png" alt=""></div>
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
  .box{
    width: 1200px;
    background: red;
    display: flex;
    
  }
</style>