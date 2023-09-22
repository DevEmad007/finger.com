import { Link } from "react-router-dom";
import { useCartContext } from '../../../hooks/ShopingCart/useCartContext';
import { ShoppingBasket } from "@mui/icons-material";

const CartIcon = () => {
    const { count } = useCartContext();

    return (
        <>
            <Link className='globleLinkStyle navLink carticon' to={'/shop/cart'}>
                <ShoppingBasket className="navIcon" />
                <span className="cartCount">{count}</span>
            </Link>
        </>
    );
};

export default CartIcon;
