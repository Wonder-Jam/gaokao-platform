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

export const ContainerContext = createContext<{
  containerRef: RefObject<HTMLDivElement>
}>({ containerRef: createRef() })
export const useContainerRef = () => useContext(ContainerContext).containerRef
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const handleScroll = () => {
      // @ts-ignore
      containerRef.current.classList.add('scrollContainer')
    }
    containerRef.current.addEventListener('scroll', handleScroll)
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <>
      <RootLayout>
        <div
          ref={containerRef}
          className={'test'}
          // style={{ width: '100%', height: '100%', overflow: 'auto' }}
        >
          <ContainerContext.Provider
            value={{
              containerRef: containerRef,
            }}
          >
            <section>
              <IndexHeader></IndexHeader>
            </section>
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
  const containerRef = useContainerRef()
  return (
    <div
      onClick={() => {
        if (!containerRef.current) {
          return
        } else {
          containerRef.current.scrollTo({
            top: 0,
          })
          // console.log('containerRef.current.scrollTop', containerRef.current.clientHeight)
        }
      }}
      className={'toTop'}
    >
      <VerticalAlignTopOutlined style={{ color: '#92989f' }} />
    </div>
  )
}
