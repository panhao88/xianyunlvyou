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
          <div style="margin-top:30px">证件类型</div>
          <div style="margin-top:30px" class="d-f">
            <a-select
              v-model:value="value1"
              style="width: 120px"
              @focus="focus"
              ref="select"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
            </a-select>
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
          <div style="margin-top:30px">
            <a-button type="primary">添加乘机人</a-button>
          </div>
          <div class="box3" style="margin-top:30px"></div>
          <div style="margin-top:30px">保险</div>
          <div>
            <div><a-checkbox @change="onChange">航空意外保险：￥30/</a-checkbox></div>
            <div><a-checkbox @change="onChange">Checkbox</a-checkbox></div>
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
.box3 {
  border-top: 1px black dashed;
}
</style>