import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useProducts } from "../../providers/ProductsProvider";
import { IProduct } from "../../interfaces";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { CardContent, FormContainer, CardActions } from "../Form/styles";
import { useState } from "react";
import { ProductSchema } from "../../utils/Product Schema";
import SaveIcon from "@mui/icons-material/Save";

export const EditForm = (oldProduct: IProduct) => {
  const { updateProduct } = useProducts();
  const [category, setCategory] = useState("");
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const updateSchema = ProductSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({ resolver: yupResolver(updateSchema) });

  function onUpdate(updatedProduct: IProduct) {
    updatedProduct.id = oldProduct.id;
    updateProduct(updatedProduct);
  }
  return (
    <FormContainer>
      <Box component="form" onSubmit={handleSubmit(onUpdate)}>
        <CardContent sx={{ display: "flex", gap: "20px" }}>
          <TextField
            fullWidth
            {...register("name")}
            error={!!errors.name}
            defaultValue={oldProduct.name}
            label="Name"
            helperText={errors.name?.message}
            size="small"
          />
          <TextField
            fullWidth
            defaultValue={oldProduct.snu}
            {...register("snu")}
            error={!!errors.snu}
            label="Product Code"
            helperText={errors.snu?.message}
            size="small"
          />
          <FormControl fullWidth error={!!errors.category} size="small">
            <InputLabel>Category</InputLabel>
            <Select
              {...register("category")}
              onChange={handleCategoryChange}
              value={category}
              defaultValue={oldProduct.category}
              label="Category"
            >
              {categories.map((category, index) => {
                return (
                  <MenuItem value={category} key={index}>
                    {category}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>{errors.category?.message}</FormHelperText>
          </FormControl>
          <TextField
            fullWidth
            {...register("manufacturer")}
            error={!!errors.manufacturer}
            defaultValue={oldProduct.manufacturer}
            label="Manufacturer"
            helperText={errors.manufacturer?.message}
            size="small"
          />

          <TextField
            {...register("price")}
            fullWidth
            defaultValue={oldProduct.price}
            type="number"
            error={!!errors.price}
            label="Price"
            helperText={errors.price?.message}
            size="small"
          />
        </CardContent>
        <CardActions>
          <Button startIcon={<SaveIcon />} type="submit">
            {" "}
            SAVE{" "}
          </Button>
        </CardActions>
      </Box>
    </FormContainer>
  );
};
