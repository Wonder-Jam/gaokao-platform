import React, {useEffect, useState} from 'react'
import Entry from '../components/Entry'
import Slider from '@/pages/HomePage/Slider'
import SmartRecommend from '@/pages/HomePage/SmartRecommend'
import MonthCalendar from '@/pages/HomePage/MonthCalendar'
import PolicyInformation from '@/pages/HomePage/PolicyInformation'
import CommonSense from '@/pages/HomePage/CommonSense'
import Intro from "@/pages/HomePage/Intro"
import IndexHeader from "@/pages/HomePage/IndexHeader"
import QueueAnim from "rc-queue-anim";


const Mytest:React.FC = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return <>{isClient?<QueueAnim>
    <div key="demo1">依次进场</div>
    <div key="demo2">依次进场</div>
    <div key="demo3">依次进场</div>
    <div key="demo4">依次进场</div>
  </QueueAnim>:<></>}</>
}

export default function Home() {
  let headerContainer: React.CSSProperties = {
    // backgroundColor: "#ff0000",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }


  return (
    <>
      <Entry>
        <div>
            {/*<Mytest></Mytest>*/}
            <IndexHeader></IndexHeader>
          {/*<div style={headerContainer}>*/}
          {/*  <MonthCalendar></MonthCalendar>*/}
          {/*  <Slider></Slider>*/}
          {/*  <SmartRecommend></SmartRecommend>*/}
          {/*</div>*/}
          <Intro></Intro>
          <PolicyInformation></PolicyInformation>
          <CommonSense></CommonSense>
        </div>
      </Entry>
    </>
  )
}


