import { Person } from '@mui/icons-material';
import useDownloadData from '../../hooks/downloadData/useDownloadData';

const ShowImage = ({ imgRef,classname }) => {
    const { downloadedData: image,message } = useDownloadData(imgRef);
    console.log(image);
    return (
        <>
            {image === undefined ?
                <Person sx={{ width: '30px',height: '30px' }} className='person' />
                :
                <img className={classname} src={image} />}
        </>
    );
};

export default ShowImage;
