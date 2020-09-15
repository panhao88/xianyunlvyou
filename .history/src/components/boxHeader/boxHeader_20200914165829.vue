<template>
 <div class="box">
    <div class="box1">
      <div><img src="../../assets/QQ图片20200914163322.png" alt=""></div>
      <div>首页</div>
      <div>旅游攻略</div>
      <div>酒店</div>
      <div>国内机票</div>
    </div>
    <div class="box2">登录/注册</div>
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
  shouye:[
    {name:'首页' ,id:0},
    {name:'旅游攻略' ,id:0},
    {name:'酒店' ,id:0},
    {name:'首页' ,id:0},
  ]
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
    display: flex;
    justify-content: space-between;
  }
  .box1{
    width: 50%;
    display: flex;
    justify-content: space-between;
    font-size: 25px;
  }
  .box2{
    font-size: 20px;
  }
</style>