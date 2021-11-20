import Alert from '../../components/Alert'
import Form from '../../components/Form'

export default function Home() {
  return (
    <>
      <Form
        title="Informações do produto"
        page="home"
      />

      <Alert display={false} success />
    </>
  )
}
