
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard.jsx';
import EventsPage from './pages/EventsPage.jsx';
import { AuthProvider } from './contexts/AuthContext';
import ProfilePage from './pages/ProfilePage';
import { UserProvider } from './contexts/UserContext';
import AdminUserPage from './pages/AdminUserPage';
import UsersListPage from './pages/AdminUsersPage';




function App() {
  

  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/dashboard' element={<Dashboard />} >
              <Route path='events' element={<EventsPage />} />
              <Route path='profile' element={<ProfilePage />} />
              <Route path='admin/users' element={<UsersListPage />} />
              <Route path='admin/user' element={<AdminUserPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
