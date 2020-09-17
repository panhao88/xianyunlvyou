import * as axios from "axios";
 //声明文件
declare module "axios" {
  interface AxiosResponse<T> {
    total: number;
    data: T;
    status: number;
    message: string;
    token: string;
    user: T;
  }
}
