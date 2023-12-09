import React, {useEffect, useState} from 'react'
import Entry from '../components/Entry'
import PolicyInformation from '@/pages/HomePage/PolicyInformation'
import CommonSense from '@/pages/HomePage/CommonSense'
import Intro from "@/pages/HomePage/Intro"
import IndexHeader from "@/pages/HomePage/IndexHeader"
import IndexSearchSchool from "@/pages/HomePage/IndexSearchSchool";

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
            <IndexHeader></IndexHeader>
          <Intro></Intro>
          {/*<IndexSearchSchool></IndexSearchSchool>*/}
          <PolicyInformation></PolicyInformation>
          <CommonSense></CommonSense>
        </div>
      </Entry>
    </>
  )
}


