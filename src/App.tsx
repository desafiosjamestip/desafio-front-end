import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';
import MainRoutes from './routes';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000}/>
      <MainRoutes/>
    </div>
  );
}

export default App;
