import { useAuth } from "../../hooks/auth/useAuth";
import { Link } from "react-router-dom";
import { Login,PersonOutlineRounded,ToggleOffTwoTone,ToggleOnTwoTone } from "@mui/icons-material";
import { useThemeContext } from '../../hooks/themeContext/useThemeContext';
import { useLocation } from 'react-router-dom';
import CartIcon from "../../shop/components/Carticon/CartIcon";

const NavAuthLinks = () => {

    const { darkMode,theme } = useThemeContext();
    const { userLogedIn,user } = useAuth();
    const path = useLocation().pathname.substring(5,0);

    const handleTheme = () => {
        theme();
    };

    return (
        <>
            <li className='globleLinkStyle navLink' onClick={handleTheme}>
                {!darkMode ?
                    (<><ToggleOffTwoTone className="darkModeToggle" />Dark</>)
                    :
                    (<><ToggleOnTwoTone className="darkModeToggle" />Light</>)}
            </li >
            {
                path === '/shop' &&
                <li>
                    <CartIcon />
                </li>
            }
            {
                userLogedIn ?
                    (<li>
                        <Link className='globleLinkStyle navLink' to={`/profile/${user.uid}`}>
                            <PersonOutlineRounded className="navIcon" />
                        </Link>
                    </li>)
                    :
                    (<li>
                        <Link className='globleLinkStyle navLink' style={{ display: 'flex',alignItems: 'center' }} to='/login'>
                            Log In <Login className="navIcon" />
                        </Link>
                    </li>)
            }
        </>
    );
};

export default NavAuthLinks;