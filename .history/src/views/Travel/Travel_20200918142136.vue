<template>
  <div>
    <!-- 旅游 -->
    <div class="box1">
      <div class="box2">
        <div class="box3">
          <div class="box4">
            <div v-for="(item,index) in city" :key="index">
              <div
                class="box5"
                :class="didi === index ? 'color':'color1'"
                @mouseenter="enter(item,index)"
                @mouseleave="leave"
              >
                <div>{{item.type}}</div>
                <div>
                  <RightOutlined />
                </div>
                <div class="box6" v-if="didi===index">
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
          <div
            style="width:300px;height:400px;display:flex; flex-direction: column;justify-content: space-around;"
          >
            <div class="f-s f-c-hei">推荐城市11</div>
            <div style="border:solid 1px black;"></div>
            <div>
              <img
                src="http://157.122.54.189:9093/images/pic_sea.jpeg"
                style="width:300px;height:300px;"
                alt
              />
            </div>
          </div>
        </div>
        <div class="bot1">
          <div>
            <a-input-search
              placeholder="请输入你想要去的地方 比如：广州"
              style="width: 200px;height: 60px"
              size="large"
            />
          </div>
          <div class="f-c-hei" style="margin-top:20px">
            <span>推荐：</span>
            <span style="padding-left:20px">广州</span>
            <span style="padding-left:20px">上海</span>
            <span style="padding-left:20px">北京</span>
          </div>
          <div style="width:1050px;display:flex;justify-content: space-between;">
            <div class="f-c-hei" style="margin-top:20px">推荐攻略</div>
            <div style="margin-top:20px">
              <a-button type="primary">
                <EditOutlined />写游记
              </a-button>
            </div>
          </div>
          <div style="width:1050px"></div>
        </div>
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
import { dataItem, tuyo, childrenItem,dateITEM ,dadwfv} from "@/types";
import api from "@/http/api";
interface T{
  
}
interface Data {
  city: dataItem;
  didi: string;
  children: childrenItem[];
  posts:dadwfv[];
}
export default defineComponent({
  name: "",
  props: {},  
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      city: {}, //城市列表
      didi: "-1", //城市列表判断
      children: [], //子元素城市列表
      posts:[]  //文章列表
    });
    // 移入
    const enter = (item: dataItem, index: dataItem): void => {
      data.children = item.children!;
      data.didi = index! as string;
      // console.log(item)
    };
    // 移出
    const leave = (): void => {
      data.children = [];
      data.didi = "-1";
      // console.log(111)
    };
    onMounted(() => {
      //城市列表
      api
        .getcities()
        .then((res: tuyo) => {
          data.city = res.data! as dataItem;
          console.log(res, "城市列表");
        })
        .catch((err: any) => {
          console.log(err);
        });
        //获取文章
        api.getposts().then((res: dateITEM)=>{
          data.posts = res.data;
          console.log(res ,"文章列表")
        }).catch((err:any) => {
          console.log(err)
        })
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
  background: chartreuse;
  display: flex;
  justify-content: space-between;
}
.box3 {
  width: 300px;
}
.bot1 {
  width: 1050px;
  margin-top: 20px;
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
.color1 {
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
.color {
  color: orange;
}
.box6 {
  position: absolute;
  top: -1px;
  left: 299px;
  background: beige;
}
.box7 {
  width: 450px;
  display: flex;
}
</style>