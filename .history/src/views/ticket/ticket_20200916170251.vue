<template>
  <div>
    <!-- 国内机票 -->
    <div class="box1">
      <div class="box2">
        <div>
          <img src="../../assets/feiji.png" style="width:40px;height:40px" alt />国内机票
        </div>
        <div class="box3">
          <div class="box3a">
            <div>
              <a-tabs>
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
          <div class="box3b"></div>
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
  background: blueviolet;
}
.box3 {
  width: 1400px;
  background: crimson;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box3a {
  width: 500px;
  height: 450px;
  background: yellow;
}
.box3b {
  width: 800px;
  height: 450px;
  background: violet;
}
</style>