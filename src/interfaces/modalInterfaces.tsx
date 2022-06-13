import { Dispatch, SetStateAction } from "react";
import { IProductList } from "./providersInterface";

export interface IModalInterface {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setIsDeleted?: Dispatch<SetStateAction<string>>;
  edit?: any;
  del?: any;
  info?: IProductList;
}
