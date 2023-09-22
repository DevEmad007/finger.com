import React from 'react';
import Card from '../Card';
import useGetData from '../../../hooks/getData/useGetData';
import { RotatingLines } from 'react-loader-spinner';
import './tranding.css';
import { useAuth } from '../../../hooks/auth/useAuth';

const Trending = () => {
    const type = 'product';
    const { gettingData,data } = useGetData(type);
    const { userLogedIn,user } = useAuth();
    return (
        <>
            <div className="tranding">
                <h1>Trending Now</h1>
                <div className="cardContainer">
                    {gettingData ?
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="56"
                            visible={true} />
                        :
                        <Card data={data} user={user} />}
                </div>
            </div>
        </>
    );
};

export default Trending;
