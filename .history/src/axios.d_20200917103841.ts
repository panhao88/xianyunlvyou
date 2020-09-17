import * as axios from "axios";
 //声明文件
declare module "axios" {
  interface AxiosResponse<T> {
    statusCode: number,
    error: string,
    message:string,
    data:T
    user: T;
  }
}
