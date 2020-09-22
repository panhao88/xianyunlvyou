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
                @mouseleave="leave(item)"
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
            <div class="f-s f-c-hei">推荐城市</div>
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
            <div
              class="f-c-hei f-s"
              style="margin-top:20px;color:orange;border-bottom:solid 2px orange;padding-bottom"
            >推荐攻略</div>
            <div style="margin-top:20px">
              <a-button type="primary" @click="youji">
                <EditOutlined />写游记
              </a-button>
            </div>
          </div>
          <div class="boto">
            <div>
              <div v-for="(item,index) in posts.slice((current-1)*pageSize, current*pageSize)" :key="index">
                <div class="bott"></div>
                
                <!-- <div
                  class="f-s-2 f-c-hei"
                  @click="goto(item)"
                  @mouseenter="baba(index)"
                  @mouseleave="mama(index)"
                  :class="caonima === index ? 'yanse':''"
                >{{item.title}}</div> -->
                <!-- <div class="bott1 f-c-hei" @click="goto(item)">{{item.summary}}</div>
                <div v-if="images.length" :class="item.images.length === 2 ? 'php':'pop'">
                  <div v-for="(item1,index1) in item.images.slice(0,3)" :key="index1" >
                    <div>
                      <img :src="item1" alt style="flex:1;width:300px;height:200px;" @click="goto(item)" />
                    </div>
                  </div>
                </div> -->
                <div class="m-t-2 f-c-hei m-l-2">
                  <span>{{item.cityName}}</span>
                  <span>by</span>
                  <span>
                    <img
                      :src="`http://157.122.54.189:9095/assets/images/avatar.jpg`"
                      style="width:20px;height:20px;border-radius: 50%;"
                      alt
                    />
                  </span>
                  <span>{{item.account.nickname}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bott"></div>
          <div class="fenye">
            <a-pagination
              :page-size-options="pageSizeOptions"
              :total="total"
              show-size-changer
              show-quick-jumper
              v-model:current="current"
              v-model:pageSize="pageSize"
              :show-total="total => `共 ${total} 条`"
            >
              <template v-slot:buildOptionText="props">
                <span>{{ props.value }}条/页</span>
              </template>
            </a-pagination>
          </div>
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
import { useRouter, useRoute } from "vue-router";
import { dataItem, tuyo, childrenItem } from "@/types";
import api from "@/http/api";
interface Dhsjh {
  title?: string;
  id?: number;
  summary?: string;
}
interface Total {
  data: Dhsjh[];
}
interface Data {
  city: dataItem;
  didi: string;
  children: childrenItem[];
  posts: Total[];
  total: number;
  pageSizeOptions: string[];
  current: number;
  pageSize: number;
  caonima: number;
  id: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      city: {}, //城市列表
      didi: "-1", //城市列表判断
      children: [], //子元素城市列表s
      posts: [], //文章列表
      caonima: -1,
      total: 0,
      pageSizeOptions: ["5", "10", "20", "30"],
      current: 1,
      pageSize: 5,
      id: "",
    });
    const router = useRouter();
    const route = useRoute();
    // 移入
    const enter = (item: dataItem, index: dataItem): void => {
      data.children = item.children!;
      data.didi = index! as string;
      // console.log(item)
    };
    // 移出
    const leave = (item: dataItem): void => {
      data.children = [];
      data.didi = "-1";
      // console.log(111)
    };
    const baba = (index: Dhsjh): void => {
      data.caonima = index! as number;
      // console.log( item,9999);
    };
    const mama = (item: Dhsjh): void => {
      data.caonima = -1;
      // console.log(555);
    };
    // 分页
    const onShowSizeChange = (current: number, pageSize: number): void => {
      data.pageSize = data.pageSize;
    };
    // 跳转到写游记
    const youji = (): void => {
      router.push("/Travel/post");
    };
    const goto = (item: any): void => {
      // console.log(item.id,"参数");
      router.push({ path: "/Travel/get", query: { id: item.id } });
    };
    onMounted(() => {
      data.id = route.query.id! as any;
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
      // api
      //   .getposts({city:data.id})
      //   .then((res: any) => {
      //     data.posts = res.data;
      //     data.total = res.total
      //     console.log(res, "文章列表");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      //获取文章
      api
        .getpostss()
        .then((res: any) => {
          data.posts = res.data;
          data.total = res.total;
          console.log(res, "文章列表");
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return {
      ...toRefs(data),
      enter,
      leave,
      onShowSizeChange,
      youji,
      goto,
      baba,
      mama,
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
  // background: chartreuse;
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
  z-index: 1;
}
.box7 {
  width: 450px;
  display: flex;
}
.boto {
  width: 1050px;
}
.bott {
  padding: 10px;
  border-top: solid 1px black;
}
// 多行显示省略号
.bott1 {
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; //行数
  display: -webkit-box;
  overflow: hidden;
}
.yanse {
  color: orange;
}
.php{
  display: flex;
}
.pop{
    display: flex;
  justify-content: space-between;
}
</style>