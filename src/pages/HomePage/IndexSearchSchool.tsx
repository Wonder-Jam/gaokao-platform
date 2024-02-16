// "use client"

import useScrollAnimationEffect from '@/hooks/useScrollAnimationEffect'
import { SearchOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import '../../styles/enterMotion.css'
import { useContainerRef } from '../index.page'
import './IndexSearchSchool.css'

const IndexSearchSchool: React.FC = () => {
  const eltitle = useRef(null)
  const elintro = useRef(null)
  const eldes1 = useRef(null)
  const eldes2 = useRef(null)
  const eldes3 = useRef(null)
  const containerRef = useContainerRef()
  useScrollAnimationEffect(
    containerRef,
    new Map([
      [eltitle, 'slideEnter'],
      [elintro, 'slideEnter'],
      [eldes1, 'slideList1'],
      [eldes2, 'slideList2'],
      [eldes3, 'slideList3'],
    ]),
  )

  return (
    <div
      style={{
        // width: '1280px',
        width: '100vw',
        height: 500,
        // height: '92vh',
        // backgroundColor: '#00f',
        display: 'flex',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#f00',
          height: '100%',
          width: '40%',
          paddingLeft: 130,
          position: 'relative',
        }}
      >
        <div>
          <p
            ref={eltitle}
            style={{
              lineHeight: 1.15,
              // color: '#000',
              fontFamily:
                'Gilroy-regular,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
              margin: 0,
              padding: 0,
              fontWeight: 'bold',
              fontSize: '38px',
              letterSpacing: '.02em',
              marginBottom: '10px',
              opacity: 0,
              // animationDelay: '3.3s',
            }}
          >
            查学校
          </p>

          <div
            ref={elintro}
            style={{
              lineHeight: 1.15,
              fontFamily:
                'Gilroy-regular,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
              margin: 0,
              padding: 0,
              fontSize: '20px',
              letterSpacing: '.02em',
              color: '#777e87',
              opacity: 0,
              // animationDelay: '3.3s',
            }}
          >
            猜猜它们都是哪个大学的？
          </div>

          <ul>
            <li
              ref={eldes1}
              className={'desList'}
              style={{ animationDelay: '3.3s' }}
            >
              独特交互式地图，轻松了解大学地理全貌
            </li>
            <li
              ref={eldes2}
              className={'desList'}
              style={{ animationDelay: '3.8s' }}
            >
              从GDP开始筛选，增加择校考虑条件维度
            </li>
            <li
              ref={eldes3}
              className={'desList'}
              style={{ animationDelay: '4.3s' }}
            >
              精而全信息展示，从此不再担心有信息差
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          // backgroundColor: '#0f0',
          width: '60%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          top: 10,
        }}
      >
        <ImgIntro></ImgIntro>
      </div>
    </div>
  )
}

const ImgIntro: React.FC = () => {
  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['世界第一', '全国第二'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const elImg1 = useRef(null)
  const elImg2 = useRef(null)
  const elImg3 = useRef(null)
  const elImg0 = useRef(null)
  const elSearch = useRef(null)
  const containerRef = useContainerRef()

  useScrollAnimationEffect(
    containerRef,
    new Map([
      [elImg0, 'occur'],
      [elImg1, 'slide1'],
      [elImg2, 'slide2'],
      [elImg3, 'slide3'],
      [elSearch, 'occurSearch'],
    ]),
  )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <div ref={elImg0} className={'img0'} style={{ zIndex: 9, opacity: 0 }}>
        <Image
          src="/images/c3.jpg"
          alt="loading"
          width={280}
          height={400}
          style={{
            opacity: 1,
            borderRadius: '32px',
          }}
        />
      </div>
      <div ref={elImg1} className={'img1'}></div>
      <div ref={elImg2} className={'img2'}></div>
      <div ref={elImg3} className={'img3'}></div>
      <div
        ref={elSearch}
        onClick={() => window.open('https://software.nju.edu.cn/', '_blank')}
        style={{
          opacity: 0,
          position: 'absolute',
          zIndex: 100,
          width: 180,
          height: 46,
          borderRadius: 32,
          backgroundColor: '#efefef',
          display: 'flex',
          alignItems: 'center',
          left: 150,
          top: 120,
          cursor: 'pointer',
        }}
      >
        <div style={{ position: 'relative', left: 15 }}>
          <SearchOutlined />
          <span>&ensp;&ensp;&ensp;</span>
        </div>

        <span ref={el} style={{ color: '#777e87' }}></span>
      </div>
    </div>
  )
}

export default IndexSearchSchool
