import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useProducts } from "../../providers/ProductsProvider";
import { IProduct } from "../../interfaces";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { CardContent, FormContainer } from "./styles";
import { v4 } from "uuid";
import { useState } from "react";

export const Form = () => {
  const { registerProduct } = useProducts();
  const [category, setCategory] = useState("");
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const registerSchema = yup.object().shape({
    snu: yup.string().required("Codes can be either strings or numbers"),
    category: yup.string().required("Choose an option from the list"),
    name: yup.string().required("Product must have a name"),
    manufacturer: yup
      .string()
      .required("Manufacturer is a required field.")
      .min(6, "Mínimo de 6 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({ resolver: yupResolver(registerSchema) });

  function onRegister(product: IProduct) {
    product.id = v4();
    registerProduct(product);
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
          />
          <FormControl fullWidth error={Boolean(errors.category)}>
            <InputLabel>Category</InputLabel>
            <Select value={category} label="Age" onChange={handleChange}>
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
        </CardContent>
      </Box>
    </FormContainer>
  );
};
