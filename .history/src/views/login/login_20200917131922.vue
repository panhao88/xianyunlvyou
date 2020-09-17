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
        <a-form ref="ruleForm" :model="form" :rules="rules" :wrapper-col="wrapperCol">
          <a-form-item ref="username" name="username">
            <a-input v-model:value="form.username" placeholder="请输入用户名手机" />
          </a-form-item>
          <a-form-item ref="password" name="password">
            <a-input v-model:value="form.password" placeholder="请输入密码" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary">登录</a-button>
          </a-form-item>
        </a-form>
      </div>
      <div v-if="didi === 1">
        <a-form ref="ruleForm1" :model="form1" :rules="rules1">
          <a-form-item name="username">
            <a-input v-model:value="form1.username" placeholder="请输入用户名手机" />
          </a-form-item>
          <a-form-item name="captcha">
            <a-input v-model:value="form1.captcha" placeholder="验证码" style="width:380px" />
            <a-button @click="yanzhengma">发送验证码</a-button>
          </a-form-item>
          <a-form-item name="nickname">
            <a-input v-model:value="form1.nickname" placeholder="请输入昵称" />
          </a-form-item>
          <a-form-item name="password">
            <a-input v-model:value="form1.password" placeholder="请输入密码" />
          </a-form-item>
          <a-form-item name="confirm">
            <a-input v-model:value="form1.confirm" placeholder="确认密码" />
          </a-form-item>
          <div>
            <a-button type="primary" @click="zhuce">注册</a-button>
          </div>
        </a-form>
      </div>
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
  ref,
} from "vue";
import { message } from "ant-design-vue";
import api from "@/http/api";
import { Form } from "ant-design-vue/types/form/form.d";
import { Code, Resyanzheng, Des ,haha} from "@/types";
//轮播图请求验证
interface Res {
  data: dataitem[];
  total?: number;
}
//轮播图验证
interface dataitem {
  url: string;
  desc: string;
}
//登录FormItem验证
interface FormItem {
  password: string;
  username: string;
}
// //注册FormItem验证
interface Form1Item {
  username: string;
  captcha: string;
  nickname: string;
  password: string;
  confirm: string;
}
////登录Rules验证
interface Rules {
  username: RulesItem[];
  password: RulesItem[];
}
// ////注册Rules验证
interface Rules1Item {
  username: RulesItem[];
  captcha: RulesItem[];
  nickname: RulesItem[];
  password: RulesItem[];
  confirm: RulesItem[];
}
//登录注册
interface RulesItem {
  message?: string;
  trigger?: string;
  required?: boolean;
}
interface Data {
  dataitem: dataitem[];
  didi: number;
  form: FormItem; //验证登录表格
  rules: Rules; //验证登录表单
  form1: Form1Item; //验证注册表格
  rules1: Rules1Item; //验证注册表单
  Code: Code;//验证码
  haha:haha
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const ruleForm1 = ref<Form>();
    let data: Data = reactive<Data>({
      dataitem: [],
      didi: 0,
      Code: {},
      haha:{},
      form1: {
        username: "",
        nickname: "",
        captcha: "",
        password: "",
        confirm: "",
      },
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
      rules1: {
        username: [
          {
            required: true,
            message: "请输入用户名或者电话",
            trigger: "blur",
          },
        ],
        nickname: [
          {
            required: true,
            message: "昵称",
            trigger: "blur",
          },
        ],
        captcha: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
        confirm: [
          {
            required: true,
            message: "请确认密码",
            trigger: "blur",
          },
        ],
      },
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
    //验证码
    const yanzhengma = (): void => {
      api
        .getcaptchas({
          tel: data.form1.username,
        })
        .then((res: Resyanzheng) => {
          data.Code = res! as object;
          if (data.Code) {
            message.success(`手机验证码：${data.Code.code}`);
          }
          // !表示一定有这个值而且一定是string类型
          //as对象强制转化
          data.form1.captcha = data.Code.code! as string;
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    //注册
    const zhuce = (): void => {
      ruleForm1
        .value!.validate()
        .then(() => {
          if (data.form1.password !== data.form1.confirm) {
            message.error("密码不一样");
          } else {
            api
              .getzhuce({
                username: data.form1.username,
                nickname: data.form1.nickname,
                captcha: data.form1.captcha,
                password: data.form1.password,
              })
              .then((res: Des) => {
                data.haha = res! ax
                console.log(res);
                message.success("注册成功");
                // localStorage.setItem("user"JSON.stringify(data.Des.user))
                //   router.push('/')
              })
              .catch((err: any) => {
                console.log(err);
              });
          }
        })
        .catch((err: any) => {
        });
    };
    return {
      ...toRefs(data),
      godenglu,
      gozhuce,
      zhuce,
      ruleForm1,
      yanzhengma,
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