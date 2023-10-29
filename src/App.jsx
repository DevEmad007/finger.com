import React from 'react';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import { Routes,Route,Navigate } from 'react-router-dom';
import { useThemeContext } from './hooks/themeContext/useThemeContext';
import { useAuth } from './hooks/auth/useAuth';
import SignUp from './components/SignUp/SignUp';
import Shop from './shop';
import Chat from './chat/Chat';
import Notification from './components/notification/Notification';
import BlogDetails from './components/blogDetails';
import EditProfile from './components/EditProfile';
import Admin from './shop/Admin/Admin';
import SharedLayout from './SharedLayout';
import ShopSharedLayout from './shop/ShopSharedLayout';
import Cart from './shop/components/Cart';
import CardDetails from './shop/components/CardDetails/CardDetails';
import EditProduct from './shop/Admin/Edit Product/EditProduct';
import AddProduct from './shop/Admin/AddProduct';
import DashBoard from './shop/Admin/DashBoard';
import OrderTrack from './shop/Admin/orderTracker/OrderTrack';
import Checkout from './shop/components/Checkout/Checkout';
import { ToastContainer,toast } from 'react-toastify';
import useSkipFirstRender from './hooks/SkipRender/useSkipFirstRender';

function App() {
    const { darkMode } = useThemeContext();
    const { userLogedIn,user,message } = useAuth();

    useSkipFirstRender(() => {
        toast(message);
    },message);
    return (
        <div className='app' data-theme={darkMode ? ('dark') : ('light')}>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='notification' element={<Notification />} />
                    <Route path='messages' element={<Chat />}></Route>
                    <Route path='login' element={!userLogedIn ? <LogIn /> : <Navigate to='/' />}></Route>
                    <Route path='Signup' element={!userLogedIn ? <SignUp /> : <Navigate to='/' />}></Route>
                    <Route path=':blogId' element={<BlogDetails />}></Route>
                </Route>
                <Route path='/shop' element={<ShopSharedLayout />}>
                    <Route index element={<Shop />} />
                    <Route path='admin' element={<Admin />} >
                        <Route index element={<DashBoard />}></Route>
                        <Route path='new/' element={<AddProduct />}></Route>
                        <Route path='trackorder' element={<OrderTrack />}></Route>
                        <Route path='edit/:productID' element={<EditProduct />}></Route>
                    </Route>
                    <Route path='product/details/:productID' element={<CardDetails />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path={'checkout/' + user?.uid} element={<Checkout />} />
                </Route>
                <Route path='/profile' element={<SharedLayout />}>
                    <Route index element={userLogedIn ? <Profile /> : <Navigate to='/' />}></Route>
                    <Route path=':profileID' element={<Profile />} />
                    <Route path='edit/:profileIDt' element={<EditProfile />}></Route>
                </Route>
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default App;