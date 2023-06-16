import React from 'react'
// import LocomotiveScroll from 'locomotive-scroll'
import DummySection from '@/Components/DummySection/DummySection'
import PinnedScroll from '@/Components/PinnedScroll/PinnedScroll'
const HomePage = () => {
    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth:true
    //   })
  return (
    <>
    {/* <div data-scroll-container>
    <div data-scroll-section> */}
    <DummySection/>
    {/* </div>
    <div data-scroll-section> */}
    <PinnedScroll/>
    {/* </div>
    <div data-scroll-section> */}
    <DummySection/>
    {/* </div>
</div>  */}
    </>
  )
}

export default HomePage
