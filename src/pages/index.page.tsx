import React from 'react'
import Intro from '@/pages/HomePage/Intro'
import IndexSearchSchool from '@/pages/HomePage/IndexSearchSchool'
import IndexSearchMajor from '@/pages/HomePage/IndexSearchMajor'
import IndexVideoPlay from '@/pages/HomePage/IndexVideoPlay'
import Footer from '@/pages/HomePage/Footer'
import RootLayout from '@/app/layout'
import IndexHeader from '@/pages/HomePage/IndexHeader'
import { VerticalAlignTopOutlined } from '@ant-design/icons'

export default function Home() {
  let headerContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <>
      <RootLayout>
        <div>
          <IndexHeader></IndexHeader>
          <Intro></Intro>
          <IndexSearchSchool></IndexSearchSchool>
          <IndexSearchMajor></IndexSearchMajor>
          <IndexVideoPlay></IndexVideoPlay>
          <Footer></Footer>
          <ToTop></ToTop>
        </div>
      </RootLayout>
    </>
  )
}

function ToTop() {
  return (
    <div
      style={{
        color: '#000',
        opacity: '.8',
        position: 'fixed',
        zIndex: '100',
        right: '12px',
        bottom: '12px',
        width: '48px',
        borderRadius: '24px',
        height: '48px',
        background: '#fff',
        boxShadow: '0 0 12px rgba(0,0,0,.12)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <VerticalAlignTopOutlined style={{ color: '#92989f' }} />
    </div>
  )
}
