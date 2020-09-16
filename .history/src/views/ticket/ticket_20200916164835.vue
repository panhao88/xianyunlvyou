<template>
  <div>
    <!-- 国内机票 -->
    <div class="box1">
      <div class="box2">
       
        
            <img src="../../assets/feiji.png" style="width:40px;height:40px" alt />
       
          <div>国内机票</div>
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
</style>