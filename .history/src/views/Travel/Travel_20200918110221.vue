<template>
  <div>
    <!-- 旅游 -->
    <div class="box1">
      <div class="box2">
        <div class="box3">
          <div class="box4">
            <div v-for="(item,index) in city" :key="index" >
              <div class="box5" :class="didi === index ? 'color':'color1'" 
              @mouseenter="enter(item,index)" 
              @mouseleave="leave">
                <div>{{item.type}}</div>
                <div>
                  <RightOutlined />
                </div>
                <div class="box6" v-if="didi===index" >
                  <div v-for="(item1,index1) in children" :key="index1">
                 <div class="box7">
                   <span style="padding:10px 5px;">{{index1+1}}</span>
                   <span style="padding:10px 5px;">{{item1.city}}</span>
                   <span style="color:black;padding:10px 5px;">{{item1.desc}}</span>
                 </div>
                </div>
                </div>
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
        data.children = []
        data.didi = "-1"
      // console.log(111)
    }
    onMounted(() => {
      api
        .getcities()
        .then((res: tuyo) => {
          data.city = res.data! as dataItem;
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
  background: #fff;
}
.box2 {
  width: 1400px;
  height: 800px;
  // background: chartreuse;
}
.box3 {
  width: 400vw;
}
.box4 {
  margin-top: 20px;
  width: 300px;
  height: 200px;
  display: flex;
  border-top: solid 1px black;
  border-left: solid 1px black;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
}
.color1{
  border-right: 1px solid black;
}
.box5 {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
  font-size: 20px;
  color: black;
}
.color{
  color: orange;
}
.box6{
  position: absolute;
  top: -1px;
  left: 299px;
  background: #ccc;
}
.box7{
  width: 450px;
  display: flex;
}
</style>