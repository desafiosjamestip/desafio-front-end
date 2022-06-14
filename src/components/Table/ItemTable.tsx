import React, { useState } from 'react';
import { MdDelete, MdEdit, MdCheckCircleOutline } from 'react-icons/md';
import { Product } from '../../models/Product';
import { useProduct } from '../../context/useProduct';
import { InputEdit } from './Table.styles';

interface ItemTableProps {
  product: Product;
  handleSelectOpenActive: (open: boolean) => void;
}

const ItemTable = ({ product, handleSelectOpenActive }: ItemTableProps) => {
  const [data, setData] = useState<Product>({
    id: product.id,
  } as Product);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const { removeProduct, updateProduct } = useProduct();
  handleSelectOpenActive(open);

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  function handleEditProduct() {
    setEdit(true);
    setOpen(false);
  }

  function handleDataSend(product: Product) {
    updateProduct(product);
    setEdit(false);
    setOpen(open ? !open : true);
  }

  function handleCheckBox() {
    setOpen(open ? !open : true);
    setEdit(false);
  }

  return (
    <>
      <td>
        <input type="checkbox" onClick={() => handleCheckBox()} />
      </td>
      {!edit ? (
        <>
          <td>{product.code}</td>

          <td>{product.name}</td>
          <td>{product.provideName}</td>

          <td>
            <strong>R${product.price} </strong>
          </td>
          <td>{product.category}</td>
        </>
      ) : (
        <>
          <td>
            <InputEdit
              placeholder={String(product.code)}
              onChange={(e) =>
                setData({ ...data, code: Number(e.target.value) })
              }
            />
          </td>

          <td>
            <InputEdit
              placeholder={product.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </td>
          <td>
            <InputEdit
              placeholder={product.provideName}
              onChange={(e) =>
                setData({ ...data, provideName: e.target.value })
              }
            />
          </td>
          <td>
            <InputEdit
              placeholder={String(product.price)}
              onChange={(e) =>
                setData({ ...data, price: Number(e.target.value) })
              }
            />{' '}
          </td>
          <td>
            {' '}
            <InputEdit
              placeholder={product.category}
              onChange={(e) => setData({ ...data, category: e.target.value })}
            />
          </td>
        </>
      )}

      {open ? (
        <>
          <td>
            <button
              type="button"
              data-testid="remove-product"
              onClick={() => handleRemoveProduct(Number(product.id))}
            >
              <MdDelete size={20} />
            </button>
            <button
              type="button"
              data-testid="remove-product"
              onClick={() => handleEditProduct()}
            >
              <MdEdit size={20} />
            </button>
          </td>
        </>
      ) : (
        ''
      )}
      {edit ? (
        <>
          <td>
            <button
              type="button"
              data-testid="remove-product"
              onClick={() => handleDataSend(data)}
            >
              <MdCheckCircleOutline size={20} />
            </button>
          </td>
        </>
      ) : (
        ''
      )}
    </>
  );
};
export { ItemTable };
