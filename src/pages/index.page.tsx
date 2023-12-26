import React, {
  RefObject,
  createContext,
  createRef,
  useContext,
  useEffect,
  useRef,
} from 'react'
import Intro from '@/pages/HomePage/Intro'
import IndexSearchSchool from '@/pages/HomePage/IndexSearchSchool'
import IndexSearchMajor from '@/pages/HomePage/IndexSearchMajor'
import IndexVideoPlay from '@/pages/HomePage/IndexVideoPlay'
import Footer from '@/pages/HomePage/Footer'
import RootLayout from '@/app/layout'
import IndexHeader from '@/pages/HomePage/IndexHeader'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import './index.css'
import Test from '@/pages/HomePage/Test'

export const ContainerContext = createContext<{
  containerRef: RefObject<HTMLDivElement>
}>({ containerRef: createRef() })
export const useContainerRef = () => useContext(ContainerContext).containerRef
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <RootLayout>
        <div
          ref={containerRef}
          className={'scrollContainer'}
          // style={{ width: '100%', height: '100%', overflow: 'auto' }}
        >
          <ContainerContext.Provider
            value={{
              containerRef: containerRef,
            }}
          >
            {/*<div className={'section'}><IndexHeader></IndexHeader></div>*/}
            {/*<div className={'section'}><Intro></Intro></div>*/}
            {/*<div className={'section'}><IndexSearchSchool></IndexSearchSchool></div>*/}
            {/*<div className={'section'}><IndexSearchMajor></IndexSearchMajor></div>*/}
            {/*<div className={'section'}><IndexVideoPlay></IndexVideoPlay></div>*/}
            <section>
              <IndexHeader></IndexHeader>
            </section>
            {/*<section><Test></Test></section>*/}
            <section>
              <Intro></Intro>
            </section>
            <section>
              <IndexSearchSchool></IndexSearchSchool>
            </section>
            <section>
              <IndexSearchMajor></IndexSearchMajor>
            </section>
            <section>
              <IndexVideoPlay></IndexVideoPlay>
            </section>
            <Footer></Footer>
            <ToTop></ToTop>
          </ContainerContext.Provider>
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
