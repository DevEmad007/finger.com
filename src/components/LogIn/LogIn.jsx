import { Google } from '@mui/icons-material';
import React,{ useContext,useRef } from 'react';
import { useAuth } from '../../hooks/auth/useAuth';
import { Link } from 'react-router-dom';
import './login.css';
import 'react-toastify/dist/ReactToastify.css';


function LogIn() {
    const { signInWithGgl,authLogIn } = useAuth();
    const email = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        authLogIn(email.current.value,password.current.value);
    };

    const handleGoogleAuth = () => {
        signInWithGgl();
    };

    return (
        <div className='LogIn'>
            <div className="formContainer">
                <h2 onClick={() => toast('GG')}>Log in Here</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <label htmlFor="User name or email">E-mail</label>
                        <input ref={email} type="email" />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="User name or email">Password</label>
                        <input ref={password} type="password" />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <div className="registerLinkContainer">
                    <span><b>Join Here</b></span>
                    <Link style={{ textDecoration: 'underline' }} className='globleLinkStyle' to='/signup'>Sign Up</Link>
                </div>
                <button className='gAuthBtn' type='button' onClick={handleGoogleAuth}><Google />     Log in With Google</button>
            </div>
        </div>
    );
}

export default LogIn;