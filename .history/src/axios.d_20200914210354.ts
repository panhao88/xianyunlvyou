import * as axios from "axios";

declare module "axios" {
  interface AxiosResponse<T> {
    "statusCode": number,
    "error": string,
    "message" :string
  }
}
