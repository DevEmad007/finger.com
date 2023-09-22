import { getFirestore,doc,updateDoc,arrayUnion,arrayRemove } from "firebase/firestore";
import { collection,query,where,getDocs } from "firebase/firestore";
import { Favorite,FavoriteBorderOutlined,FavoriteOutlined } from '@mui/icons-material';
import useSetData from '../../hooks/useSetData/useSetData';
import { useAuth } from '../../hooks/auth/useAuth';
import { useState } from 'react';
import useQueryById from "../../hooks/queryData/useQueryData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";


const RedFevourite = () => {
    return <Favorite sx={{ color: 'red' }} className='like' />;
};


const Like = ({ blogId }) => {
    const db = getFirestore();
    const { gettingQueryData,queryData,setNewQueryReq } = useQueryById('likes',blogId);
    const { sentDataById,success } = useSetData();
    const { user,userLogedIn } = useAuth();
    const [ isLiked,setIsLiked ] = useState(false);
    const [ likeCount,setLikeCount ] = useState();
    const likedId = useRef();
    const navigate = useNavigate();

    const getlikesData = async () => {
        const q = query(collection(db,"likes"),where("id","==",blogId));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                likedId.current = doc.data();
            });
            setLikeCount(queryData?.likedIDs.length);
            setIsLiked(() => {
                if (!userLogedIn) {
                    return false;
                }
                if (likedId.current?.likedIDs.find(i => i == user?.uid) === user?.uid) {
                    return true;
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (queryData === undefined) {
            sentDataById('likes',blogId,
                {
                    id: blogId,
                    likedIDs: []
                });
        }
        // if (user === null || undefined) {
        //     return;
        // }
        getlikesData();
    },[ queryData ]);

    const handleClick = async () => {
        if (!userLogedIn) {
            navigate('/login');
            return;
        }
        const docRef = doc(db,"likes",blogId);
        if (!isLiked) {
            try {
                updateDoc(docRef,{
                    likedIDs: arrayUnion(user?.uid),
                });
                setIsLiked(true);
                setNewQueryReq(i => i + 1);
            } catch (error) {
                console.log(error);
            }
        }

        if (isLiked) {
            // Atomically remove a region from the "regions" array field.
            try {
                await updateDoc(docRef,{
                    likedIDs: arrayRemove(user?.uid)
                });
                setIsLiked(false);
                setNewQueryReq(i => i + 1);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <span onClick={handleClick}>
            {queryData === undefined ? 0 : likeCount}
            {isLiked ?
                <RedFevourite />
                :
                <FavoriteBorderOutlined
                    sx={{ width: '12pxpx',height: '12pxpx' }}
                    className='like' />
            }
        </span>
    );
};

export default Like;
