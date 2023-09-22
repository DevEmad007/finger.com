import Banner from '../Banner/Banner';
import Trending from '../Tranding';
import './shop.css';

function Shop() {
    console.log('shop');
    return (
        <div className='shop'>
            <Banner />
            <Trending />
        </div>
    );
}

export default Shop;