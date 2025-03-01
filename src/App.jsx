import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Cart from './views/Cart';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import ProtetedRoute from './components/ProtetedRoute';
function App() {
  return (
    <div>
      <h1>ECOMMERCE</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/profile"
          element={
            <ProtetedRoute>
              <Profile />
            </ProtetedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
