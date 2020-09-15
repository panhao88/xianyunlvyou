<template>
  <div>
    
  </div>
    <div class="box1">
      <div v-for="(item,index) in list" :key="index">
        {{item.name}}
      </div>
    </div>
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
interface Item{
  name:string,
  path:string
}
interface Data {
  dataitem: dataitem[];
  list:Item[],
  acyivindex:string|number
}

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      dataitem: [],
      acyivindex:0,
      list:[
        {
          name:'攻略',
          path:'Travel'
        },
        {
          name:'酒店',
          path:'hotel'
        },
        {
          name:'机票',
          path:'ticket'
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
.box1{
  position: absolute;
}
</style>