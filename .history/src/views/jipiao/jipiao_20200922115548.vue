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
import { useRouter, useRoute } from "vue-router";
interface Data {
  departCity: string;
  departCode: string;
  destCity: string;
  destCode: string;
  departDate: string;
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
    });
    onMounted(() => {
      data.departCity = route.query.departCity! as string;
      data.departCode = route.query.departCode! as string;
      data.destCity = route.query.destCity! as string;
      data.destCode = route.query.destCode! as string;
      data.departDate = route.query.departDate! as string;
      api.getairs
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