<template>
  <div class="box1">
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
    </a-carousel>
    <div class="box2">
      <div class="box3">
        <div
          v-for="(item,index) in list"
          :key="index"
          :class="acyivindex===index ? 'didi':''"
          @click="goto(item,index)"
        >
          <div class="todo">{{item.name}}</div>
        </div>
      </div>
      <div v-if="acyivindex === 0" style="width:600px">
        <a-input-search
          v-model:value="value"
          size="large"
          placeholder="搜索城市"
          @search="onSearch"
        />
      </div>
      <div v-if="acyivindex === 1" style="width:600px">
        <a-input-search
          v-model:value="value"
          size="large"
          placeholder="搜索酒店"
          @search="onSearch"
        />
      </div>
      <div v-if="acyivindex === 2" style="width:600px">
        <a-input-search
          v-model:value="value"
          size="large"
          placeholder="请输入出发地"
          @search="onSearch"
        />
      </div>
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
import {Res,ResItem} from '@/types'
import {useRouter} from 'vue-router'
// interface Res {
//   data: dataitem[];
//   total?: number;
// }
interface dataitem {
  url: string;
  desc: string;
}
interface Item {
  name: string;
  path: string;
}
interface Data {
  dataitem: dataitem[];
  list: Item[];
  acyivindex: string | number;
  sales:ResItem[]
}

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      dataitem: [],
      acyivindex: 0,
      sales:[],
      list: [
        {
          name: "攻略",
          path: "Travel",
        },
        {
          name: "酒店",
          path: "hotel",
        },
        {
          name: "机票",
          path: "ticket",
        },
      ],
    });
    let router = useRouter();
    onMounted(() => {
      // 轮播图
      api
        .getData()
        .then((res: Res) => {
          data.dataitem = res.data;
          // console.log(data.dataitem, "轮播图");
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
    let goto = (item: Item, index: number): void => {
      data.acyivindex = index;
      if(item.path === 'ticket'){
         api
          .getsale()
          .then((res: Res) => {
            data.sales = res.data
            console.log(res);
            if (res.data) {
              router.push({
                path:'ticket',
                query:{
                  msg: JSON.stringify(data.sales)
                }
              });
            }
          })
          .catch((err: Error) => {
            console.log(err);
          });
      }
    };
    return {
      ...toRefs(data),
      goto,
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
.box1 {
  width: 100%;
  position: relative;
  height: 900px;
}
.box2 {
  position: absolute;
  top: 40%;
  left: 30%;
}
.box3 {
  display: flex;
}
.todo {
  width: 100px;
  height: 0;
  text-align: center;
  font-size: 25px;
  border-right: 10px solid transparent;
  border-bottom: 40px solid rgba(0, 0, 0, 0.5); //背景透明
}
.didi {
  width: 100px;
  height: 0;
  color: black;
  text-align: center;
  font-size: 18px;
  border-right: 10px solid transparent;
  border-bottom: 40px solid rgb(255, 255, 255);
}

</style>