"use client";
import React,{useRef, useEffect} from 'react'
import "./style.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Scrollbar from 'smooth-scrollbar'
gsap.registerPlugin(ScrollTrigger);
const PinnedScroll = () => {
 const pinnedRef = useRef();
 useEffect(()=>{
    // Scrollbar.init(document.querySelector('.outerWrapper'))
    ScrollTrigger.create({
        trigger:'.outerWrapper',
        start:"top top",
        end:"bottom bottom",
        pin:".right"
    });
    ScrollTrigger.create({
        trigger:".d1",
        start:"top top",
        end:"bottom bottom",
        pin:false,
        scrub:true,
        onEnter:()=> gsap.to(pinnedRef.current,{
            backgroundColor:"red",
            overwrite:'auto'
        }),
        onLeaveBack:()=>gsap.to(pinnedRef.current,{
            backgroundColor:"green",
            overwrite:'auto'
        })

    });
    ScrollTrigger.create({
        trigger:".d2",
        start:"top top",
        end:"bottom bottom",
        pin:false,
        scrub:true,
        onEnter:()=> gsap.to(pinnedRef.current,{
            backgroundColor:"orange",
            overwrite:'auto'
        }),
        onLeaveBack:()=>gsap.to(pinnedRef.current,{
            backgroundColor:"red",
            overwrite:'auto'
        })

    });
    ScrollTrigger.create({
        trigger:".d3",
        start:"top top",
        end:"bottom bottom",
        pin:false,
        scrub:true,
        onEnter:()=> gsap.to(pinnedRef.current,{
            backgroundColor:"yellow",
            overwrite:'auto'
        }),
        onLeaveBack:()=>gsap.to(pinnedRef.current,{
            backgroundColor:"orange",
            overwrite:'auto'
        })

    });
 },[])
  return (
    <>
    
     <div className='outerWrapper'>
        <div className="left">
            <div className="detailsWrapper">
                <div className="details d1">
                    <div className="headLine"></div>
                    <div className="text"></div>
                    <div className="text"></div>
                    <div className="text"></div>
                </div>
                <div className="details d2">
                <div className="headLine"></div>
                    <div className="text"></div>
                    <div className="text"></div>
                    <div className="text"></div>
                </div>
                <div className="details d3">
                <div className="headLine"></div>
                    <div className="text"></div>
                    <div className="text"></div>
                    <div className="text"></div>
                </div>
            </div>
        </div>
        <div  className="right">
            <div className='imageCard'>
                <div ref={pinnedRef} className="image"></div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default PinnedScroll
