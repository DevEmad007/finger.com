import { ChatBubble,Home,Notifications,ShopTwo } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import NavAuthLinks from './NavAuthLinks';
import './Navbar.css';

function Navbar() {

    return (
        <>
            <header>
                <h2>
                    <Link className='globleLinkStyle' to={'/'}>
                        Finger.Com
                    </Link>
                </h2>
                <nav>
                    <ul className='navList'>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/'>
                                <Home className='navIcon' />Home
                            </Link>
                        </li>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/notification'>
                                <Notifications className='navIcon' /> Notice
                            </Link>
                        </li>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/messages'>
                                <ChatBubble className='navIcon' />Chat
                            </Link>
                        </li>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/shop'>
                                <ShopTwo className='navIcon' />Shop
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ul className='extarnalLink'>
                    <NavAuthLinks />
                </ul>
            </header>
            <div className='contentPusher'></div>
        </>
    );
}

export default Navbar;