import { Comment,Share } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ShowDP from '../ShowDP/ShowDP';
import Like from '../Like';

function MicroBlogLayout({ blogitem,blogId }) {

    const { blog,user,timestamp,userid } = blogitem.data();

    return (
        <>
            <div className="microBlog">
                <div className="personInfoContainer">
                    <Link className='globleLinkStyle' to={`/profile/${userid}`}>
                        <ShowDP classname={'personDP'} imgRef={`profileIMG/${userid}`} />
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
                    <Like blogId={blogId} />
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