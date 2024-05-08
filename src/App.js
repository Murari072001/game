import { Outlet } from 'react-router-dom';
import './App.css';
import Registration from './features/Registration';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
