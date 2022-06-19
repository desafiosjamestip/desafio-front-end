import {
  PageBody,
  PageSearch,
  Title,
  ContainerTitleAndSearch,
  Input,
  ButtonSearch,
  ContainerCards,
} from "./style";
import { useToast } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { ImSearch } from "react-icons/im";
import { CardProduct } from "../../components/cardProduct";
import { useProducts } from "../../providers/productProvider";
import { ModalDeleteProduct } from "../../components/modalDeleteProduct";
import { ModalEditProduct } from "../../components/modalEditProduct";
import { useEffect, useState } from "react";
const ProductsPage = () => {
  const {
    isOpen: isModalEditOpen,
    onOpen: onModalEditOpen,
    onClose: onModalEditClose,
  } = useDisclosure();
  const {
    isOpen: isModalDeleteOpen,
    onOpen: onModalDeleteOpen,
    onClose: onModalDeleteClose,
  } = useDisclosure();

  const toast = useToast();
  const { products } = useProducts();
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const [nameToSearchProduct, setNameToSearchProduct] = useState("");
  const [productsToRender, setProductsToRender] = useState(products);

  useEffect(() => {
    setProductsToRender(products);
  }, [products]);

  const search = (nameToSearchProduct: string) => {
    const searchProducts = products.filter(
      (prod) =>
        prod.productName.toLocaleLowerCase() ===
          nameToSearchProduct.toLocaleLowerCase() ||
        prod.productCode.toLocaleLowerCase() ===
          nameToSearchProduct.toLocaleLowerCase()
    );
    if (searchProducts.length > 0) {
      setProductsToRender(searchProducts);
    } else {
      setProductsToRender(products);
      toast({
        title: `Não foi encontrado nenhum produto para "${nameToSearchProduct}".`,
        description: "Pagína recarregada",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Header />
      <ModalEditProduct
        isOpen={isModalEditOpen}
        onClose={onModalEditClose}
        product={currentProduct}
      />
      <ModalDeleteProduct
        isOpen={isModalDeleteOpen}
        onClose={onModalDeleteClose}
        productName={currentProduct && currentProduct.productName}
        productCode={currentProduct && currentProduct.productCode}
      />
      <PageBody>
        <ContainerTitleAndSearch>
          <Title>Meus Produtos</Title>
          <PageSearch>
            <Input
              id="6"
              placeholder="Pesquisar por nome/código"
              onChange={(evt) => setNameToSearchProduct(evt.target.value)}
            />
            <ButtonSearch onClick={() => search(nameToSearchProduct)}>
              <ImSearch />
            </ButtonSearch>
          </PageSearch>
        </ContainerTitleAndSearch>
        <ContainerCards>
          {productsToRender.map((product) => (
            <CardProduct
              productName={product.productName}
              productCategory={product.productCategory}
              productProvider={product.productProvider}
              productCode={product.productCode}
              productPrice={product.productPrice}
              setProduct={setCurrentProduct}
              onOpenModalEdit={onModalEditOpen}
              onOpenModalDelete={onModalDeleteOpen}
            />
          ))}
        </ContainerCards>
      </PageBody>
    </>
  );
};

export { ProductsPage };
