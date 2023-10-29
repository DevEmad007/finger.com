import React from 'react';
import EditProfileLayout from './EditProfileLayout';
import { useAuth } from "../../hooks/auth/useAuth";
import useQueryById from '../../hooks/queryData/useQueryData';
import { RotatingLines } from 'react-loader-spinner';

const EditProfile = () => {
    const { user } = useAuth();
    const type = 'profile';
    const { gettingQueryData,queryData } = useQueryById(type,user?.uid);

    return (
        <div className='editProfileContainer'>
            {gettingQueryData ? (<RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="1"
                position='absolute'
                top='44%'
                left='44%'
                width="56"
                visible={true}
            />) :
                (<EditProfileLayout
                    profileData={queryData}
                    user={user}
                />)}
        </div>
    );
};

export default EditProfile;
