import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ManageProducts from './Component/Dashboard/ManageProduct';
import Dashboard from './Component/Dashboard/Dashboard';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Loading from './Component/Loading/Loading';
import Navbar from './Component/Navbar/Navbar';
import Product from './Component/Product/Product';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import AddProduct from './Component/Dashboard/AddProduct';
import ProductDetails from './Component/Product/ProductDetails';
import Orders from './Component/Dashboard/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Component/Dashboard/Payment';
import Reviews from './Component/Review/Reviews';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Component/Firebase/firebase.init';
import AllUsers from './Component/Dashboard/AllUsers';

function App() {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)
  if (loading) {
    return <Loading />
  }

  return (
    <div className="App">
      <Navbar />
      <div className="p-7 lg:p-0">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/review' element={<Reviews />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<RequireAuth>
            <ProductDetails />
          </RequireAuth>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            {
              user &&
              <>
                <Route index element={<Orders />} />
                <Route path='products-add' element={<AddProduct />} />
                <Route path='orders' element={<Orders />} />
                <Route path='payment' element={<Payment />} />
                <Route path='products-manage' element={<ManageProducts />} />
                <Route path='all-users' element={<AllUsers />} />
              </>
            }
          </Route>
        </Routes>
      </div>
      <ToastContainer draggable={true} />
      <Footer />
    </div>
  );
}

export default App;
