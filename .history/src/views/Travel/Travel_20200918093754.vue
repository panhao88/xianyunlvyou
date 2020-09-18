<template>
  <div>
    <!-- 旅游 -->
    <div class="box1">
      <div class="box2">
        <div class="box3">
          <div class="box4">
            <div v-for="(item,index) in city" :key="index" >
              <div class="box5" :class="didi === index ? 'color':'border1'" 
              @mouseenter="enter(item,index)" 
              @mouseleave="leave">
                <div>{{item.type}}</div>
                <div>
                  <RightOutlined />
                </div>
                <!-- <div v-for="(item1,index1) in item.children" :key="index1">
                  <div>{{item1.city}}</div>
                  <div>{{item1.desc}}</div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div></div>
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
import { dataItem,tuyo,childrenItem} from "@/types";
import api from "@/http/api";
interface Data {
  city:dataItem;
  didi:string;
  children:childrenItem[]
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      city: {},
      didi:"-1",
      children:[],
    });
    // 移入
    const enter =(item:dataItem,index:dataItem):void => {
      data.children = item.children!;
      data.didi = index! as string
      // console.log(item)
    }
    // 移出
    const leave =():void => {
      console.log(111)
    }
    onMounted(() => {
      api
        .getcities()
        .then((res: tuyo) => {
          data.city = res.data!;
          console.log(res, "城市列表");
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
    return {
      ...toRefs(data),
      enter,
      leave,
    };
  },
});
</script>

<style scoped lang='scss'>
.box1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box2 {
  width: 1400px;
  height: 800px;
  background: chartreuse;
}
.box3 {
  width: 400vw;
}
.box4 {
  margin-top: 20px;
  width: 300px;
  height: 230px;
  border: solid 1px gainsboro;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
}
.box5 {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid gray;
  font-size: 20px;
  color: black;
}
.color{
  color: orange;
}
</style>