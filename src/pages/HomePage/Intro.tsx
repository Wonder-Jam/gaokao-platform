import React, { useEffect, useRef } from 'react'
import './Intro.css'
import '../../styles/enterMotion.css'
import { useContainerRef } from '../index.page'

const Intro: React.FC = () => {
  const el = useRef(null)
  const elContent1 = useRef(null)
  const elContent2 = useRef(null)
  const elContent3 = useRef(null)
  const containerRef = useContainerRef()
  useEffect(() => {
    if (!containerRef?.current) return
    const handleScroll = () => {
      if (!containerRef?.current) return
      const scrollPosition = containerRef?.current?.scrollTop
      // @ts-ignore
      const elementPosition = elContent3.current?.offsetTop || 0
      // console.log('scrollY: ', scrollPosition)
      // console.log('offsetTop: ', elementPosition)
      if (
        scrollPosition >
        elementPosition - containerRef.current.clientHeight
      ) {
        // @ts-ignore
        el.current.classList.add('slideTopTitle')
        // @ts-ignore
        elContent1.current.classList.add('slideTopContent1')
        // @ts-ignore
        elContent2.current.classList.add('slideTopContent2')
        // @ts-ignore
        elContent3.current.classList.add('slideTopContent3')
      }
    }
    console.log('ref success')
    containerRef.current.addEventListener('scroll', handleScroll)

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [containerRef])

  return (
    <div
      style={{
        // backgroundColor: '#efefef',
        width: '1280px',
        margin: '200px auto 230px',
      }}
    >
      <div className={'title'} ref={el}>
        Go School
      </div>

      <div className={'mainbody-wrapper'}>
        <div className={'mainbody'}>
          <h1 className={'mainbody-inner'}>
            {/*GoSchool provides high school graduates with a search function for*/}
            {/*universities and their majors <br />across China, as well as <br/>a style*/}
            {/*display.*/}
            <span ref={elContent1} className={'content'}>
              GoSchool 平台提供便利的大学及专业信息检索功能
            </span>
            <span ref={elContent2} className={'content'}>
              若你在面对众多选择时仍暂无头绪
            </span>
            <span ref={elContent3} className={'content'}>
              不妨去“看一看”吧！
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Intro
