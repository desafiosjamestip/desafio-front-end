import {
  ContainerCard,
  CardHeader,
  CardBody,
  TextsDiv,
  Info,
  TextH,
  TextParagraph,
  ProductPriceDiv,
  Footer,
  ButtonFooter,
} from "./style";
import { RiPencilFill } from "react-icons/ri";
import { BsFillTrashFill } from "react-icons/bs";

interface ICardProductPros {
  productName: string;
  productCategory: string;
  productProvider: string;
  productCode: string;
  productPrice: number;
  setProduct: any;
  onOpenModalEdit: () => void;
  onOpenModalDelete: () => void;
}
export const CardProduct = ({
  productName,
  productCategory,
  productProvider,
  productCode,
  productPrice,
  setProduct,
  onOpenModalEdit,
  onOpenModalDelete,
}: ICardProductPros) => {
  const splitPrice = productPrice.toFixed(2).split(".");
  const priceInteger = splitPrice[0];
  const priceDecimal = splitPrice[1];

  const handleClickModalEdit = () => {
    setProduct({
      productName,
      productCategory,
      productProvider,
      productCode,
      productPrice,
    });
    onOpenModalEdit();
  };

  const handleClickModalDelete = () => {
    setProduct({
      productName,
      productCategory,
      productProvider,
      productCode,
      productPrice,
    });
    onOpenModalDelete();
  };
  return (
    <ContainerCard>
      <CardHeader>{productName}</CardHeader>
      <CardBody>
        <TextsDiv>
          <Info>
            <TextH>Categoria: </TextH>
            <TextParagraph>{productCategory}</TextParagraph>

            <TextH>Fornecedor:</TextH>
            <TextParagraph>{productProvider}</TextParagraph>

            <TextH>Código do produto: </TextH>
            <TextParagraph>{productCode}</TextParagraph>
          </Info>
        </TextsDiv>

        <ProductPriceDiv>
          <label>R$</label>
          {priceInteger}
          <label>{`,${priceDecimal}`}</label>
        </ProductPriceDiv>
      </CardBody>
      <Footer>
        <div>
          <ButtonFooter onClick={handleClickModalEdit}>
            <RiPencilFill />
          </ButtonFooter>
        </div>
        <div>
          <ButtonFooter onClick={handleClickModalDelete}>
            <BsFillTrashFill />
          </ButtonFooter>
        </div>
      </Footer>
    </ContainerCard>
  );
};
