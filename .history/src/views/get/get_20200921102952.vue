<template>
  <div>
    <!-- 旅游gongl -->
    <div class="box1">
      <div class="box2">
        <div style="width:1050px;">
          <div>旅游攻略 / 攻略详情</div>
          <div v-for="(item,index) in list" :key="index">
            <div class="f-s-2 f-c-hei">{{item.title}}</div>
            <div class="bor m-t-2"></div>
            <div class="d-f j-c-b j-f-e m-t-2">
              <div class="f-c-hei">攻略:{{didi}}</div>
              <div class="f-c-hei">阅读:{{item.watch}}</div>
            </div>
            <div v-html="item.content" class="f-c-hei content"></div>
            <div class="d-f j-c p-2 f-c-hei">
              <span>
                <EditOutlined style="fontSize:30px" />评论(0)
              </span>
              <span>
                <DingtalkOutlined style="fontSize:30px" />分享
              </span>
            </div>
            <div class="f-c-hei">评论:</div>
            <div>
              <a-input size="large" placeholder="large size" />
              <div class="d-f j-f-e m-t-2">
                <a-button type="primary">提交</a-button>
              </div>
              <div>
                <a-upload
                  name="avatar"
                  list-type="picture-card"
                  class="avatar-uploader"
                  :show-upload-list="false"
                  :before-upload="beforeUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                  <div v-else>
                    <!-- todo -->
                    <loading-outlined v-if="loading" />
                    <plus-outlined v-else />
                    <div class="ant-upload-text">Upload</div>
                  </div>
                </a-upload>
              </div>
              <div class="boeder1 d-f j-c f-c-hei">
                <div v-for="(item,index) in pinglun" :key="index">
                  <div>
                    <span><img :src="`http://157.122.54.189:9095${item.account.defaultAvatar}`" style="width20px;hei" alt=""></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="width:300px;color:black">
          <div>
            <div>相关攻略</div>
            <div v-for="(item,index) in jiade" :key="index">
              <div class="b-r m-t-1 m-b-1"></div>
              <div class="d-f j-c-b">
                <div style="width:80px;height:80px">
                  <div v-for="(item1,index1) in item.images.splice(0,1)" :key="index1">
                    <img :src="item1" alt style="width:80px;height:80px" />
                  </div>
                </div>
                <div style="width:200px;height:80px" class="d-f f-d-c j-c-b m-t-1">
                  <div style="font-size:12px">{{item.title}}</div>
                  <div>{{item.updated_at}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  onMounted
} from "vue";
import { useRouter, useRoute } from "vue-router";
import api from "@/http/api";
interface Totgh {
  data?: T;
}
interface T {
  title?: string;
  id?: number;
  summary?: string;
  updated_at?: string;
}
interface wocao {
  data?: T;
}
interface Data {
  id: number;
  list: Totgh[];
  didi: string;
  gege: string;
  posts: wocao[];
  jiade: wocao[];
  sort:string
  limit:number
  start:number
  pinglun:[]
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();
    const route = useRoute();
    let data: Data = reactive<Data>({
      id: 0,
      list: [],
      didi: "",
      posts: [],
      jiade: [],
      gege: "",
      sort:'正序',
      limit:5,
      start:1,
      pinglun:[]
    });

    onMounted(() => {
      data.id = route.query.id! as any
      // console.log(data.id ,"data.id");
      api
        .getgetposts({ id: data.id })
        .then((res: any) => {
          data.list = res.data;
          data.list.map((item: any) => {
            const a = item.updated_at;
            const date = new Date(a);
            const Y = date.getFullYear();
            const M = date.getMonth();
            const D = date.getDate();
            const h = date.getHours();
            const m = date.getMinutes();
            const time = `${Y}-${M}-${D} ${h}:${m}`;
            data.didi = time;
             console.log(data.didi);
          });
          // console.log(data.list,111);
          console.log(data.list, "文章详情");
        })
        .catch((err: any) => {
          console.log(err);
        });
      api
        .getposts()
        .then((res: any) => {
          data.posts = res.data.splice(0, 4);
          const a = data.posts.filter((item, index) => {
            return index > 0 && index < data.posts.length - 1;
          });
          let arr2 = [data.posts[data.posts.length - 1], ...a, data.posts[0]];
          data.jiade = arr2;
          data.jiade.map((item: any) => {
            const a = item.updated_at;
            const date = new Date(a);
            const Y = date.getFullYear();
            const M = date.getMonth();
            const D = date.getDate();
            const h = date.getHours();
            const m = date.getMinutes();
            const time = `${Y}-${M}-${D} ${h}:${m}`;
            item.updated_at = time;
            //  console.log(data.gege);
          });
          console.log(data.jiade, 333);
          // console.log(res, "文章列表");
        })
        .catch(err => {
          console.log(err);
        });
        api.getcomments({post: data.id,_limit: data.limit,_start: data.start}).then((res:any)=>{
          data.pinglun = res.data;
          data.pinglun.map((item: any) => {
            const a = item.updated_at;
            const date = new Date(a);
            const Y = date.getFullYear();
            const M = date.getMonth();
            const D = date.getDate();
            const h = date.getHours();
            const m = date.getMinutes();
            const time = `${Y}-${M}-${D} ${h}:${m}`;
            item.updated_at = time;
          });
          console.log(res,"文章评论")
        }).catch((err) => {
          console.log(err)
        })
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
.box1 {
  width: 100vw;
  display: flex;
  background: #fff;
  flex-direction: column;
  align-items: center;
}
.box2 {
  width: 78vw;
  display: flex;
  justify-content: space-between;
}
.bor {
  border: 0.1px solid gray;
}
.boeder1 {
  border: 1px dashed gray;
}
.content/deep/img{
  width:1050px;
  height:500px;
}
.content/deep/p:nth-of-type(5) img{
  width:40px;
  height:40px;
}
</style>