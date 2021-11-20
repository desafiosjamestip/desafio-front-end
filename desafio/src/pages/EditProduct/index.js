import Alert from '../../components/Alert'
import Form from '../../components/Form'

export default function EditProduct() {
  return (
    <>
      <Form
        title="Editar produto"
        page="edit"
      />

      <Alert display={false} success />
    </>
  )
}
