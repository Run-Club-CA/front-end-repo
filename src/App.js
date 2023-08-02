
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard.jsx';
import EventsPage from './pages/EventsPage.jsx';
import { AuthProvider } from './contexts/AuthContext';
import ProfilePage from './pages/ProfilePage';




function App() {
  

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='events' element={<EventsPage />} />
            <Route path='profile' element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
    
  );
}

export default App;
