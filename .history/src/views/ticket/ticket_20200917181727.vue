<template>
  <div>
    <!-- 国内机票 -->
    <div class="box1">
      <div class="box2">
        <div style="color:red;font-size:20px">
          <img src="../../assets/feiji.png" style="width:40px;height:40px" alt />国内机票
        </div>
        <div class="box3">
          <div class="box3a">
            <div class="f-c-hong d-f" style>
              <div
                class="d-f j-c a-c"
                style="width:250px;height:60px;background:#fff;border-top: solid 2px  orange;"
              >
                <div>
                  <SwapRightOutlined />
                </div>
                <div>单程</div>
              </div>
              <div class="d-f j-c a-c" style="width:250px;height:60px;background:gray">
                <div>
                  <SwapOutlined />
                </div>
                <div>往返</div>
              </div>
            </div>
            <div class="d-f a-c j-c-a f-d-c" style="width:100%;height:400px">
              <div class="d-f a-c f-c-hong" >
                <div>出发城市： </div>
                <div><a-input v-model:value="value" placeholder="Basic usage" style="width:300px;height:40px" /></div>
              </div>
              <div class="d-f a-c f-c-hong">
                到达城市:  
                <a-input v-model:value="value" placeholder="Basic usage" style="width:300px;height:40px"/>
              </div>
              <div>
                <a-date-picker v-model:value="value1" @change="onChange" />
              </div>
              <div>
                <a-button type="primary">Primary</a-button>
              </div>
            </div>
          </div>
          <div class="box3b">
            <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" class="img" alt />
          </div>
        </div>
        <div class="box4">
          <div>
            <img src="../../assets/renzheng.png" alt />
            100%航行认证
          </div>
          <div style="width:1px;height:40px;background:black"></div>
          <div>
            <img src="../../assets/dunpai.png" alt />
            出行保证
          </div>
          <div style="width:1px;height:40px;background:black"></div>
          <div>
            <img src="../../assets/dianhua.png" alt />
            7*24小时服务
          </div>
        </div>
        <div style="color:red;font-size:20px;margin-top:20px">
          <img src="../../assets/feiji.png" style="width:40px;height:40px" alt />
          特价机票
        </div>
        <div class="box5">
          <div v-for="(item,index) in list" :key="index">
            <div class="imgg">
              <!-- 【0】取出数组第一项的cover -->
              <img :src="list[0].cover" style="width:320px;height:200px" alt />
              <div class="box6">
                <div>{{item.departCity}}~~{{item.destCity}}</div>
                <div>{{item.price}}</div>
              </div>
            </div>
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
import api from "@/http/api";
import { Res, ResItem } from "@/types";
interface Data {
  list: ResItem[]; //机票请求数据定义的总对象
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      list: [], //机票定义数组
    });
    onMounted(() => {
      // 机票亲求
      api
        .getsale()
        .then((res: Res) => {
          data.list = res.data;
          console.log(data.list, "国内机票");
        })
        .catch((err: Error) => {
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
.box1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box2 {
  width: 1400px;
  margin-bottom: 60px;
}
.box3 {
  width: 1400px;

  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box3a {
  width: 500px;
  height: 450px;
  background: blanchedalmond;
}
.box3b {
  width: 800px;
  height: 450px;
  color: yellow;
}
.img {
  width: 800px;
  height: 450px;
}
.box4 {
  width: 1400px;
  height: 60px;
  border: solid 1px gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  
}
.box5 {
  width: 1400px;
  height: 260px;
  border: solid 1px gray;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.imgg {
  width: 320px;
  height: 200px;
  position: relative;
}
.box6 {
  color: black;
  width: 320px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
}
</style>