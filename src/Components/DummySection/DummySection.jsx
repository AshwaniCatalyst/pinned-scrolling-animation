"use client";
import React,{useEffect} from 'react'
import './style.css'
import { gsap } from 'gsap'
const DummySection = () => {

useEffect(()=>{
  let anim = gsap.timeline({repeat:20})
  let targets = document.querySelectorAll(".staggeredText div");
  let numberOfTarget = targets.length;
  let pause = 0.5;
  let duration = 0.3;
  let stagger = pause + duration;
  let repeatDelay =(stagger * (numberOfTarget-5))+pause;
  console.log("rr",targets);
  

  gsap.set(".staggeredText",{autoAlpha:1})
  // anim.from(targets,{opacity:1})
  anim.from(targets,{y:0, duration:duration, opacity:1, stagger:{
    each:stagger,
    repeatDelay:repeatDelay,
    repeat:-1
  }})
  .to(targets,{y:-80, duration:duration, opacity:0, stagger:{
    each:stagger,
    repeatDelay:repeatDelay,
    repeat:-1
  }},stagger)
  },[]);

  return (
    <>
    {/* <div className='container'> */}
    <div className='dummySection'>
      <div className='heading'><h1>Dummy Section</h1></div>
        <div className='staggeredText'>
          <div>Eat</div>
          <div>Sleep</div>
          <div>Code</div>
          <div>Repeat</div>
        </div>  
    </div> 
    {/* </div> */}

    </>
  )
}

export default DummySection
