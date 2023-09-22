import React from 'react';
import useGetData from '../../../hooks/getData/useGetData';
import './dashBoard.css';
import DashBoardItem from './DashBoardItem';
import { RotatingLines } from 'react-loader-spinner';

const DeshBoard = () => {
    const { gettingData,data } = useGetData('product');

    return (
        <div className='adminDashBoard'>
            <div style={{ position: 'relative' }} className="itemContainer">
                {gettingData ?
                    (<RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="56"
                        visible={true}
                    />) :
                    (data?.map(item => (
                        <DashBoardItem data={item.data()} key={item.data().id} />
                    )))}
            </div>
        </div>
    );
};

export default DeshBoard;
