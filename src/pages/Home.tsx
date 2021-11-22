import { useState } from 'react'
import { Dashbord } from '../components/Dashbord'
import { Header } from '../components/Header'
import Modal from 'react-modal'
import { IProduct, useProduct, withProductProvider } from '../contexts/ProductContext'
import FormProduct from '../components/FormProduct'
import { v4 as uuidv4 } from 'uuid';
Modal.setAppElement('#root')
const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { storeProduct } = useProduct()
  function handleOpenModal() {
    setIsOpenModal(true);
  }
  function handleCloseModal() {
    setIsOpenModal(false)
  }
  function handleCreate(product: IProduct) {
    storeProduct({
      uuid: uuidv4(),
      ...product
    })
    handleCloseModal()

  }
  return (
    <>
      <Header onOpenNewProduct={handleOpenModal} />
      <Dashbord />
      {isOpenModal && <FormProduct isOpen={isOpenModal} onRequestClose={handleCloseModal} title="New product" buttonText="Register" onSubmit={handleCreate} />}
    </>
  )
}

export default Home;