import React,{ useState } from 'react';
import useQueryById from '../../../../hooks/queryData/useQueryData';
import { Delete } from '@mui/icons-material';
import ShowImage from '../../../../components/ShowImage/ShowImage';
const CartItem = (props) => {
    const { item,addToCart,removeFromCart,deleteFromCart,} = props;
    const { gettingQueryData,queryData,setNewQueryReq } = useQueryById('product',item.id.toString());
    const [ isChecked,setIsChecked ] = useState(queryData?.checked);

    const handleChecked = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="cartItem">
            <div >
                <input
                    id='checkbox'
                    checked={isChecked}
                    onChange={handleChecked}
                    style={{ marginRight: '4px',cursor: 'pointer' }}
                    type="checkbox" />
                <ShowImage classname={'cartImg'} imgRef={queryData?.img} />
                <div>
                    <h3 htmlFor='checkbox' className='itemName'>{queryData?.name} </h3>
                    <Delete className='globleLinkStyle' onClick={() => deleteFromCart(item?.id)} />
                </div>
            </div>
            <div>
                <p className='itemPrice'>{item?.price}</p>
                <div className='cartBtnContainer'>
                    <button
                        onClick={() => removeFromCart(item.id,queryData?.price)}
                        className='decreaseItem'>-1</button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() => addToCart(item.id,queryData?.price)}
                        className='increaseItem'>+1</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
