import { createContext,useContext,useEffect,useRef,useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfigs';

export const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
};

export const AuthContext = ({ children }) => {
    const [ message,setMessage ] = useState('');
    const [ user,setUser ] = useState(null);
    const [ userLogedIn,setUserLogedIn ] = useState();
    //this state can't have any default value just to update in checkAuthStatus either way if user signed in or not
    const isFirstRender = useRef(true);
    const navigate = useNavigate();

    const checkAuthStatus = () => {
        onAuthStateChanged(auth,(user) => {
            if (user) {
                setUserLogedIn(true);
                setUser(user);
                console.log('state changed UId =>' + user?.uid);
            }
            else {
                setUserLogedIn(false);
            }
        });
    };

    useEffect(() => {
        checkAuthStatus();
    },[]);

    if (user === null && isFirstRender.current) {
        isFirstRender.current = false;
        return;
    }

    const authSignUp = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const authLogIn = (email,password) => {
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setMessage('Log In Successfull');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage(errorMessage);
                console.log(errorMessage);
            });
    };

    const authLogOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
                setMessage('Log Out Success');
            }).catch((error) => {
                setMessage('Log Out Failed');
                console.log(error.message);
            });
    };

    const signInWithGgl = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setMessage('Log Out Success');
                // navigate(`/profile/edit/${user.uid}`);
            }).catch((error) => {
                setMessage('Log Out Failed');
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    const values = {
        user,
        userLogedIn,
        authSignUp,
        authLogIn,
        authLogOut,
        signInWithGgl,
        message
    };
    return <authContext.Provider value={values}>
        {children}
    </authContext.Provider>;
};

