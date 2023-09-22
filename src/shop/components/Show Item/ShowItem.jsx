import useQueryById from '../../../hooks/queryData/useQueryData';
import ShowImage from '../../../components/ShowImage/ShowImage';

const ShowItem = ({ item }) => {
    const { queryData } = useQueryById('product',item?.id.toString());

    return (
        <div className="cartItem" >
            <div style={{ display: 'flex' }}>
                <ShowImage imgRef={queryData?.img} classname={'cartImg'} />
                <h3 className='itemName'>{queryData?.name} </h3>
            </div>
            <div>
                <span style={{ marginRight: '20px',fontSize: '12px' }}>{item?.quantity} x 1</span>
                <span style={{ fontSize: '18px' }} className='itemPrice'>{item?.price}</span>
            </div>
        </div>
    );
};

export default ShowItem;
