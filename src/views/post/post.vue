<template>
  <div>
    <!-- 写游记 -->
    <div class="box1">
      <div class="box2">
        <div style="width:1050px;">
          <div class="f-c-hei f-s m-t-1">发表新攻略</div>
          <div class="m-t-1 f-c-hei">分享你的个人游记,让更多人看到哦</div>
          <div class="m-t-2">
            <a-input size="large" placeholder="large size" />
          </div>
          <div class="f-c-hei" style="height:300px;">富文本编辑器</div>
          <span>
            选择城市:
            <a-input size="large" placeholder="large size" style="width:200px" />
          </span>
          <div class="m-t-2">
            <a-button type="primary">发布</a-button>
            <span class="f-c-hei m-l-2">
              或者
              <span>保存到草稿</span>
            </span>
          </div>
        </div>
        <div style="width:300px">
          <div class="bott f-c-hei">草稿箱(0)</div>
        </div>
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
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
.box1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}
.box2 {
  width:78vw;
  display: flex;
  justify-content: space-between;
}
.bott {
  padding: 20px;
  border: 1px solid gray;
}
</style>