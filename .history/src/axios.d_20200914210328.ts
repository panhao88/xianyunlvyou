import * as axios from "axios";

declare module "axios" {
  interface AxiosResponse<T> {
    "statusCode": 400,
    "error": "Bad Request",
    "message" ""
  }
}
