import {
  Box,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { EditRounded, DeleteForever } from "@mui/icons-material";
import { IProduct } from "../../interfaces";
import { useContext, useState } from "react";
import { EditForm } from "../EditForm";
import { ProductsContext } from "../../providers/ProductsProvider";

export const ProductCard = (product: IProduct) => {
  const [open, setOpen] = useState(false);
  const { deleteProduct } = useContext(ProductsContext);
  const productProps = {
    snu: product.snu,
    category: product.category,
    name: product.name,
    manufacturer: product.manufacturer,
    price: product.price,
    id: product.id,
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box component="li">
      <Card>
        <CardContent sx={{ width: "250px", height: "200px" }}>
          <Typography variant="body1">
            <strong>Name: </strong>
            {product.name}
          </Typography>
          <Typography variant="body1">
            <strong>Manufacturer: </strong>
            {product.manufacturer}
          </Typography>
          <Typography variant="body1">
            <strong>Category: </strong>
            {product.category}
          </Typography>
          <Typography variant="body1">
            <strong>Price: </strong>
            {product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1">
            <strong>SNU: </strong>
            {product.snu}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="edit product" onClick={handleClickOpen}>
            <EditRounded />
          </IconButton>
          <IconButton
            aria-label="delete product"
            onClick={() => deleteProduct(product.id)}
          >
            <DeleteForever />
          </IconButton>
        </CardActions>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            Editing <strong>{product.name}</strong>
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DialogContentText>Update any field you want.</DialogContentText>
            <EditForm {...productProps} />
          </DialogContent>
        </Dialog>
      </Card>
    </Box>
  );
};
