<template>
  <div>
    <div class="box1">
      <div class="box2">
        <div style="width:1050px;">
          <div class="d-f j-c-b m-t-2">
            <div style="width:300px ;font-size:18px">单程:{{departCity}} - {{destCity}}/{{departDate}}</div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 150px"
                @focus="focus"
                ref="select"
                @change="handleChange"
                placeholder="起飞机场"
              >
                <a-select-option v-for="(item,index) in options.airport " :key="index">{{item}}</a-select-option>
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
                <a-select-option
                  v-for="(item,index) in options.flightTimes"
                  :key="index"
                >{{item.from}}-00 {{item.to}}-00</a-select-option>
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
                <a-select-option v-for="(item,index) in options.company" :key="index">{{item}}</a-select-option>
              </a-select>
            </div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 150px"
                @focus="focus"
                ref="select"
                @change="handleChange"
                placeholder="机型"
              >
                <a-select-option v-for="(item,index) in jixing" :key="index">{{item.didi}}</a-select-option>
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
          <div class="m-t-2">
            <div
              class="b-r"
              v-for="(item,index) in flights.slice((current-1)*pageSize,current*pageSize)"
              :key="index"
              style="margin-top:8px"
            >
              <div class="d-f a-c j-c-a" @click="dianji( index)">
                <div>{{item.airline_name}}{{item.flight_no}}</div>
                <div style="width:380px" class="d-f j-c-b">
                  <div class="d-f f-d-c a-c">
                    <div style=" font-weight: 700;">{{item.dep_time}}</div>
                    <div style="color:#99B5D7">{{item.org_airport_name}}{{item.org_airport_quay}}</div>
                  </div>
                  <div class="d-f f-d-c a-c">
                    <div style="color:#99B5D7">{{item.time111}}</div>
                    <div class="xian"></div>
                  </div>
                  <div class="d-f f-d-c a-c">
                    <div style=" font-weight: 700;">{{item.arr_time}}</div>
                    <div style="color:#99B5D7">{{item.dst_airport_name}}{{item.dst_airport_quay}}</div>
                  </div>
                </div>
                <div>
                  <div v-for="(item1,index1) in item.seat_infos.slice(0,1)" :key="index1">
                    <div class="d-f a-c">
                      <span>￥</span>
                      <span style="color:orange;font-size: 30px;">{{item1.org_settle_price_child}}</span>
                      <span>起</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="flag === index" class="f-c-hei">
                <div class="d-f j-c-a a-c" style="background:beige">
                  <div style="width:100px;">低价推荐</div>
                  <div class="d-f f-d-c j-c-a">
                    <div v-for="(item2,index2) in item.seat_infos" :key="index2">
                      <div class="d-f j-c-a a-c" style="width:900px;height:120px;">
                        <div
                          style="font-size:15px;width:400px;"
                          class="d-f j-c"
                        >{{item2.group_name}} | {{item2.supplierName}}</div>
                        <div
                          style="width:80px;color:orange"
                          class="d-f j-c"
                        >￥{{item2.settle_price_coupon}}</div>
                        <div>
                          <a-button type="primary" @click="xuanding">选定</a-button>
                          <div style="width:80px;" class="d-f j-c">剩余:{{item2.discount}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      <div>
        <a-pagination
          v-model:current="current"
          v-model:pageSize="pageSize"
          :page-size-options="pageSizeOptions"
          :total="total"
          show-size-changer
          show-quick-jumper
          :show-total="total => `共 ${total} 条`"
        >
          <template v-slot:buildOptionText="props">
            <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
            <span v-else>全部</span>
          </template>
        </a-pagination>
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
import dayjs from "dayjs";
import api from "@/http/api";
import { flightss, flightsItem } from "@/types/index";
import { useRouter, useRoute } from "vue-router";
interface Info {
  departCity?: string;
  departDate?: string;
  destCity?: string;
}
interface wqewqe {
  airport?: airport1[];
  company?: airport1[];
  flightTimes?: airport1[];
}
interface airport1 {
  [key: number]: string;
}
interface jixingitem {
  [key: string]: string;
}

interface Data {
  departCity: string;
  departCode: string;
  destCity: string;
  destCode: string;
  departDate: string;
  info: Info;
  options: wqewqe;
  jixing: jixingitem[];
  flights: flightss[];
  total: number;
  pageSizeOptions: string[];
  current: number;
  pageSize: number;
  flag: number;
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
      flag: -1,
      destCity: "",
      destCode: "",
      departDate: "",
      info: {},
      options: {},
      flights: [],
      total: 0,
      pageSizeOptions: ["5", "10", "20", "30"],
      current: 1,
      pageSize: 5,
      jixing: [
        {
          didi: "大",
        },
        {
          didi: "中",
        },
        {
          didi: "小",
        },
      ],
    });
    const dianji = (index: number): void => {
      if (data.flag === index) {
        data.flag = -1;
      } else {
        data.flag = index;
        console.log(index, 111);
      }
    };
    const xuanding = (): void => {
      router.push("jipiaotijiao");
    };
    onMounted(() => {
      data.departCity = route.query.departCity! as string;
      data.departCode = route.query.departCode! as string;
      data.destCity = route.query.destCity! as string;
      data.destCode = route.query.destCode! as string;
      data.departDate = route.query.departDate! as string;
      api
        .getairs({
          departCity: data.departCity,
          departCode: data.departCode,
          destCity: data.destCity,
          destCode: data.destCode,
          departDate: data.departDate,
        })
        .then((res: any) => {
          data.info = res.info;
          data.options = res.options;
          data.flights = res.flights;
          data.total = res.total;
          data.flights.map((item:any) => {
            const time =
              new Date(item.arr_datetime).getTime() -
              new Date(item.dep_datetime).getTime();
              console.log(time,11)
            if (time > 0) {
              const c = time / 3600000;
              const a = parseInt(c.toString());
              const b = (time % 3600000) / 60000;
              item.time111 = `${a}时${b}分`;
            } else {
              const times = time + 3600000 * 24;
              const c = times / 3600000;
              const a = parseInt(c.toString());
              const b = (times % 3600000) / 60000;
              item.time111 = `${a}时${b}分`;
            }
          });
          console.log(res, "机票列表");
        })
        .catch((err: Error) => {});
    });
    return {
      ...toRefs(data),
      dianji,
      xuanding,
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
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 20px;
}
.xian {
  width: 120px;
  height: 2px;
  background: black;
}
</style>