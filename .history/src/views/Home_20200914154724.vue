<template>
 <div>
   

 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'

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