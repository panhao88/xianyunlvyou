<template>
  <div>
    <div class="box1">
      <div class="box2">
        <div style="width:1050px">
          <div style="font-size:25px;margin-top:30px">乘机人</div>
          <div style="font-size:18px;margin-top:30px">乘机人</div>
          <div>
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
          <div>证件类型</div>
          <div>
            <a-select
              v-model:value="value1"
              style="width: 120px"
              @focus="focus"
              ref="select"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
            </a-select>
          </div>
        </div>
        <div style="width:300px"></div>
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
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.box2 {
  width: 78vw;
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 20px;
}
</style>