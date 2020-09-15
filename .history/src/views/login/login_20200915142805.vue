<template>
  <div class="box1">
    <a-carousel autoplay arrows>
      <div v-for="(item,index) in dataitem" :key="index">
        <img :src="`http://157.122.54.189:9095${item.url}`" alt class="img" />
      </div>
    </a-carousel>
    <div class="box2">
      <div style="">
        <div>登录</div>
        <div>注册</div>
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
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
       dataitem: [],
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
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 900px;
  display: flex;
  ju
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
  background: red;
  position: absolute;
  top: 30%;
  left: 35%;
}
</style>