import { useEffect,useState } from 'react';
import MicroBlogs from '../MicroBlogs';
import NewMicroBlog from '../NewMircoBlog/';
import './Home.css';

function Home() {
    const [ runEffect,setRunEffect ] = useState(false); {/*tracks the new post to render Microblogs*/ }
    const [ render,setRender ] = useState(false);

    useEffect(() => {
        setRender(!render);
    },[ runEffect ]);

    return (
        <div className='home' >
            <div>
                <NewMicroBlog setRunEffect={setRunEffect} runEffect={runEffect} />
                {render && <MicroBlogs />}
                {!render && <MicroBlogs />}
            </div>
        </div>
    );
}

export default Home;