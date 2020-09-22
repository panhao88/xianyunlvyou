import * as axios from "axios";

declare module "axios" {
  interface AxiosResponse<T> {
    "statusCode": bunber,
    "error": "Bad Request",
    "message" ""
  }
}
