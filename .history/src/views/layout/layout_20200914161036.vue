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
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #fff;
  color: black;
}
#components-layout-demo-basic .ant-layout-footer {
   line-height: 300px !important;
   width: ;
   background: url('../../assets/QQ图片20200914160810.png');
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 800px !important;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}

</style>