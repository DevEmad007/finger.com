import { Comment,Favorite,Person,Share } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ShowDP from '../ShowDP/ShowDP';

function MicroBlogLayout({ blogitem,blogId }) {

    const { blog,user,timestamp,userid } = blogitem.data();

    return (
        <>
            <div className="microBlog">
                <div className="personInfoContainer">
                    <Link className='globleLinkStyle' to={`/profile/${userid}`}>
                        <ShowDP classname={'personDP'} imgRef={`profileIMG/${userid}`} />
                        {/* <Person sx={{ width: '30px',height: '30px' }} className='person' /> */}
                    </Link>
                    <div>
                        <Link className='globleLinkStyle' to={`/profile/${userid}`}>
                            <h5> {user}</h5>
                        </Link>
                        <span>{`${timestamp.toDate().toString().substring(15,0)}`}</span>
                    </div>
                </div>
                <Link className='globleLinkStyle' to={'/' + blogId}>
                    <div className="postInfo">
                        {blog}
                    </div>
                </Link>
                <div className="interactionContainer">
                    <span><Favorite
                        sx={{ width: '12pxpx',height: '12pxpx' }}
                        className='like' />Like</span>
                    <span><Comment
                        sx={{ width: '12pxpx',height: '12pxpx' }}
                        className='comment' />Comment</span>
                    <span><Share
                        sx={{ width: '12pxpx',height: '12pxpx' }}
                        className='share' />Share</span>
                </div>
            </div>
        </>
    );
}

export default MicroBlogLayout;