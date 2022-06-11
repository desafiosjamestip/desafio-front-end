import { useState } from 'react';
import { Cadastrar } from './components/cadastrar';
import { Produtos } from './components/produtos';
import { Button, ButtonSelected, Div, Header } from './styles/appStyle';

function App() {
  const [appArea, setAppArea] = useState(0)

  function appAreaSwitch(appArea: number) {
    switch(appArea) {
      case 0:
        return <Produtos/>
      case 1:
        return <Cadastrar/>
    }
  }

  return (
    <div className="App">
      <Header>
        <Div>
          {appArea === 0 ? (
            <ButtonSelected onClick={() => (setAppArea(0))}>Produtos</ButtonSelected>
          ) : (
            <Button onClick={() => (setAppArea(0))}>Produtos</Button>
          )}
          {appArea === 1 ? (
            <ButtonSelected onClick={() => (setAppArea(0))}>Cadastrar</ButtonSelected>
          ) : (
            <Button onClick={() => (setAppArea(1))}>Cadastrar</Button>
          )}
        </Div>
      </Header>
      <Div>
        {appAreaSwitch(appArea)}
      </Div>
    </div>
  );
}

export default App;
