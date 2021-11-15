import { ContainerBD, CardProducts } from "./styles";
import { Header } from "../../components/Header";
import { useProducts } from "../../providers/Products";
import { ModalUpdate } from "../../components/ModalUpdate";
import { useEffect } from "react";
import { motion } from "framer-motion";

/*
Função que retorna os cards dos produtos cadastrados na base de dados. 

Como já informado, tive complicações com o update dos produtos, de qualquer forma, 
deixei o useEffect que aciona a função loadStore para atualizar o state que contém os produtos, 
mas não funciona como esperado...
*/

export const StoreBD = () => {
  const { store, setOpenModal, openModal, setCodeProduct, loadStore } =
    useProducts();

  /*
    openModalUpdate - enviar os dados de udate de produtos para o privider Products
    */
  const openModalUpdate = (productId: number) => {
    setCodeProduct(productId);
    setOpenModal(true);
  };

  /*
  loadStore - tenta atualizar os produtos que sofrem atualizações
  */
  useEffect(() => {
    loadStore();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        {openModal ? <ModalUpdate /> : <></>}
        <ContainerBD>
          {store &&
            store.map((item, index) => (
              <CardProducts key={index}>
                <h4 className="description">Produto</h4>
                <span>{item.name}</span>
                <h4 className="description">Categoria</h4>
                <span>{item.category}</span>
                <h4 className="description">Valor</h4>
                <span>{item.price} R$</span>
                <h4 className="description">Fornecedor</h4>
                <span>{item.provider}</span>
                <button onClick={() => openModalUpdate(item.id)}>
                  Atualizar
                </button>
              </CardProducts>
            ))}
        </ContainerBD>
      </motion.div>
    </>
  );
};
