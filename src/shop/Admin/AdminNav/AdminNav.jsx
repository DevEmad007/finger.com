import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './adminNav.css';

const AdminNav = () => {
    return (
        <nav className='adminNav'>
            <ul className="navList">
                <li>
                    <NavLink className={'globleLinkStyle navLink'} to={'/shop/admin'}>
                        DashBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink className='globleLinkStyle navLink' to={'new'}>
                        Add Product
                    </NavLink>
                </li>
                <li>
                    <NavLink className='globleLinkStyle navLink' to={'trackorder'}>
                        Track Order
                    </NavLink>
                </li>
            </ul>
        </nav >
    );
};

export default AdminNav;
