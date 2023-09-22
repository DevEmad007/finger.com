import React from 'react';
import useDownloadData from '../../hooks/downloadData/useDownloadData';

const ShowImage = ({ imgRef,classname }) => {
    const { downloadedData: image,message } = useDownloadData(imgRef);
    return (
        <>
            <img className={classname} src={image} alt={imgRef} />
        </>
    );
};

export default ShowImage;
