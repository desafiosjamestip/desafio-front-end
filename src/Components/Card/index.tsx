import { useForms } from "../../Providers/Forms";
import { useState } from "react";
import EditProduct from "../EditProduct";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Div, Section } from "./style";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Card() {
  const { removeProduct, name, value, provider, code, category, id, data } =
    useForms();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Section>
        {data.map(({ id, name, value, provider, code, category }, index) => {
          return (
            <Div>
              <h3>Nome:{name}</h3>
              <p>Valor: {value}</p>
              <p> Provedor: {provider}</p>
              <p> Código: {code}</p>
              <p> Categoria: {category}</p>

              <Button onClick={() => removeProduct(id)}>REMOVER</Button>

              <Button onClick={handleOpen}>Editar</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <EditProduct />
                </Box>
              </Modal>
            </Div>
          );
        })}
      </Section>
    </>
  );
}
export default Card;
