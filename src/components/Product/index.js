import { CustomLi } from "./style"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material"
import Input from "../Input"
import Form from "../Form"

const Product = ({product}) =>{
    const {productName, productCategory, productCode, productValue, providerName} = product
    const [open,setOpen] = useState(false)

    const closeModal = () =>{
        setOpen(false)
    }

    return(
        <>
            <Dialog open={open} onClose={closeModal}>
                <DialogTitle>Editar Produto</DialogTitle>
                <DialogContent>
                    <Form textButton={"Editar"} type={"editar"}/>
                </DialogContent>
            </Dialog>
            <CustomLi>
                <p>{productName}</p>
                <p>{productCode}</p>
                <p>{productCategory}</p>
                <p>{productValue}</p>
                <p>{providerName}</p>
                <div>
                    <FiEdit onClick={()=> setOpen(true)}/>
                    <FiTrash2/>
                </div>
            </CustomLi>
        </>
    )
}

export default Product