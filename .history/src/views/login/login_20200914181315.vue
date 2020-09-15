<template>
  <div>
    <div class="box1">
      <div style="width:">
        <div>登录</div>
        <div>注册</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.box1 {
  width: 300px;
  height: 300px;
  background: red;
  display: flex;
  justify-content: center;
}
</style>