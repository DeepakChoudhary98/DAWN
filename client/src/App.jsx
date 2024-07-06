import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login'
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { useEffect } from 'react';
import Success from './pages/Success';
import { useSelector } from 'react-redux';
import ScrollToTop from './components/ScrollToTop';

function AuthWrapper({children}) {
  const navigate = useNavigate();
  const user = useSelector(state=>state.user.currentUser);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return user ? <Home /> : children;
}

function App() {
  return (
     <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<AuthWrapper><Login/></AuthWrapper> } />
        <Route path="/register" element={<AuthWrapper><Register /></AuthWrapper>} />
        <Route path="/success" element={<Success/>}/>
      </Routes>
     </Router>
  );
}

export default App;
