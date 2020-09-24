<template>
  <div>
    <!-- 酒店 -->
    <div class="box1">
      <div class="box2 f-c-hei">
        <div class="f-s-2">酒店 ></div>
        <div class="d-f">
          <div class="m-l-2">
            <a-input placeholder="搜索城市" v-model:value="sousuo" @pressEnter="getcitiesss"  style="width: 300px" />
          </div>
          <div class="m-l-2">
            <a-range-picker @change="onChange" style="width: 400px" />
          </div>
          <div class="m-l-2">
            <a-select
              style="width: 300px"
              @focus="focus"
              ref="select"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
            </a-select>
          </div>
          <div class="m-l-2">
            <a-button type="primary" style="width: 100px">查看价格</a-button>
          </div>
        </div>
        <div class="d-f j-c-b m-t-2">
          <div
            class=""
            style="width: 800px; height: 400px; background: red"
          ></div>
          <div class="" style="width: 550px; height: 400px; background: orange">
            <div id="container" style="height: 400px; width: 550px"></div>
          </div>
        </div>
        <div>
          <div style="100px">
            <a-slider id="test" v-model:value="value1" :disabled="disabled" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  ref,
  onMounted,
} from "vue";
import api from '@/http/api'
interface FormInline {
  user: "";
  password: "";
}
interface Data {
  name: string;
  formInline: FormInline;
  inputValue: string;
  value1: number;
  value2: number;
  value3: number;
  value11: string;
  value22: string;
  value33: string;
  value44: string;
  city: string;
  departCode: number;
  hotel: [];
  nearby: [];
  datahotel: {};
  sousuo:string
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const container = ref<HTMLDivElement | null>(null);
    const data: Data = reactive<Data>({
      name: "jack",
      formInline: {
        user: "",
        password: "",
      },
      sousuo:'',
      inputValue: "4000",
      value1: 3,
      value2: 4,
      value3: 5,
      value11: "不限",
      value22: "不限",
      value33: "不限",
      value44: "不限",
      city: "成都市",
      departCode: 239,
      hotel: [],
      nearby: [],
      datahotel: {},
    });
    // 酒店详情
    const gethotels = (): void => {
      api
        .gethotels({
          city: data.departCode,
        })
        .then((res: any) => {
          console.log(res);
          data.hotel = res.data;
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    //出发城市代码
    const getairscity1 = (): void => {
      api
        .getairscity1({ name: data.city })
        .then((res: any) => {
          if (res.total !== 0) {
            data.departCode = res.data[0].sort!;
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    //搜索城市
    //  const onChange1 = (value: string) => {
    //   data.sousuo = value;
    //   console.log(data.sousuo,"搜索")
    // };
    const getcitiesss = (): void => {
      const kkk1 = data.sousuo
      api
        .getcitiesss({ name: kkk1 })
        .then((res: any) => {
          // data.nearby = res.data[0].scenics;
          console.log(data.nearby,"搜索城市");
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    //酒店选项
    const gethotelsoptions = (): void => {
      api
        .gethotelsoptions()
        .then((res: any) => {
          console.log(res);
          data.datahotel = res.data!;
        })
        .catch((err: any) => {
          console.log(err);
        });
    };

    onMounted(() => {
      getairscity1();
      gethotels();
      getcitiesss();
      gethotelsoptions();
      const map = new AMap.Map("container", {
        zoom: 12, //设置地图的缩放级别
      });
      // AMap.plugin("AMap.CitySearch", () => {
      //   const citySearch = new AMap.CitySearch();
      //   citySearch.getLocalCity(function(status: any, result: any) {
      //     if (status === "complete" && result.info === "OK") {
      //       // 查询成功，result即为当前所在城市信息
      //       console.log(result);
      //     }
      //   });
      // });
    });
    return {
      ...toRefs(data),
      onMounted,
      gethotels,
      onChange1
      // getcitiesss,
    };
  },
});
</script>

<style scoped lang='scss'>
.box1 {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box2 {
  width: 78vw;
  background: yellow;
}
</style>