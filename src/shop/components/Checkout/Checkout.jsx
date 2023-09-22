import { doc,updateDoc,getFirestore } from "firebase/firestore";
import React,{ useRef,useState,useEffect } from 'react';
import useQueryById from '../../../hooks/queryData/useQueryData';
import { useAuth } from '../../../hooks/auth/useAuth';
import useSetData from '../../../hooks/useSetData/useSetData';
import ShowItem from '../Show Item/ShowItem';
import { CancelOutlined } from '@mui/icons-material';
import { useCartContext } from "../../../hooks/ShopingCart/useCartContext";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
    const db = getFirestore();
    const { user } = useAuth();
    const { resetCart } = useCartContext();
    const { gettingQueryData,queryData } = useQueryById('shopping Cart',user?.uid);
    const { sentDataById } = useSetData();
    const [ isHidden,setIsHidden ] = useState(true);
    const [ total,setTotal ] = useState(0);
    const [ address,setAddress ] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (queryData !== undefined) {
            setTotal(() => queryData?.cart.filter(item => item.checked === false).reduce((price,item) => item.price + price,0));
        }
    },[ queryData ]);

    const handlePlaceOrder = () => {

        if (address === null || '') {
            alert('please add address');
            return;
        }

        sentDataById('placed Order',user?.uid,{
            'cart': queryData?.cart,
            'address': address,
            'deliverd': false
        },'/shop');
        const dbRef = doc(db,'shopping Cart',user?.uid);
        updateDoc(dbRef,{
            cart: []
        });
        resetCart();
        navigate('/shop');
    };

    return (
        <>
            <div className='checkoutContainer'>
                <div className="addressInputContainer">
                    <button
                        className={!isHidden ? 'showInCorner' : undefined}
                        onClick={() => setIsHidden(!isHidden)}>
                        {isHidden ? (<>Click To Add Address</>) : (<CancelOutlined />)}</button>
                    <textarea
                        onChange={e => setAddress(e.target.value)} hidden={isHidden}
                        type="text" placeholder='Add Your Address' />
                </div>
                <div className='cartItemContainer'>
                    {!gettingQueryData &&
                        queryData?.cart.map(item =>
                        (
                            <ShowItem item={item} key={item.id} />
                        ))}
                    <div className='cartTotalPrice'>
                        <button
                            onClick={handlePlaceOrder} >Place Order</button>
                        <p>{total} TK</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
