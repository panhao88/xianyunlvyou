<template>
  <div class="box">
    <div class="box1">
      <div>
        <img src="../../assets/QQ图片20200914163322.png" alt />
      </div>
      <div v-for="(item,index) in shouye" :key="index" @click="dianji(item,index,path)" :class="fa === index ? 'dianji':''">
       <div class="yuyu"> {{item.name}}</div>
      </div>
    </div>
    <div class="box2" @click="goto">登录/注册</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import {useRouter} from 'vue-router'
interface shouye {
  name: string;
  path: string;
}
interface Data {
  shouye: shouye[];
  flag: string|number;
  flagpath:string
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      flag: 0,
      flagpath:'',
      shouye: [
        { name: "首页",     path: "home" },
        { name: "旅游攻略",  path: "Travel" },
        { name: "酒店",      path: "hotel" },
        { name: "国内机票",   path: "ticket" },
      ],
    });
    let router = useRouter();
    let dianji = (item:shouye,index:number,path:string): void => {
      data.flag = index
      data.flagpath = item.path
      router.push(data.flagpath)
      // console.log(item);
    };
    //去登陆
    let goto =() => {
       router.push('login')
    }
    return {
      ...toRefs(data),
      dianji,
      goto
    };
  },
});
</script>

<style scoped lang='scss'>
.box {
  width: 1400px;
  display: flex;
  justify-content: space-between;
}
.box1 {
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
}
.box2 {
  font-size: 20px;
 
}
.box2:hover{
  cursor:pointer;
   color: red; 
   text-decoration: underline;
}
.yuyu:hover{
   height: 64px;
  border-bottom: 4px solid rgba(16, 142, 233, 1);
}
.dianji{
  color:black;
  line-height: 22px;
  border-bottom: solid 2px rgba(16, 142, 233, 1);
  background: rgba(16, 142, 233, 1);
  padding: 20px;
  text-align: center;
}
</style>