import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'O campo nome do produto deve ter pelo menos 2 caracteres.')
    .required('O campo nome do produto é obrigatório.'),
  code: yup
    .string()
    .required('O campo código do produto é obrigatório.'),
  category: yup
    .string()
    .required('O campo categoria do produto é obrigatório.'),
  provider: yup
    .string()
    .min(2, 'O campo nome do fornecedor deve ter pelo menos 2 caracteres.')
    .required(),
  value: yup
    .number()
    .required('O campo valor é obrigatório.')
    .positive('O campo valor deve conter um valor positivo.'),
})
