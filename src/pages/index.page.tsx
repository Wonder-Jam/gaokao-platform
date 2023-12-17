import React, {useEffect, useState} from 'react'
import Entry from '../components/Entry'
import PolicyInformation from '@/pages/HomePage/PolicyInformation'
import CommonSense from '@/pages/HomePage/CommonSense'
import Intro from "@/pages/HomePage/Intro"
import IndexHeader from "@/pages/HomePage/IndexHeader"
import IndexSearchSchool from "@/pages/HomePage/IndexSearchSchool";
import IndexSearchMajor from "@/pages/HomePage/IndexSearchMajor";
import IndexVideoPlay from "@/pages/HomePage/IndexVideoPlay";
import Footer from "@/pages/HomePage/Footer";

export default function Home() {
  let headerContainer: React.CSSProperties = {
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
          <IndexSearchSchool></IndexSearchSchool>
          <IndexSearchMajor></IndexSearchMajor>
          <IndexVideoPlay></IndexVideoPlay>
          {/*<PolicyInformation></PolicyInformation>*/}
          <CommonSense></CommonSense>
          <Footer></Footer>
        </div>
      </Entry>
    </>
  )
}


