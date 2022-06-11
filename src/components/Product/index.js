import { CustomDialog, CustomLi, ModalDelete } from "./style"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { useState } from "react"
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import Form from "../Form"
import { toast } from "react-toastify"
import { useProducts } from "../../providers/ProductsProvider"
import Button from "../Button"

const Product = ({product}) =>{
    const {productName, productCategory, productCode, productValue, providerName} = product 
    const [openEdit ,setOpenEdit] = useState(false) //state para abrir modal de edição
    const [openDelete, setOpenDelete] = useState(false) //state para abrir modal de deleção
    const {editProduct, deleteProduct} = useProducts() //provider com as funções de editar e deletar

    const closeModal = () =>{
        setOpenEdit(false)              //fechar o modal de edição
    }

    const closeModalDelete = () =>{
        setOpenDelete(false)            //fechar o modal de deleção
    }

    const onSubmit = (data, e) =>{      //função para editar um produto
        editProduct(product,data)       
        toast.success("Produto Editado")
        closeModal()
    }

    const remove = () =>{               //função para remover um produto
        deleteProduct(product)
        toast.success("Produto Removido")
        closeModalDelete()
    }

    return(
        <>  {/* modal de editar produto */}
            <CustomDialog open={openEdit} onClose={closeModal}>     
                <DialogTitle>Editar Produto</DialogTitle>
                <DialogContent>
                    <Form textButton={"Editar"} onSubmit={onSubmit} product={product}/>
                </DialogContent>
            </CustomDialog>

            {/* modal de deletar produto */}
            <CustomDialog open={openDelete} onClose={closeModalDelete}>
                <DialogContent>
                    <ModalDelete>
                        <DialogContentText>Excluir Produto?</DialogContentText>
                        <DialogContentText>{productName}</DialogContentText>
                        <Button onClick={remove}>Excluir</Button>
                    </ModalDelete>
                </DialogContent>
            </CustomDialog>

            {/* card de produto */}
            <CustomLi>
                <p>{productName}</p>
                <p>{productCode}</p>
                <p>{productCategory}</p>
                <p>R$ {Number (productValue).toFixed(2)}</p>
                <p>{providerName}</p>
                <div>
                    <FiEdit onClick={()=> setOpenEdit(true)}/>
                    <FiTrash2 onClick = {()=> setOpenDelete(true)}/>
                </div>
            </CustomLi>
        </>
    )
}

export default Product