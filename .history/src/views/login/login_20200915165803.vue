<template>
  <div class="box1">
    <a-carousel autoplay arrows>
      <div v-for="(item,index) in dataitem" :key="index">
        <img :src="`http://157.122.54.189:9095${item.url}`" alt class="img" />
      </div>
    </a-carousel>
    <div class="box2">
      <div
        style="display: flex;justify-content: space-between;height:60px; align-items: center; background: gray;"
      >
        <div class="denglu" :class="didi === 0 ? 'color':''" @click="godenglu(item,index)">登录</div>
        <div class="zhuce" :class="didi === 1 ? 'color':''" @click="gozhuce(item,index)">注册</div>
      </div>
      <div v-if="didi === 0">
        <!-- <div class="box3">
          <div>
            <a-input
              v-model:value="value"
              placeholder="请输入用户名"
              size="large"
              style="width: 400px"
            />
          </div>
          <div style="width: 400px">
            <a-input-password v-model:value="value" placeholder="请输入密码" size="large" />
          </div>
        </div>
        <div style="color: black;font-size:15px;text-align: right;margin-right:60px">忘记密码</div>
        <div class="box4">
          <a-button type="primary" style="width:400px;height:60px;">登录</a-button>
        </div>-->
        <a-form
          name="custom-validation"
          ref="ruleForm"
          :model="ruleForm1"
          :rules="rules"
          v-bind="layout"
          @finish="handleFinish"
          @finishFailed="handleFinishFailed"
        >
          <a-form-item required has-feedback  name="username">
            <a-input v-model:value="ruleForm1.username" type="username" placeholder="请输入用户名手机" />
          </a-form-item>
          <a-form-item required has-feedback label="Password" name="pass">
            <a-input v-model:value="ruleForm1.pass" type="password" placeholder="请输入密码" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </a-form-item>
        </a-form>
      </div>
      <!-- <div v-if="didi === 1">
        <a-form
          ref="ruleForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-item ref="username" name="username">
            <a-input v-model:value="ruleForm.username" placeholder="请输入用户名手机" />
          </a-form-item>
          <a-form-item ref="captcha" name="captcha">
            <a-input v-model:value="ruleForm.captcha" placeholder="验证码" style="width:380px" />
            <a-button>发送验证码</a-button>
          </a-form-item>
          <a-form-item ref="nickname" name="nickname">
            <a-input v-model:value="ruleForm.nickname" placeholder="请输入昵称" />
          </a-form-item>
           <a-form-item ref="password" name="password">
            <a-input v-model:value="ruleForm.password" placeholder="请输入密码" />
          </a-form-item>
           <a-form-item ref="password" name="password">
            <a-input v-model:value="ruleForm.password" placeholder="确认密码" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="注册">注册</a-button>
          </a-form-item>
        </a-form> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
import {} from "@/types";
import api from "@/http/api";
interface Res {
  data: dataitem[];
  total?: number;
}
interface dataitem {
  url: string;
  desc: string;
}
interface Data {
  dataitem: dataitem[];
  didi: number;
  ruleForm: object;
  ruleForm1:object;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      dataitem: [],
      didi: 0,
      ruleForm: {
        username: "",
        nickname:'',
        captcha:'',
        password:'',
      },
      ruleForm1:{

      }
    });
    onMounted(() => {
      // 轮播图
      api
        .getData()
        .then((res: Res) => {
          data.dataitem = res.data;
          console.log(data.dataitem, "轮播图");
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
    let godenglu = () => {
      data.didi = 0;
    };
    let gozhuce = () => {
      data.didi = 1;
    };
    return {
      ...toRefs(data),
      godenglu,
      gozhuce,
    };
  },
});
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 900px;
}

.ant-carousel ::v-deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.box1 {
  width: 100%;
  position: relative;
  height: 900px;
}
.box2 {
  width: 500px;
  height: 50%;
  background: beige;
  position: absolute;
  top: 30%;
  left: 35%;
}
.color {
  border-top: solid 2px yellow;
  color: red;
}
.denglu {
  width: 50%;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
.zhuce {
  width: 50%;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
// .box3 {
//   width: 100%;
//   height: 150px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   flex-direction: column;
// }
// .box4 {
//   width: 500px;
//   height: 60px;
//   position: absolute;
//   bottom: 50px;
//   display: flex;
//   justify-content: center;
// }
</style>