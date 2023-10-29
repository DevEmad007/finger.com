import { collection,getDocs } from "firebase/firestore";
import React,{ useEffect,useState } from 'react';
import { getFirestore } from "firebase/firestore";
import MicroBlogLayout from "./MicroBlogLayout";
import { RotatingLines } from "react-loader-spinner";
import useGetData from "../../hooks/getData/useGetData";
import './microBlogs.css';

function MicroBlogs() {
    const type = 'blogs';
    const { gettingData,data: blogs } = useGetData(type);

    return (
        <div className="blogs">
            {!gettingData ? blogs.map((blog) => {
                return <MicroBlogLayout blogitem={blog} blogId={blog.id} key={blog.id} />;
            })
                :
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    position='absolute'
                    top='44%'
                    left='44%'
                    width="56"
                    visible={true}
                />}
        </div>
    );
}

export default MicroBlogs;

