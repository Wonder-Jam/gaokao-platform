import React, { useState } from 'react'
import './IndexSearchMajor.css'

const IndexSearchMajor: React.FC = () => {
  return (
    <div
      style={{
        height: 500,
        marginTop: 50,
        marginLeft: 80,
        display: 'flex',
      }}
    >
      <div className={'major-des'}>
        {/*  气泡  */}
        {/*  <div className={'bubble'}>*/}
        {/*        <div className={'content'}>test</div>*/}
        {/*  </div>*/}
        {/*  翻转卡片  */}
        <div className={'cards'}>
          <div className={'card-wrapper'}>
            <div className={'card'}>
              <div className={'card-content is-front'}>
                <img
                  src="/images/machine.jpg"
                  loading="lazy"
                  alt="Magic Image icon"
                  style={{ width: '200px', opacity: 1 }}
                />
              </div>
              <div className={'card-content is-back'}></div>
            </div>
          </div>
          <div className={'card-wrapper'}>
            <div className={'card'}>
              <div className={'card-content is-front'}>
                <img
                  src="/images/dna.jpg"
                  loading="lazy"
                  alt="Magic Image icon"
                  style={{ width: '200px', opacity: 1 }}
                />
              </div>
              <div className={'card-content is-back'}></div>
            </div>
          </div>
          <div className={'card-wrapper'}>
            <div className={'card'}>
              <div className={'card-content is-front'}>
                <img
                  src="/images/chemistry.jpg"
                  loading="lazy"
                  alt="Magic Image icon"
                  style={{ width: '200px', opacity: 1 }}
                />
              </div>
              <div className={'card-content is-back'}>
                <p style={{ zIndex: 10 }}>化学</p>
                <div>dfasfds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#f00',
          height: '100%',
          width: '45%',
          // paddingLeft: 50
        }}
      >
        <div style={{ position: 'absolute', left: '10px', marginLeft: '30px' }}>
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
            查专业
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
            喜欢土木工程怎么办？稳啦！
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexSearchMajor
