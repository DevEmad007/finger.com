import React,{ useEffect,useState } from 'react';
import { useAuth } from '../../hooks/auth/useAuth';
import { Link } from 'react-router-dom';

function SignUp() {
    const [ email,setEmail ] = useState('');
    const [ password,setPassword ] = useState('');
    const [ confirmPassword,setConfirmPassword ] = useState('');
    const [ showMessage,setShowMessage ] = useState(false);
    const { authSignUp } = useAuth();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setShowMessage(false);
        },3000);
        return () => { clearTimeout(timeOut); };
    },[ showMessage ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword & password !== '') {
            authSignUp(email,password);
        };
        setShowMessage(true);
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className='LogIn'>
            <div className="formContainer">
                <h2>Sign in here</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <label htmlFor="User name or email">E-mail</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="User name or email">Password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="User name or email">Confirm Password</label>
                        <input onChange={e => setConfirmPassword(e.target.value)} type="password" />
                        <span className={showMessage ? 'message' : 'message hide'}>Password did not mached</span>
                    </div>
                    <div className="registerLinkContainer">
                        <span><b>Already Registared?</b></span>
                        <Link style={{ textDecoration: 'underline' }} className='globleLinkStyle' to='/login'>Log In</Link>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;