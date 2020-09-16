<template>
 <div>
     <!-- 国内机票 -->
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import api from '../../http/api'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
});
onMounted(() => {
  api.getsale().then((res：Res) => {

  }).catch((err:R) => {
    console.log(err)
  })
})


return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>