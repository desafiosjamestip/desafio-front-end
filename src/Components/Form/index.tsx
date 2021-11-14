import { useForms } from "../../Providers/Forms";
import Button from "@mui/material/Button";
import { Input, Div } from "./style";
import Card from "../Card";

function Form() {
  const {
    data,
    setCategory,
    setCode,
    setName,
    setProvider,
    setValue,
    name,
    value,
    category,
    code,
    handleSubmit,
    provider,
  } = useForms();

  return (
    <>
      <Div>
        <Input
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          type="number"
          placeholder="Código"
          onChange={(e) => setCode(Number(e.target.value))}
          value={code}
        />
        <Input
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <Input
          placeholder="Provedor"
          onChange={(e) => setProvider(e.target.value)}
          value={provider}
        />
        <Input
          placeholder="Valor"
          onChange={(e) => setValue(Number(e.target.value))}
          value={value}
        />

        <Button size="large" variant="outlined" onClick={handleSubmit}>
          {" "}
          Adicionar
        </Button>
      </Div>

      {/* {data.map(({ id, name, value, provider, code, category }, index) => {
        return <Card />;
      })} */}
    </>
  );
}

export default Form;
