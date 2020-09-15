<template>
 <div class="box">
    <div class="box1"><img src="../../assets/QQ图片20200914163322.png" alt=""></div>
    <div class="box2">456465456</div>
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
    width: 1400px;
    background: red;
    display: flex;
    justify-content: space-between;
  }
  .box1{
    
  }
</style>