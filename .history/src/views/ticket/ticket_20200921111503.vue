<template>
  <div>
    <!-- 国内机票 -->
    <div class="box1">
      <div class="box2">
        <div style="color:black;font-size:20px">
          <img src="../../assets/feiji.png" style="width:20px;height:20px" alt />国内机票
        </div>
        <div class="box3">
          <div class="box3a p-r">
            <div class="f-c-hei d-f" >
              <div
                class="d-f j-c a-c"
                style="width:250px;height:60px;background:#fff;border-top: solid 2px  orange;"
              >
                <div>
                  <SwapRightOutlined />
                </div>
                <div>单程</div>
              </div>
              <div class="d-f j-c a-c" style="width:250px;height:60px;background:#EEEEEE">
                <div>
                  <SwapOutlined />
                </div>
                <div @click="wangfan">往返</div>
                <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
                  <p>Some contents...</p>
                </a-modal>
              </div>
            </div>
            <div class="d-f a-c j-c-a f-d-c " style="width:100%;height:400px;">
              <div class="d-f a-c f-c-hei">
                出发城市：
                <div>
                  <a-input placeholder="请搜索出发城市" style="width:300px;height:40px" v-model:value="chufa" />
                </div>
              </div>
              <div class="d-f a-c f-c-hei">
                到达城市：
                <a-input placeholder="请搜索出发城市" v-model:value="daoda" style="width:300px;height:40px" />
              </div>
              <div class="d-f a-c f-c-hei">
                出发时间：
                <a-date-picker @change="onChange" style="width:300px;" placeholder="请选择日期" v-model:value="day"/>
              </div>
              <div>
                <a-button type="primary" @click="search">搜索</a-button>
              </div>
            </div>
            <div class="f-c-hei huan" @click="clickitem">换</div>
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
          <div style="width:1px;height:40px;background:#DDDDDD"></div>
          <div>
            <img src="../../assets/dunpai.png" alt />
            出行保证
          </div>
          <div style="width:1px;height:40px;background:#DDDDDD"></div>
          <div>
            <img src="../../assets/dianhua.png" alt />
            7*24小时服务
          </div>
        </div>
        <div style="color:black;font-size:20px;margin-top:20px">
          <img src="../../assets/feiji.png" style="width:20px;height:20px" alt />
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
  onMounted
} from "vue";
import api from "@/http/api";
import { Res, ResItem } from "@/types";
import {useRouter,useRoute} from 'vue-router'
interface Data {
  list: ResItem[]; //机票请求数据定义的总对象
  visible:boolean
  chufa:string
  daoda:string
  kong:string
  day:string
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
     const router = useRouter();
    const route = useRoute()
    let data: Data = reactive<Data>({
      list: [] ,//机票定义数组
      visible: false,//dialogo弹出框
      chufa:'', //出发
      daoda:'', //到达
      day:'', //时间
      kong:'', //控
    });
    //往返
    let wangfan =():void => {
      data.visible = true
    }
    //交换
    let clickitem =():void => {
      data.kong = data.chufa
      data.chufa = data.daoda
      data.daoda = data.kong
    }
    const search =() :void => {
      router.push({})
      console.log(data.chufa)
      console.log(data.daoda)
      console.log(data.day)
    }
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
      wangfan,
      clickitem,
      search
    };
  }
});
</script>

<style scoped lang='scss'>
.box1 {
  width: 100%;
  display: flex;
  background: #fff;
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
  // background: blanchedalmond;
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
  border: solid 1px #dddddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
}
.box5 {
  width: 1400px;
  height: 260px;
  border: solid 1px #dddddd;
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
.huan{
  position: absolute;
  top: 150px;
  right: 40px;
  font-size: 15px;
}
</style>