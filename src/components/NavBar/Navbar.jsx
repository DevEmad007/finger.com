import { ChatBubble,Home,Notifications,ShopTwo } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import NavAuthLinks from './NavAuthLinks';
import { useEffect,useRef,useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [ isScrolled,setIsScrolled ] = useState(false);
    const prevScrollY = useRef();

    useEffect(() => {
        prevScrollY.current = scrollY;
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);

    const handleScroll = () => {
        if (window.scrollY - prevScrollY.current > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <>
            <header className={`${isScrolled ? 'hidden' : ''}`}>
                <h2>
                    <Link className='globleLinkStyle websiteLogo' to={'/'}>
                        Finger.Com
                    </Link>
                </h2>
                <nav>
                    <ul className='navList'>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/'>
                                <Home className='navIcon' />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/notification'>
                                <Notifications className='navIcon' />
                                <span>Notice</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/messages'>
                                <ChatBubble className='navIcon' />
                                <span> Chat </span>
                            </Link>
                        </li>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/shop'>
                                <ShopTwo className='navIcon' />
                                <span> Shop</span>
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