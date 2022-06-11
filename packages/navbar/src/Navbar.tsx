import { useState } from "react";
import * as singleSpa from "single-spa";

//@ts-ignore
import { Header } from "@james/styleguide";

export function Navbar() {
  const [_, setValue] = useState<number>(0);

  function handleChangePage(newValue: number) {
    setValue(newValue);

    switch (newValue) {
      case 0:
        singleSpa.navigateToUrl("/home");
        break;
      case 1:
        singleSpa.navigateToUrl("/products");
      default:
        break;
    }
  }
  return (
    <Header>
      <nav>
        <button type="button" onClick={() => handleChangePage(0)}>
          Home
        </button>
        <button type="button" onClick={() => handleChangePage(1)}>
          Produtos
        </button>
      </nav>
    </Header>
  );
}
