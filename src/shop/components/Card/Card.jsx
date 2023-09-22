import React from 'react';
import { Star } from '@mui/icons-material';
import { Link,useParams } from 'react-router-dom';
import ShowImage from '../../../components/ShowImage/ShowImage';
import { useCartContext } from '../../../hooks/ShopingCart/useCartContext';
import './card.css';


const Card = ({ data }) => {
    const param = useParams();
    const { addToCart } = useCartContext();
    const itemData = data.map(d => d.data());

    return (
        <>
            {itemData.map(item => (
                <div className="card" key={item?.id}>
                    <Link className='globleLinkStyle' to={`/shop/product/details/${item.id}`}>
                        <div className="CardImgContainer">
                            <ShowImage classname={'cardImage'} imgRef={item?.img} />
                        </div>
                        <h3>{item?.name}</h3>
                        <div className="cardInfo">
                            <p>Price <span>{item?.price}</span> Tk</p>
                            <div className="rating">
                                <Star /><Star /><Star /><Star /><Star /><span>{'0'}</span>
                            </div>
                        </div>
                    </Link>
                    <div className='btnContainer'>
                        <button onClick={() => addToCart(item.id,item.price)} className='addCartBtn'>Add To Cart</button>
                        <button className='addWishBtn'>Add To Wishlist</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;
