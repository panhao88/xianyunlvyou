<template>
  <div class="box1">
    <a-carousel autoplay arrows>
      <div v-for="(item,index) in dataitem" :key="index">
        <img :src="`http://157.122.54.189:9095${item.url}`" alt class="img" />
      </div>
    </a-carousel>
    <div class="box2">
      <div style="display: flex;justify-content: space-between;height:60px; align-items: center; background: gray;">
        <div class="denglu" :class="didi === 0 ? 'color':''" @click="godenglu(item,index)" >登录</div>
        <div class="zhuce" :class="didi === 1 ? 'color':''" @click="gozhuce(item,index)">注册</div>
      </div>
      <div v-if="didi === 0">
         <a-input v-model:value="value" placeholder="Basic usage" />
          <a-input-password v-model:value="value" placeholder="input password" />
          <a-button type="primary">
    Primary
  </a-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext ,onMounted} from "vue";
import api from "@/http/api";
interface Res {
  data: dataitem[];
  total?: number;
}
interface dataitem {
  url: string;
  desc: string;
}
interface Data {
  dataitem: dataitem[];
  didi:number
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
       dataitem: [],
       didi:0
    });
     onMounted(() => {
      // 轮播图
      api
        .getData()
        .then((res: Res) => {
          data.dataitem = res.data;
          console.log(data.dataitem, "轮播图");
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
    let godenglu = () => {
      data.didi = 0
    };
    let gozhuce = () => {
      data.didi = 1
    }
    return {
      ...toRefs(data),
      godenglu,
      gozhuce
    };
  },
});
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 900px;
 
}

.ant-carousel ::v-deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
 
}
.box1{
   width: 100%;
  position: relative;
  height: 900px;
}
.box2{
  width: 500px;
  height: 400px;
  background: beige;
  position: absolute;
  top: 30%;
  left: 35%;
  
}
.color{
  border-top: solid 2px yellow;
  color: red;
}
.denglu{
  width: 50%;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
.zhuce{
  width: 50%;
  height: 60px;
  text-align: center;
   line-height: 60px;
}
</style>