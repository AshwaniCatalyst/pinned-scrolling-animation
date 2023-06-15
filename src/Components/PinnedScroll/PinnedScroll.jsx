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
//  const innerImages = useRef([]);
 const scrollingSectionsRef = useRef([]);
 const innerScrollImg = useRef([]);
 useEffect(()=>{
    const currentSection = scrollingSectionsRef.current;
    const currentInnerImage = innerScrollImg.current;

    
   

    currentSection.forEach((section,i)=>{
        const prevBgColor = i===0?'':currentSection[i - 1].dataset.nextbgcolor;
        // const sec = document.querySelector(section);
        // const secHeight = sec.offsetHeight;
        // console.log("sec",secHeight);
        // const target = document.querySelectorAll(".a2 div");


        




        // console.log("inner image",i," ", currentInnerImage[i]);
        ScrollTrigger.create({
            trigger:section,
        start:"top center",
        end:"bottom bottom",
        pin:false,
        scrub:true,
        // markers:true,
        ease:"none",
        
        onEnter:()=> gsap.to(pinnedRef.current,{
            background:section.dataset.nextbgcolor,
            stagger:1,
            overwrite:'auto'
        }),
        onLeaveBack:()=>gsap.to(pinnedRef.current,{
            background:prevBgColor,
            stagger:1,
            overwrite:'auto'
        })
        });
        if(i===0){
            const t1 = gsap.timeline({
                scrollTrigger:{
                    trigger:section,
                    start:'-700 center',
                    end:"bottom center",
                    // markers:true,
                    pin:false,
                    scrub:true,
            }
        });
        t1.to(".a3",{
            y:"500%",
            opacity:0

        })
        t1.to(".a2",{
            // delay:0.1,
            // scale:0,
            y:"500%",
            opacity:0
        })
        t1.to(".a1",{
            duration:0.5,
            scale:0.8,
            overwrite:"auto"
        });
        t1.to(".a1",{
            scale:0.6,
            y:-30,
        })
        }
        if(i===1)
        {
            
            console.log("entered sec 2");
            const s2 = gsap.timeline({
                scrollTrigger:{
                    trigger:section,
                    start:"top center",
                    end:"bottom center",
                    // markers:true,
                    scrub:true,
                    pin:false
                }
            });
            s2.fromTo(".a2",{
                
                y:400,
                opacity:1,
                scale:0.7,
                overwrite:"auto",
            },{
                y:0,
                opacity:1,
                overwrite:"auto"
            });
            s2.to(".a2",{
                 scale:0.7,
                 y:-30,
                // opacity:0
            })
        }
        if(i==2)
        {
            const s3 = gsap.timeline({
                scrollTrigger:{
                    trigger:section,
                    start:"top center",
                    end:"bottom center",
                    // markers:true,
                    scrub:true,
                    pin:false
                }
            });
             s3.fromTo(".a3",{
                y:400,
                opacity:1,
                scale:0.7,
                overwrite:"auto",
            },{
                y:-30,
                opacity:1,
                overwrite:"auto"
            });
            s3.to(".a3",{
                // y:100,
                // opacity:0
            })
        }
    })
    ScrollTrigger.create({
        // trigger:'.outerWrapper',
        trigger:'.row',
        start:"top top",
        end:"bottom bottom",
        pin:".right"
    });

    // currentInnerImage.forEach((current, i)=>{
    //     // console.log("current", current);
    //     // let im = currentSection[i].querySelector("div");
    //     // let imH = im.offsetHeight;
    //     console.log("im im",currentSection[i]);
    //     let m1 = gsap.timeline({
    //         scrollTrigger:{
    //             trigger:".employeeCardContainer"  ,
    //             markers:true,
    //             start:"center center",
    //             // end:()=> currentSection[i].offsetHeight,
    //             // end:"bottom center",
    //             scrub:true,
                
    //         }
    //     });

    //     m1.fromTo(current,{
    //         y:0,
    //         // stagger:1,
    //         scale:0.7,
    //         opacity:1,
            
    //         overwrite:"auto"
    //     },{
    //         y:-80,
    //         // pin:true,
    //         scale:0.5,
    //         // pin:true,
    //         opacity:0.5,
    //         // duration:0.9,
    //         overwrite:"auto"
    //     }).to(current,{
    //         opacity:0,
    //         duration:0.1
    //     });        
    // })
    
 },[])
  return (
    <>
    <div className="container">
     <div className='row'>
        <div className="left col-sm-6">
            <div className="detailsWrapper ">
                <div ref={(el)=>scrollingSectionsRef.current[0]=el} className="details  d1" data-nextbgcolor="linear-gradient(180deg, rgba(12,38,196,1) 18%, rgba(59,11,103,1) 96%)">
                <div className="info-text-container">
                <div className="Section-info-text">
                <h2>An exciting<br/>development for<br/>local development</h2>
                <p><b>Netlify’s full platform in your terminal.</b><br></br>
                Spin up a project in seconds, configure<br/>your build, test edge and serverless<br/>functions, and deploy globally — all from<br/>your command line.</p>
                <button className='pin-sec-btn'><a href="">Launch your project now</a></button>
                </div>
                </div>
                
                <div className='employeeCardContainer '>
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
                </div>
                <div ref={(el)=>scrollingSectionsRef.current[1]=el} className="details d2" data-nextbgcolor="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)">
                <div className="info-text-container">
                <div className="Section-info-text">
                <h2>Build with anything,<br/>connect to<br/>everything</h2>
                <p><b>All your tools. All your data. Together.</b><br/>
                With first-class support for every modern<br/>web framework and a broad ecosystem of<br/>API integrations, Netlify helps you build any<br/>kind of site or app you can imagine using<br/>the best tools for the job.</p>
                <button className='pin-sec-btn'><a href="">Explore our integrations</a></button>
                </div>
                </div>
                
                <div className='employeeCardContainer'>
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
                
                </div>
                <div ref={(el)=>scrollingSectionsRef.current[2]=el} className="details d3" data-nextbgcolor="radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)">
                <div className="info-text-container">
                <div className="Section-info-text">
                <h2>Time to deploy: Push<br/>to Git, and that’s it</h2>
                <p><b>Fast, resilient network for web apps.</b><br/>
                Every deploy publishes your apps to be<br/>served across all of our global edge<br/>locations. Your own web servers and CDN<br/>are no longer required.</p>
                <button className='pin-sec-btn'><a href="">Get started for free</a></button>
                </div>
                </div>
                
                <div className='employeeCardContainer'>
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
        </div>
        <div  className="right col-sm-6">
            <div className='imageCard '>
                <div ref={pinnedRef} className="image">
                    <div  className='innerImage'>
                        <div ref={(el)=>innerScrollImg.current[0]=el} className='innerImageWrapper a1'>
                        <div className='inner-img-container'>
                            <img src="https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_640.jpg" alt="img1" />
                        </div>
                        </div>
                        <div ref={(el)=>innerScrollImg.current[1]=el} className='innerImageWrapper a2' >
                        <div className='inner-img-container'>
                            <img src="https://cdn.pixabay.com/photo/2018/03/06/21/09/easter-3204589_640.jpg" alt="img1" />
                        </div>
                        {/* <div className='inner-img-container'>
                            <img src="https://d33wubrfki0l68.cloudfront.net/60d1abdade971ab83baed2ef21fbfa55ad362724/2ed4d/v3/img/build/mcsogf53un-1000.avif" alt="img1" />
                        </div>
                        <div className='inner-img-container'>
                            <img src="https://www.netlify.com/v3/img/build/QmlCE3N_bG-1280.png" alt="img1" />
                        </div> */}
                        </div>
                        <div ref={(el)=>innerScrollImg.current[2]=el} className='innerImageWrapper a3'>
                        <div className='inner-img-container'>
                            <img src="https://cdn.pixabay.com/photo/2018/10/15/17/50/dog-3749561_640.jpg" alt="img1" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        </div>
    </>
  )
}

export default PinnedScroll

