import { Header, Logo, TitleHeader, PageBody } from "./style";
import LogoImage from "../../assets/images/logo1.svg";
import { FaBookOpen, FaBoxOpen } from "react-icons/fa";
import { CartService } from "../../components/cardService";

const ServicesPage = () => {
  const pageService = [
    { name: "Novo produto", Icon: FaBookOpen, navigate: "/registerProducts" },
    { name: "Meus produtos", Icon: FaBoxOpen, navigate: "/products" },
  ];
  return (
    <>
      <Header>
        <Logo>
          <img src={LogoImage} alt="logo" />
        </Logo>
        <TitleHeader>Painel de Serviços</TitleHeader>
      </Header>
      <PageBody>
        <section>
          {pageService.map((service) => (
            <CartService
              name={service.name}
              Icon={service.Icon}
              navigateStr={service.navigate}
            />
          ))}
        </section>
      </PageBody>
    </>
  );
};

export { ServicesPage };
