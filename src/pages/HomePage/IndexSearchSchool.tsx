// "use client"

import React, { useEffect, useRef, useState } from 'react'
import './IndexSearchSchool.css'
import { SearchOutlined } from '@ant-design/icons'
import Typed from 'typed.js'

const IndexSearchSchool: React.FC = () => {
  return (
    <div
      style={{
        width: '1280px',
        height: 500,
        // backgroundColor: '#00f',
        display: 'flex',
        margin: '0 auto',
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
        <div
          style={
            {
              // position: 'absolute',
              // right: '30px'
            }
          }
        >
          <p
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
            }}
          >
            查学校
          </p>

          <div
            style={{
              lineHeight: 1.15,
              fontFamily:
                'Gilroy-regular,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
              margin: 0,
              padding: 0,
              fontSize: '20px',
              letterSpacing: '.02em',
              color: '#777e87',
            }}
          >
            猜猜它们都是哪个大学的？
          </div>

          <ul>
            <li className={'desList'}>独特交互式地图指引，了解大学地理全貌</li>
            <li className={'desList'}>从GDP、教育经费等筛选，增加择校维度</li>
            <li className={'desList'}>全面精炼信息展示，迅速掌握大学概况</li>
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
      <div className={'img0'} style={{ zIndex: 9 }}>
        <img
          src="/images/c3.jpg"
          alt="loading"
          style={{
            width: '280px',
            opacity: 1,
            borderRadius: '32px',
          }}
        />
      </div>
      <div className={'img1'}></div>
      <div className={'img2'}></div>
      <div className={'img3'}></div>
      <div
        style={{
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
