import { Favorite } from '@mui/icons-material';

const Like = () => {
    const handleClick = () => {
        console.log('first');
    };
    return (
        <span onClick={handleClick}><Favorite
            sx={{ width: '12pxpx',height: '12pxpx' }}
            className='like' />Like
        </span>
    );
};

export default Like;
