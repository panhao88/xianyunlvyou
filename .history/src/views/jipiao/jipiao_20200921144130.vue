<template>
  <div>
    <div class="box1">
      <div class="box2">
        <div style="width:1050px;">
          <div class="d-f j-c-b m-t-2">
            <div style="width:200px">单程:{{}}</div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 200px"
                @focus="focus"
                ref="select"
                @change="handleChange"
              >
                <a-select-option value="jack">Jack</a-select-option>
              </a-select>
            </div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 200px"
                @focus="focus"
                ref="select"
                @change="handleChange"
              >
                <a-select-option value="jack">Jack</a-select-option>
              </a-select>
            </div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 200px"
                @focus="focus"
                ref="select"
                @change="handleChange"
              >
                <a-select-option value="jack">Jack</a-select-option>
              </a-select>
            </div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 200px"
                @focus="focus"
                ref="select"
                @change="handleChange"
              >
                <a-select-option value="jack">Jack</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="d-f j-c-b m-t-2 " style="width:200px">
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
            <div class="b-r" style="width:300px">
                <div>
                    <img src="../" alt="">
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
import { useRouter, useRoute } from "vue-router";
interface Data {
  chufa: string;
  daoda: string;
  day: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();
    const route = useRoute();
    let data: Data = reactive<Data>({
      chufa: "",
      daoda: "",
      day: "",
    });
    onMounted(() => {
      data.chufa = route.query.chufa! as string;
      data.daoda = route.query.daoda! as string;
      data.day = route.query.day! as string;
      //   console.log(data.chufa);
      //   console.log(data.daoda);
      //   console.log(data.day);
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