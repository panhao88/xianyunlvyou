<template>
  <a-carousel autoplay arrows>
   <template v-slot:prevArrow>
      <div class="custom-slick-arrow" style="left: 10px;zIndex: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template v-slot:nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div v-for="(item,index) in dataitem" :key="index">
      <img :src="`http://157.122.54.189:9095${item.url}`" alt class="img" />
    </div>
    <div></div>
  </a-carousel>
</template>
<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
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
  components: {
    
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      dataitem: [],
      list:[
        {
          name:
        }
      ]
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
}

.ant-carousel ::v-deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
</style>