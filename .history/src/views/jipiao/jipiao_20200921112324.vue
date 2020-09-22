<template>
  <div></div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext,onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
interface Data {
  chufa: string;
  daoda: string;
  day: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();
    const route = useRoute();
    let data: Data = reactive<Data>({
      chufa: "",
      daoda: "",
      day: "",
    });
    onMounted(() => {
        data.chufa = route.query.chufa! as string
        data.daoda = route.query.daoda! as string
        data.day = route.query.day! as string
         console.log(data.chufa)
      console.log(data.daoda)
      console.log(data.day)
    })
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>