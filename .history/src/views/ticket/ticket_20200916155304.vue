<template>
 <div>
     <!-- 国内机票 -->
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,on} from 'vue'
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
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>