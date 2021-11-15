import { ModalUp } from "./styles";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useProducts } from "../../providers/Products";
import { UpdateProductsData } from "../../types/UpdateProductsData";
import { FiX } from "react-icons/fi";

/*
Função que retorna um modal com formulário que aparece na page StoreBD para atualizar os dados dos produtos.

OBS: mesmo utilizando o método PACTH na requisição de Update, infelizmente não consegui retornar os dados
atualizados de forma satifatória. Precisei deixar todos os campos como preenchimento obriatório (mesmo sendo 
  PATCH), pois os dados não preenchidos estavam voltando em branco. 
Tentei resolver isso com useEffect, mas sem sucesso... 
*/

export const ModalUpdate = () => {
  const { updateProducts, setOpenModal, codeProduct } = useProducts();

  const schema = yup.object().shape({
    name: yup.string().required("Confirme o nome ou altere"),
    provider: yup.string().required("Confirme o nome ou altere"),
    price: yup.number().required("Confirme o valor ou altere"),
    category: yup.string().required("Confirme o nome ou altere"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /*
  onSubmitFunction - envia as informações de atualização dos produtos para o provider Products
  */
  const onSubmitFunction = (data: UpdateProductsData) => {
    updateProducts(data, codeProduct);
    setOpenModal(false);
    reset();
  };

  /*
  CloseModal - fecha o modal de atualização, caso não queira fazer nenhuma atialização.
  */
  const CloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <ModalUp>
        <FiX onClick={CloseModal} />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Atualizar dados</h2>
          <Input
            type="text"
            placeholder="Nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            type="text"
            placeholder="Categoria"
            register={register}
            name="category"
            error={errors.category?.message}
          />
          <Input
            type="number"
            placeholder="Preço"
            register={register}
            name="price"
            error={errors.price?.message}
          />
          <Input
            type="text"
            placeholder="Fornecedor"
            register={register}
            name="provider"
            error={errors.provider?.message}
          />
          <button type="submit">Salvar</button>
        </form>
      </ModalUp>
    </>
  );
};
