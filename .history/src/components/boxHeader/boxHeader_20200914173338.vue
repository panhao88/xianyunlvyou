<template>
  <div class="box">
    <div class="box1">
      <div>
        <img src="../../assets/QQ图片20200914163322.png" alt />
      </div>
      <div v-for="(item,index) in shouye" :key="index" @click="dianji(item)" :class="flag ==">
        {{item.name}}
      </div>
    </div>
    <div class="box2">登录/注册</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface shouye {
  name: string;
  id: string;
}
interface Data {
  shouye: shouye[];
  flag: string;
  model: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      flag: "0",
      model: "首页",
      shouye: [
        { name: "首页", id: "0" },
        { name: "旅游攻略", id: "1" },
        { name: "酒店", id: "2" },
        { name: "国内机票", id: "3" },
      ],
    });
    let dianji = (item: shouye): void => {
      data.flag = item.id;
      data.model = item.id;
      console.log(item);
    };
    return {
      ...toRefs(data),
      dianji,
    };
  },
});
</script>

<style scoped lang='scss'>
.box {
  width: 1400px;
  display: flex;
  justify-content: space-between;
}
.box1 {
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
}
.box2 {
  font-size: 20px;
}
</style>