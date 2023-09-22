import { useEffect,useState } from 'react';
import { useCartContext } from '../../../hooks/ShopingCart/useCartContext';
import CartItem from './CartItem/CartItem';
import './cart.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth/useAuth';

const Cart = () => {
    const { products,
        addToCart,
        removeFromCart,
        deleteFromCart,} = useCartContext();
    const { user } = useAuth();
    const [ isDisabled,setIsDisabled ] = useState(false);
    const [ total,setTotal ] = useState(0);

    useEffect(() => {
        setTotal(() => products?.filter(item => item.checked === false).reduce((price,item) => item.price + price,0));
        if (products?.length < 1) {
            setIsDisabled(true);
            console.log('first');
        }
    },[ products ]);

    return (
        <div className="cart">
            <div className='cartItemContainer'>
                {products?.map(item => (
                    <CartItem
                        user={user}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        deleteFromCart={deleteFromCart}
                        key={item.id} />
                ))}
                <div className='cartTotalPrice'>
                    <Link to={'/shop/checkout/' + user.uid}>
                        <button
                            disabled={isDisabled}
                            style={{ background: isDisabled && 'gray',cursor: isDisabled ? 'default' : 'pointer' }} >
                            Checkout</button>
                    </Link>
                    <p>{total} TK</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
