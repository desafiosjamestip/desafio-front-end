import Form from "../../Components/Form";
import Header from "../../Components/Header";
import { Div } from "../../Pages/Display/style";
import cadastro from "../../Assets/cadastro.png";
function Forms() {
  return (
    <>
      <Header />
      <Div>
        <Form />
        <img src={cadastro} width="50%" height="40%" />
      </Div>
    </>
  );
}
export default Forms;
