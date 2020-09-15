<template>
 <div class="box">
    <div class="box1">
      <div><img src="../../assets/QQ图片20200914163322.png" alt=""></div>
      <div>首页</div>
      <div>旅游gong'lü</div>
    </div>
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
    width: 50%;
    display: flex;
    padding-left: 50px;
  }
</style>