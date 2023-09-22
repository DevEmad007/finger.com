import { Outlet } from 'react-router-dom';
import AddProduct from './AddProduct/AddProduct';
import AdminNav from './AdminNav/AdminNav';

const Admin = () => {

    return (
        <>
            <div className='admin'>
                <AdminNav />
                <Outlet />
            </div>
        </>
    );
};

export default Admin;
