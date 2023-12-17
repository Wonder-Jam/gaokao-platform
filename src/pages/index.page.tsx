import React, { useEffect, useState } from 'react'
import CommonSense from '@/pages/HomePage/CommonSense'
import Intro from '@/pages/HomePage/Intro'
import IndexSearchSchool from '@/pages/HomePage/IndexSearchSchool'
import IndexSearchMajor from '@/pages/HomePage/IndexSearchMajor'
import IndexVideoPlay from '@/pages/HomePage/IndexVideoPlay'
import Footer from '@/pages/HomePage/Footer'
import RootLayout from '@/app/layout'
import IndexHeader from "@/pages/HomePage/IndexHeader";

export default function Home() {
  let headerContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <>
      {/* <Entry> */}
      <RootLayout>
        <div>
          <IndexHeader></IndexHeader>
          <Intro></Intro>
          <IndexSearchSchool></IndexSearchSchool>
          <IndexSearchMajor></IndexSearchMajor>
          <IndexVideoPlay></IndexVideoPlay>
          <CommonSense></CommonSense>
          <Footer></Footer>
        </div>
      </RootLayout>
      {/* </Entry> */}
    </>
  )
}
