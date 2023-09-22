import Banner from '../Banner/Banner';
import Tranding from '../Tranding';
import './shop.css';

function Shop() {
    console.log('shop');
    return (
        <div className='shop'>
            <Banner />
            <Tranding />
        </div>
    );
}

export default Shop;