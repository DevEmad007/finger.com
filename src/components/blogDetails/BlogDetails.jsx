import React,{ useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/getData/useGetData';
import BlogDetailsLayout from './BlogDetailsLayout';

const BlogDetails = () => {
    const type = 'blogs';
    const blogId = useParams();
    const { gettingData,data: blogs } = useGetData(type);

    return (<>
        <div className='blogDetails'>
            {!gettingData && blogs.filter(b => {
                return b.id == blogId.blogId;
            }).map((blog) => {
                return <BlogDetailsLayout blogitem={blog} blogId={blog.id} />;
            })}
        </div>
    </>
    );
};

export default BlogDetails;
