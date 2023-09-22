import { Favorite,ShoppingBasket } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const ShopNav = () => {
    return (
        <nav className='shopNav'>
            <ul className='shopNavList'>
                <li>
                    <Link className='globleLinkStyle' to={'/shop/cart'}>
                        <ShoppingBasket />
                    </Link>
                </li>
                <li>
                    <Link className='globleLinkStyle' to={'/shop/cart'}>
                        <Favorite />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default ShopNav;
