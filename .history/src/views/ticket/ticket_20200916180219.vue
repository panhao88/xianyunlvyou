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
            <div>
              <a-tabs style="width:'200px' ">
                <a-tab-pane key="1">
                  <template v-slot:tab>
                    <span>
                      <apple-outlined />Tab 1
                    </span>
                  </template>
                  Tab 1
                </a-tab-pane>
                <a-tab-pane key="2">
                  <template v-slot:tab>
                    <span>
                      <android-outlined />Tab 2
                    </span>
                  </template>
                  Tab 2
                </a-tab-pane>
              </a-tabs>
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
          <div style="color:red;font-size:20px">
          <img src="../../assets/feiji.png" style="width:40px;height:40px" alt="">
          特价机票
        </div>
        <div class="box5"></div>
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
import { Res } from "@/types";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    onMounted(() => {
      api
        .getsale()
        .then((res: Res) => {
          console.log(res, "国内机票");
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
  margin-bottom: 30px;
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
.box5{
  width:1400px;
  height: 200px;
  border: solid 1px gray;
}
</style>