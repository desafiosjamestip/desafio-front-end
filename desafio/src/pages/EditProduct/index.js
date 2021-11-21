import Alert from '../../components/Alert'
import Form from '../../components/Form'

import { Wrapper } from './styles'

export default function EditProduct() {
  return (
    <Wrapper>
      <Form
        title="Editar produto"
        page="edit"
      />

      <Alert display={false} success />
    </Wrapper>
  )
}
