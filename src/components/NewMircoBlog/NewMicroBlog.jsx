import React,{ useState } from 'react';
import { collection,addDoc,Timestamp } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import { useAuth } from '../../hooks/auth/useAuth';
import { MutatingDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import useQueryById from '../../hooks/queryData/useQueryData';
import './newMicroBlog.css';

const NewMicroBlog = ({ setRunEffect,runEffect }) => {

    const db = getFirestore();
    const { user,userLogedIn } = useAuth();
    const { queryData } = useQueryById('profile',user?.uid);
    const [ newBlog,setNewBlog ] = useState('');
    const [ showLoader,setShowLoader ] = useState(false);
    const navigate = useNavigate();

    const handlePostInpute = (e) => {
        setNewBlog(e.target.value);
    };
    console.log(queryData);
    const handlePost = async (e) => {
        e.preventDefault();
        if (!userLogedIn) {
            navigate('/login');
            return;
        }
        if (queryData === undefined || null
            || queryData?.displayName === '' || undefined) {
            navigate('/profile/edit/' + user.uid);
            return;
        }
        if (newBlog === '') {
            window.alert('Post Box is empty');
            return;
        }
        setShowLoader(true);
        if (userLogedIn) {
            try {
                const docRef = await addDoc(collection(db,'blogs'),{
                    blog: newBlog,
                    userid: user.uid,
                    timestamp: Timestamp.fromDate(new Date()),
                    user: queryData?.displayName
                });
                setNewBlog('');
                setRunEffect(!runEffect);
                setShowLoader(false);
            } catch (e) {
                console.error("Error adding document: ",e);
            }
        }
    };

    return (
        <div className='newMicroBlogs'>
            <form onSubmit={handlePost}>
                <p>What's on your mind?</p>
                <textarea value={newBlog} onChange={handlePostInpute}></textarea>
                <button className='blogPostBtn' type='submit'>Post</button>
                <MutatingDots
                    color="gray"
                    secondaryColor='gray'
                    radius='9'
                    ariaLabel="mutating-dots-loading"
                    wrapperClass="mutatingDots"
                    visible={showLoader}
                />
            </form>
        </div>
    );
};

export default NewMicroBlog;