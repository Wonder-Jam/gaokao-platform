import React from 'react'
import Entry from '../components/Entry'
import Slider from '@/pages/HomePage/Slider'
import SmartRecommend from '@/pages/HomePage/SmartRecommend'
import MonthCalendar from '@/pages/HomePage/MonthCalendar'
import PolicyInformation from '@/pages/HomePage/PolicyInformation'
import CommonSense from '@/pages/HomePage/CommonSense'

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
        <div style={{ backgroundColor: '#efefef' }}>
          <div style={headerContainer}>
            <MonthCalendar></MonthCalendar>
            <Slider></Slider>
            <SmartRecommend></SmartRecommend>
          </div>
          <PolicyInformation></PolicyInformation>
          <CommonSense></CommonSense>
        </div>
      </Entry>
    </>
  )
}
