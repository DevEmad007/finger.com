import React from 'react';
import EditProductLayout from '../Edit Product/EditProductLayout';
import { useAuth } from "../../../hooks/auth/useAuth";
import useQueryById from '../../../hooks/queryData/useQueryData';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import './editProduct.css';
const EditProfile = () => {
    const { user } = useAuth();
    const type = 'product';
    const param = useParams();
    const { gettingQueryData,queryData } = useQueryById(type,param.productID);

    return (
        <>
            {gettingQueryData ? (<RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                position='absolute'
                top='44%'
                left='44%'
                width="56"
                visible={true}
            />) :
                (<EditProductLayout
                    data={queryData}
                    user={user}
                />)}
        </>
    );
};

export default EditProfile;
