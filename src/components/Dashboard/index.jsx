import { GlobalStyle } from "../../GlobalStyles";
import ModalEditProduct from "../Modal";
import TableTitle from "../Table";
import BtnAddNewProduct from "./BtnAddNewProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer />
        <BtnAddNewProduct />
      <ModalEditProduct />
      <TableTitle />
    </div>
  )
}
