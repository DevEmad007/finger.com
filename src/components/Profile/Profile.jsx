import { useAuth } from '../../hooks/auth/useAuth';
import ProfileLayout from './ProfileLayout';
import { RotatingLines } from 'react-loader-spinner';
import './profile.css';
import { Navigate,useParams } from 'react-router-dom';
import useQueryById from '../../hooks/queryData/useQueryData';
import { useState,useEffect,useRef } from 'react';
import useSkipFirstRender from '../../hooks/SkipRender/useSkipFirstRender';

function Profile() {
    const uidAsParam = useParams();
    const paramRef = useRef();
    const { user } = useAuth();
    const { gettingQueryData,queryData,setNewQueryReq } = useQueryById('profile',uidAsParam.profileID);

    useEffect(() => {
        if (paramRef.current !== uidAsParam.profileID && paramRef.current !== undefined) {
            setNewQueryReq(prev => prev + 1);
        }
        else {
            paramRef.current = uidAsParam.profileID;
        }
    },[ uidAsParam ]);

    return (
        <div className="profile">
            {!user && <Navigate to={'/login'} />}
            {
                gettingQueryData ?
                    (<RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="56"
                        visible={true}
                    />) : (
                        <ProfileLayout
                            profileData={queryData}
                            uidAsParam={uidAsParam}
                        />)

            }
        </div>
    );
}

export default Profile;