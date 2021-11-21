import Alert from '../../components/Alert'
import Form from '../../components/Form'

import { Wrapper } from './styles'

export default function Home() {
  return (
    <Wrapper>
      <Form
        title="Informações do produto"
        page="home"
      />

      <Alert display={false} success />
    </Wrapper>
  )
}
