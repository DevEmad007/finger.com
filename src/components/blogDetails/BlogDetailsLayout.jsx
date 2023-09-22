import { Comment,Favorite,Person,Share } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BlogDetailsLayout = ({ blogitem,blogId }) => {
    const { blog,user } = blogitem.data();

    return (
        <div className='blogDetailsLayout' key={blogId}>
            <div className="personInfoContainer">
                <img src="#" alt="" />
                <Person className='person' />
                <Link className='globleLinkStyle' to='/profole'>
                    <h6> {user}</h6>
                </Link>
            </div>
            <div className="postInfo">
                {blog}
            </div>
            <div className="interactionContainer">
                <span><Favorite className='like' />Like</span>
                <span><Comment className='comment' />Comment</span>
                <span><Share className='share' />Share</span>
            </div>
        </div>
    );
};
export default BlogDetailsLayout;
