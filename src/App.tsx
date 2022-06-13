import { Header, Sidebar } from './components';
import { GlobalStyles } from './styles';
import { Page, Row, Col, Main } from './styles/components';
import Router from './routes/routes';
import { UserProvider } from './hooks/UserProvider';
const App = (): JSX.Element => {
  return (
    <>
      <UserProvider>
        <GlobalStyles />
        <Page>
          <Row>
            <Sidebar />
            <Col>
              <Header />
              <Main>
                <Router />
              </Main>
            </Col>
          </Row>
        </Page>
      </UserProvider>
    </>
  );
};

export { App };
