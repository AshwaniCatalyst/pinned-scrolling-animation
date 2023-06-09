// import Image from 'next/image'
// import styles from './page.module.css'
import DummySection from '@/Components/DummySection/DummySection'
// import ScrollSection from '@/Components/ScrollSection/ScrollSection'
import PinnedScroll from '@/Components/PinnedScroll/PinnedScroll'

export default function Home() {
  return (
   <>
   <DummySection/>
   {/* <ScrollSection/> */}
   <PinnedScroll/>
   <DummySection/>
   </>
  )
}
