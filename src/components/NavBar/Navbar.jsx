import { ChatBubble,Home,Notifications,ShopTwo } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import NavAuthLinks from './NavAuthLinks';
import { useEffect,useRef,useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [ show,setShow ] = useState(true);
    const [ lastScrollY,setLastScrollY ] = useState(0);
    const [ isScrolled,setIsScrolled ] = useState(false);
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
                setIsScrolled(true);
            } else { // if scroll up show the navbar
                setShow(true);
                setIsScrolled(true);
            }
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll',controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll',controlNavbar);
            };
        }
    },[ lastScrollY ]);

    return (
        <>
            <header className={`${!show ? 'hidden' : ''}`}>
                <h2 className='websiteLogo'>
                    <Link className='globleLinkStyle ' to={'/'}>
                        Finger.Com
                    </Link>
                </h2>
                <nav className={`${!show ? 'hidden' : ''}`}>
                    <ul className='navList'>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/'>
                                <Home sx='navIcon' />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/notification'>
                                <Notifications sx='navIcon' />
                                <span>Notice</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/messages'>
                                <ChatBubble sx='navIcon' />
                                <span> Chat </span>
                            </Link>
                        </li>
                        <li>
                            <Link className='globleLinkStyle navLink' to='/shop'>
                                <ShopTwo sx='navIcon' />
                                <span> Shop</span>
                            </Link>
                        </li>
                    </ul>
                    <NavAuthLinks />
                </nav>
            </header>
            <div className='contentPusher'></div>
        </>
    );
}

export default Navbar;