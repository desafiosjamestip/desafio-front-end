import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import { IProduct } from '../../contexts/ProductContext';
import { Input } from "../Input/index";
import { Title } from '../Title'
Modal.setAppElement('#root');

interface FormProductProps {
  title: string;
  buttonText: string;
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (product: IProduct) => void;
  defaultValue?: IProduct;
}

export default function FormProduct({ isOpen, onRequestClose, title, buttonText, onSubmit, defaultValue }: FormProductProps) {

  const [code, setCode] = useState<number>(defaultValue?.code || 0);
  const [name, setName] = useState<string>(defaultValue?.name || '');
  const [category, setCategory] = useState<string>(defaultValue?.category || '');
  const [value, setValue] = useState<number>(defaultValue?.value || 0);
  const [provider, setProvider] = useState<string>(defaultValue?.provider || '');
  const [imageUrl, setImageUrl] = useState<string>(defaultValue?.provider || '');

  async function handleCreateProduct(event: FormEvent) {
    event.preventDefault();
    onSubmit({ code, name, category, provider, value, imageUrl })
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateProduct}>
        <Title>{title}</Title>
        <span>Code product</span>
        <Input
          type="number"
          placeholder="code"
          value={code}
          onChange={event => setCode(Number(event.target.value))}
        />
        <div className="Category">
          <span>Category</span>
          <Input
            type='text'
            placeholder="Category"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
        </div>
        <TransactionTypeContainer>
          <div>
            <span>Product name</span>
            <Input
              type='text'
              placeholder="Product name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <span>Value product</span>
            <Input
              type='number'
              placeholder="Value product "
              value={value}
              onChange={event => setValue(Number(event.target.value))}
            />
          </div>
        </TransactionTypeContainer>
        <TransactionTypeContainer>
          <div>
            <span>Provider</span>
            <Input
              placeholder="Provider"
              value={provider}
              onChange={event => setProvider(event.target.value)}
            />
          </div>
          <div>
            <span>Url Imagem</span>
            <Input
              type='url'
              placeholder="Imagem"
              value={imageUrl}
              onChange={event => setImageUrl(event.target.value)}
            />
          </div>
        </TransactionTypeContainer>
        <button type="submit">{buttonText}</button>

      </Container>

    </Modal>
  )
}