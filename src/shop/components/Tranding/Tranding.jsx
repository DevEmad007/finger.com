import React from 'react';
import Card from '../Card';
import useGetData from '../../../hooks/getData/useGetData';
import { RotatingLines } from 'react-loader-spinner';
import './tranding.css';

const Tranding = () => {
    const type = 'product';
    const { gettingData,data } = useGetData(type);
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
                        <Card data={data} />}
                </div>
            </div>
        </>
    );
};

export default Tranding;
