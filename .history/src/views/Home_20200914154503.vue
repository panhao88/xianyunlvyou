<template>
 <div>
   <boxHeader></boxHeader>
   <boxFooter></boxFooter>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import boxHeader from '../components/boxHeader/boxHeader.vue'
import 
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
     boxHeader,
     boxFooter
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