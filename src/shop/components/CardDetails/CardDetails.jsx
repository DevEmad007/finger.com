import { Star,LocationOn,DeliveryDiningTwoTone,MoneyTwoTone,AssignmentReturn,Shield } from '@mui/icons-material';
import { Navigate,useNavigate,useParams } from 'react-router-dom';
import useQueryById from '../../../hooks/queryData/useQueryData';
import ShowImage from '../../../components/ShowImage/ShowImage';
import './cardDetails.css';
import { useCartContext } from '../../../hooks/ShopingCart/useCartContext';
import { useAuth } from '../../../hooks/auth/useAuth';

const CardDetails = () => {
    const param = useParams();
    const { user } = useAuth();
    const { addToCart } = useCartContext();
    const { gettingQueryData,queryData: item,setNewQueryReq } = useQueryById('product',param.productID);
    const navigate = useNavigate();

    return (
        <>
            {!gettingQueryData &&
                <div className='cardDetails'>
                    <div className="cardDetailsContainer">
                        <div className="imageContainer">
                            <ShowImage classname={'itemImage'} imgRef={item.img} />
                        </div>
                        <div className="productDescription">
                            <h2>{item.name}</h2>
                            <div className="rating">
                                <Star /><Star /><Star /><Star /><Star /><span>{item?.rating}</span>
                            </div>
                            <div className="price">
                                Price : <span>{item.price}</span>
                            </div>
                            <p>
                                {item.description} Lorem ipsum dolor sit amet consectetur, provident!
                            </p>
                            <div className="buyAndWishList">
                                <button onClick={() => {
                                    addToCart(item.id,item.price);
                                    navigate('/shop/checkout/' + user?.uid);
                                }}>Buy Now</button>
                                <button>Add To Wishlist</button>
                            </div>
                        </div>
                        <div className="deliveryDetails">
                            <div>
                                <div className="location">
                                    <div>
                                        <LocationOn /> <p>Dhaka, Dhaka North, Banani Road No. 12 - 19</p>
                                    </div>
                                </div>
                                <div className="info">
                                    <div>
                                        <DeliveryDiningTwoTone />
                                        <p>Standard Delivery 20 Sep - 24 Sep
                                            6 - 10 day(s)</p>
                                    </div>
                                    <div>
                                        < MoneyTwoTone />
                                        <p>Cash on Delivery Available</p>
                                    </div>
                                </div>
                            </div>
                            <div className='service'>
                                <div>
                                    <AssignmentReturn />
                                    <p>7 Days Returna</p>
                                </div>
                                <div>
                                    <Shield />
                                    <p>No Warenty Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default CardDetails;
