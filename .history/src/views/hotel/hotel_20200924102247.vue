<template>
  <div>
    <!-- 酒店 -->
    <div class="box1">
      <div class="box2 f-c-hei">
        <div class="f-s-2">酒店 ></div>
        <div class="d-f ">
          <div class="m-l-2">
            <a-input placeholder="Basic usage" style="width:300px" />
          </div>
          <div class="m-l-2">
            <a-range-picker @change="onChange" style="width:400px" />
          </div>
          <div class="m-l-2">
            <a-select style="width: 300px" @focus="focus" ref="select" @change="handleChange">
              <a-select-option value="jack">Jack</a-select-option>
            </a-select>
          </div>
          <div class="m-l-2">
            <a-button type="primary" style="width:100px">查看价格</a-button>
          </div>
        </div>
        <div class="d-f j-c-b m-t-2">
          <div class="" style="width:800px;height:400px;background:red"></div>
          <div class="" style="width:550px;height:400px;background:orange">
             <div id="container" style="height:400px;width:550px;"></div>
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

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext ,onMounted} from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    //出发城市代码
    const getairscity = (): void => {
      api
        .getairscity({ name: data.city })
        .then((res: any) => {
          if (res.total !== 0) {
            data.departCode = res.data[0].sort!;
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };
    //城市附近
    const getcities = (): void => {
      api
        .getcities({ name: data.city })
        .then((res: any) => {
          data.nearby = res.data[0].scenics;
          console.log(data.nearby);
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
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
    onMounted(()=>{
       const map = new AMap.Map("container", {
        zoom: 12 //设置地图的缩放级别
      });
      //   AMap.plugin("AMap.CitySearch", () => {
      //     const citySearch = new AMap.CitySearch();
      //     citySearch.getLocalCity(function(status: any, result: any) {
      //       if (status === "complete" && result.info === "OK") {
      //         // 查询成功，result即为当前所在城市信息
      //         console.log(result);
      //       }
      //     });
      //   });
      console.log(map);
      console.log(AMap);
    })
    return {
      ...toRefs(data),
      onMounted
    };
  }
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