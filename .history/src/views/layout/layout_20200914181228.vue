<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <boxHeader></boxHeader>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <boxFooter></boxFooter>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import boxHeader from "../../components/boxHeader/boxHeader.vue";
import boxFooter from "../../components/boxFooter/boxFooter.vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    boxHeader,
    boxFooter,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
#components-layout-demo-basic .ant-layout-header {
  background: #fff;
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
}
#components-layout-demo-basic .ant-layout-footer {
   line-height: 440px !important;
    width: 100%;
    padding: 0 0;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>