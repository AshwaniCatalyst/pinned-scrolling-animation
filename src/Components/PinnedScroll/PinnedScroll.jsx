"use client";
import React,{useRef, useEffect} from 'react'
import "./style.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
// import img1 from ''
// import Scrollbar from 'smooth-scrollbar'
gsap.registerPlugin(ScrollTrigger);
const PinnedScroll = () => {
 const pinnedRef = useRef();
 const scrollingSectionsRef = useRef([]);
 useEffect(()=>{
    const currentSection = scrollingSectionsRef.current;
    currentSection.forEach((section,i)=>{
        const prevBgColor = i===0?'':currentSection[i - 1].dataset.nextbgcolor;
        console.log("color",prevBgColor);
        ScrollTrigger.create({
            trigger:section,
        start:"top top",
        end:"bottom bottom",
        pin:false,
        scrub:true,
        onEnter:()=> gsap.to(pinnedRef.current,{
            backgroundColor:section.dataset.nextbgcolor,
            overwrite:'auto'
        }),
        onLeaveBack:()=>gsap.to(pinnedRef.current,{
            backgroundColor:prevBgColor,
            overwrite:'auto'
        })
        })
    })
    ScrollTrigger.create({
        trigger:'.outerWrapper',
        start:"top top",
        end:"bottom bottom",
        pin:".right"
    });
    
 },[])
  return (
    <>
    
     <div className='outerWrapper'>
        <div className="left">
            <div className="detailsWrapper">
                <div ref={(el)=>scrollingSectionsRef.current[0]=el} className="details d1" data-nextbgcolor="red">
                <div className="Section-info-text">
                <h2>An exciting<br/>development for<br/>local development</h2>
                <p><b>Netlify’s full platform in your terminal.</b><br></br>
                Spin up a project in seconds, configure<br/>your build, test edge and serverless<br/>functions, and deploy globally — all from<br/>your command line.</p>
                <button className='pin-sec-btn'><a href="">Launch your project now</a></button>
                </div>
                <div className="Section-employee-card">
            <div className="employee-quote">
                    <p>There isn’t any way we could have developed our site in the time we did without Netlify.{''}</p>
                </div>
                <div className="employee-info">
                    <div className="employee-img">
                        <img src="https://d33wubrfki0l68.cloudfront.net/e9b5803840094d2583bc945e2a9c3cf2abc3fbe9/22b82/v3/img/build/xth_gr38jk-80.webp"  alt="employee-img"/>
                    </div>
                    <div className="employee-details">
                        <h3>Erin Kissane</h3>
                        <p>CO-FOUNDER, THE COVID TRACKING PROJECT</p>
                    </div>
                </div>
            </div>
                </div>
                <div ref={(el)=>scrollingSectionsRef.current[1]=el} className="details d2" data-nextbgcolor="orange">
                <div className="Section-info-text">
                <h2>Build with anything,<br/>connect to<br/>everything</h2>
                <p><b>All your tools. All your data. Together.</b><br/>
                With first-class support for every modern<br/>web framework and a broad ecosystem of<br/>API integrations, Netlify helps you build any<br/>kind of site or app you can imagine using<br/>the best tools for the job.</p>
                <button className='pin-sec-btn'><a href="">Explore our integrations</a></button>
                </div>
                <div className="Section-employee-card">
            <div className="employee-quote">
                    <p>Using Next.js with Netlify, our customer eased their web team’s workflow and saw better overall performance.</p>
                </div>
                <div className="employee-info">
                    <div className="employee-img">
                        <img src="https://d33wubrfki0l68.cloudfront.net/5bc0f5e13cf7213c158fe23601e8013cecc2b216/425c4/v3/img/build/ygz5ic-inm-80.webp"  alt="employee-img"/>
                    </div>
                    <div className="employee-details">
                        <h3>Yashar Rassoulli</h3>
                        <p>CTO, MYPLANET</p>
                    </div>
                </div>
            </div>
                </div>
                <div ref={(el)=>scrollingSectionsRef.current[2]=el} className="details d3" data-nextbgcolor="yellow">
                <div className="Section-info-text">
                <h2>Time to deploy: Push<br/>to Git, and that’s it</h2>
                <p><b>Fast, resilient network for web apps.</b><br/>
                Every deploy publishes your apps to be<br/>served across all of our global edge<br/>locations. Your own web servers and CDN<br/>are no longer required.</p>
                <button className='pin-sec-btn'><a href="">Get started for free</a></button>
                </div>
                <div className="Section-employee-card">
            <div className="employee-quote">
                    <p>Our website is more flexible and reliable, and performs three times faster than before.</p>
                </div>
                <div className="employee-info">
                    <div className="employee-img">
                        <img src="https://d33wubrfki0l68.cloudfront.net/1e26fdbf20101108d978117ddaba937584a41531/dac18/v3/img/build/ydtilyltrn-80.webp"  alt="employee-img"/>
                    </div>
                    <div className="employee-details">
                        <h3>Alicia Samue</h3>
                        <p>VICE PRESIDENT OF INFORMATION TECHNOLOGY, LONGO'S</p>
                    </div>
                </div>
            </div>
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
