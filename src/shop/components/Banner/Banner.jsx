import React,{ useCallback,useEffect,useRef,useState } from 'react';
import './banner.css';
const Banner = () => {

    const [ index,setIndex ] = useState(0);
    const total = useRef().current = 5;
    const transitionTime = useRef().current = 6000;

    const timer = useCallback(() => {
        const interval = setInterval(() => {
            setIndex(prev =>
                prev === total ? 0 : prev + 1
            );
        },transitionTime);
        return () => { clearInterval(interval); };
    },[]);

    useEffect(() => {
        timer();
    },[ total ]);

    return (
        <>
            <div className="bannerContainer">
                <div className="bannerSlide"
                    style={index === 0 ?
                        { transform: `translateX(${0}%)`,transition: 'none' }
                        : { transform: `translateX(${-100 * index}%)`,transition: `${transitionTime / 2.2}ms ease-in-out` }} >
                    <div className="banner banner_1">Banner One</div>
                    <div className="banner banner_2">Banner two</div>
                    <div className="banner banner_3">Banner three</div>
                    <div className="banner banner_4">Banner Four</div>
                    <div className="banner banner_5">Banner Five</div>
                    <div className="banner banner_1">Banner One</div>
                </div>
            </div>
        </>
    );
};

export default Banner;
