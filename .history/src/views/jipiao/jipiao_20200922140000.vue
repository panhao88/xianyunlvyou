<template>
  <div>
    <div class="box1">
      <div class="box2">
        <div style="width:1050px;">
          <div class="d-f j-c-b m-t-2">
            <div style="width:300px ;font-size:18px" >单程:{{departCity}} - {{destCity}}/{{departDate}}</div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 150px"
                @focus="focus"
                ref="select"
                @change="handleChange"
               placeholder="起飞机场"
              >
                <a-select-option v-for="(item,index) in options.airport " :key="index">
                  {{item}}
                </a-select-option>
              </a-select>
            </div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 150px"
                @focus="focus"
                ref="select"
                @change="handleChange"
                placeholder="起飞时间"
              >
                <a-select-option v-for="(item,index) in options.flightTimes" :key="index">
                  {{item.from}}-00   {{item.to}}-00
                </a-select-option>
              </a-select>
            </div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 150px"
                @focus="focus"
                ref="select"
                @change="handleChange"
                placeholder="航空公司"
              >
                <a-select-option v-for="()"></a-select-option>
              </a-select>
            </div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 150px"
                @focus="focus"
                ref="select"
                @change="handleChange"
              >
                <a-select-option value="jack">Jack</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="d-f j-c-b m-t-2" style="width:200px">
            <div>筛选:</div>
            <div>
              <a-button type="danger" shape="round">撤销</a-button>
            </div>
          </div>
          <div class="b-r d-f j-c-a m-t-2">
            <div>航空信息</div>
            <div>起飞时间</div>
            <div>到达时间</div>
            <div>价格</div>
          </div>
          <div></div>
        </div>
        <div>
          <div class="b-r d-f j-c-a m-t-2" style="width:350px">
            <div class="d-f f-d-c a-c">
              <div>
                <img src="../../assets/renzheng.png" alt />
              </div>
              <div>航协认证</div>
            </div>
            <div class="d-f f-d-c a-c">
              <div>
                <img src="../../assets/feiji.png" alt />
              </div>出行保证
            </div>
            <div class="d-f f-d-c a-c">
              <div>
                <img src="../../assets/dianhua.png" alt />
              </div>7*24
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
import api from '@/http/api'
import { useRouter, useRoute } from "vue-router";
interface Info{
  departCity?:string
  departDate?:string
  destCity?:string
}
interface wqewqe {
  airport?:airport1[]
  company?:airport1[]
  flightTimes?:airport1[]
}
interface airport1 {
  [key :number] :string
}

interface Data {
  departCity: string;
  departCode: string;
  destCity: string;
  destCode: string;
  departDate: string;
  info:Info;
  options:wqewqe
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();
    const route = useRoute();
    let data: Data = reactive<Data>({
      departCity: "",
      departCode: "",
      destCity: "",
      destCode: "",
      departDate: "",
      info:{},
      options:{}
    });
    // const didi = () :void => {
      
    // }
    onMounted(() => {
      data.departCity = route.query.departCity! as string;
      data.departCode = route.query.departCode! as string;
      data.destCity = route.query.destCity! as string;
      data.destCode = route.query.destCode! as string;
      data.departDate = route.query.departDate! as string;
      api.getairs({
        departCity: data.departCity,
        departCode: data.departCode,
        destCity: data.destCity,
        destCode: data.destCode,
        departDate: data.departDate,
      }).then((res:any) => {
        data.info = res.info
        data.options = res.options
        console.log(res,"机票列表")
      }).catch((err:Error) => {})
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.box1 {
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.box2 {
  width: 78vw;
  background: orange;
  display: flex;
  justify-content: space-between;
  height: 200px;
  color: black;
  font-size: 20px;
}
</style>