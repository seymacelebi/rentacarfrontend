import { ResponseModel } from "./responseModel";

export interface ListRespponseModel<T> extends ResponseModel{
  data:T[];
}