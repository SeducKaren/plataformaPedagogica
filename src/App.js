import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <Outlet/>
      <Footer className="footer" />
    </div>
  );
}

export default App;