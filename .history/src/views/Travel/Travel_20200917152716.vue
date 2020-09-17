<template>
 <div>
     <!-- 旅游 -->
     
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {Ddta} from '@/types'
import api from '@/http/api'
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
onMounted(() => {
    api.getcities().then((res:Ddta)=>{

    }).catch((err:any) => {
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