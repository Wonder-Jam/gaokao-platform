// "use client"

import React, { useEffect, useState } from 'react'
import './IndexSearchSchool.css'
import { SearchOutlined } from '@ant-design/icons'

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
            <li>1</li>
            <li>2</li>
            <li>3</li>
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
          src="/images/slider3.jpg"
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
          justifyContent: 'center',
          alignItems: 'center',
          left: 150,
          top: 120,
        }}
      >
        <SearchOutlined />
        <span>&ensp;南京带学</span>
        <span className={'flicker'}>__</span>
      </div>
    </div>
  )
}

export default IndexSearchSchool
