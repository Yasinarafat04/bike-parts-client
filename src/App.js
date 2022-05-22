import { Route, Routes } from 'react-router-dom';
import './App.css';
import ManageProducts from './Component/Dashboard/ManageProduct';
import Dashboard from './Component/Dashboard/Dashboard';
import Products2 from './Component/Dashboard/Products';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Loading from './Component/Loading/Loading';
import Navbar from './Component/Navbar/Navbar';
import Product from './Component/Product/Product';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import AddProduct from './Component/Dashboard/AddProduct';
import ProductDetails from './Component/Product/ProductDetails';

function App() {
  return (
    <div className="App  lg:p-0">
      <Navbar />
      <div className="p-7">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='products' element={<Products2 />} />
            <Route path='products-add' element={<AddProduct />} />
            <Route path='products-manage' element={<ManageProducts />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
