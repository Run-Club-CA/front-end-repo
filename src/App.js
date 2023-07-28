
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashBoard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
