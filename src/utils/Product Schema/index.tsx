import * as yup from "yup";

export const ProductSchema = yup.object().shape({
  snu: yup.string().required("Codes can be either strings or numbers"),
  category: yup.string().required("Choose an option from the list"),
  name: yup.string().required("Product must have a name"),
  manufacturer: yup.string().required("Manufacturer is a required field."),
  price: yup.number().required(),
});
