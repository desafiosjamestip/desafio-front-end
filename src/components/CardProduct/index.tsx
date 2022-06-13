export const CardProduct = ({ products, setProductsId }: any) => {
  return products.map((item: any) => {
    return (
      <>
        <div onClick={() => setProductsId(item.id)} key={item.id}>
          <h2>{item.title}</h2>
          <h3>{item.status}</h3>
        </div>
      </>
    );
  });
};
