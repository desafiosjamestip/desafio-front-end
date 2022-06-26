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
import { CardContent, FormContainer, CardActions } from "./styles";
import { v4 } from "uuid";
import { useState } from "react";
import { ProductSchema } from "../../utils/Product Schema";

export const Form = () => {
  const { registerProduct } = useProducts();
  const [category, setCategory] = useState("");
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const registerSchema = ProductSchema;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>({ resolver: yupResolver(registerSchema) });

  function onRegister(product: IProduct) {
    product.id = v4();
    registerProduct(product);
    reset();
  }
  return (
    <FormContainer>
      <Box component="form" onSubmit={handleSubmit(onRegister)}>
        <CardContent sx={{ display: "flex", gap: "20px" }}>
          <TextField
            fullWidth
            {...register("snu")}
            error={Boolean(errors.snu)}
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
              defaultValue=""
              label="Age"
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
            {...register("name")}
            error={Boolean(errors.name)}
            label="Name"
            helperText={errors.name?.message}
            size="small"
          />
          <TextField
            fullWidth
            {...register("manufacturer")}
            error={Boolean(errors.manufacturer)}
            label="Manufacturer"
            helperText={errors.manufacturer?.message}
            size="small"
          />

          <TextField
            {...register("price")}
            fullWidth
            type="number"
            error={!!errors.price}
            label="Price"
            helperText={errors.price?.message}
            size="small"
          />
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" color="primary">
            {" "}
            Submit
          </Button>
        </CardActions>
      </Box>
    </FormContainer>
  );
};
