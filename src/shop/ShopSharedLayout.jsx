import React from 'react';
import { ShoppingCartProvider } from '../hooks/ShopingCart/useCartContext.jsx';
import Navbar from '../components/NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const ShopSharedLayout = () => {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <Outlet />
        </ShoppingCartProvider>
    );
};

export default ShopSharedLayout;
