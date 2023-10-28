import { Comment,Favorite,Person,Share } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ShowDP from '../ShowDP/ShowDP';
import Like from '../Like';

const BlogDetailsLayout = ({ blogitem,blogId }) => {
    const { blog,user,timestamp,userid } = blogitem.data();

    return (
        <div className='blogDetailsLayout' key={blogId}>
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
            <div className="postInfo">
                {blog}
            </div>
            <div className="interactionContainer">
                <Like blogId={blogId} />
                <span><Comment className='comment' />Comment</span>
                <span><Share className='share' />Share</span>
            </div>
        </div>
    );
};
export default BlogDetailsLayout;
