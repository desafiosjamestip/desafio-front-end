import { MdDelete, MdEdit, MdCheckCircleOutline } from 'react-icons/md';
import { IProduct } from '../../../interfaces/Product.interfaces';
import { useState } from 'react';
import { useProduct } from '../../../hooks/UserProvider';
import { InputEdit } from './Table.styles';

interface ItemTableProps {
  product: IProduct;
  handleSelectOpenActive: (open: boolean) => void;
}

const ItemTable = ({ product, handleSelectOpenActive }: ItemTableProps) => {
  const [data, setData] = useState<IProduct>({
    id: product.id,
  } as IProduct);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const { removeProduct, editProduct } = useProduct();
  handleSelectOpenActive(open);

  function handleRemoveProduct(productId: string) {
    removeProduct(productId);
  }

  function handleEditProduct() {
    setEdit(true);
    setOpen(false);
  }

  function handleDataSend(product: IProduct) {
    console.log(data);
    editProduct(product);
    setEdit(false);
  }

  function handleCheckBox() {
    setOpen(open ? !open : true);
    setEdit(false);
  }

  return (
    <>
      <tr data-testid="product" key={product.id}>
        <td>
          <input type="checkbox" onClick={() => handleCheckBox()} />
        </td>
        {!edit ? (
          <>
            <td>{product.code}</td>

            <td>{product.name}</td>
            <td>{product.supplierName}</td>

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
              {' '}
              <InputEdit
                placeholder={product.supplierName}
                onChange={(e) =>
                  setData({ ...data, supplierName: e.target.value })
                }
              />{' '}
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
                onClick={() => handleRemoveProduct(String(product.id))}
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
      </tr>
    </>
  );
};
export { ItemTable };
