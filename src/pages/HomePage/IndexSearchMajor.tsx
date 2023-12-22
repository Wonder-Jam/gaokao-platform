import React, { useEffect, useRef, useState } from 'react'
import './IndexSearchMajor.css'
import '../../styles/enterMotion.css'

const IndexSearchMajor: React.FC = () => {
  const elImg1 = useRef(null)
  const elImg2 = useRef(null)
  const elImg3 = useRef(null)
  const elImg4 = useRef(null)

  const eltitle = useRef(null)
  const elintro = useRef(null)
  const eldes1 = useRef(null)
  const eldes2 = useRef(null)
  const eldes3 = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      // @ts-ignore
      const rect = eldes3.current?.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // @ts-ignore
        eltitle.current.classList.add('slideBottom')
        // @ts-ignore
        elintro.current.classList.add('slideTop')
        // @ts-ignore
        eldes1.current.classList.add('slideList1')
        // @ts-ignore
        eldes2.current.classList.add('slideList2')
        // @ts-ignore
        eldes3.current.classList.add('slideList3')

        // @ts-ignore
        elImg1.current.classList.add('motionImg1')
        // @ts-ignore
        elImg2.current.classList.add('motionImg2')
        // @ts-ignore
        elImg3.current.classList.add('motionImg3')
        // @ts-ignore
        elImg4.current.classList.add('motionImg4')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      style={{
        width: 1280,
        height: 500,
        display: 'flex',
        // backgroundColor: '#0f0',
        margin: '50px auto',
      }}
    >
      <div className={'major-des'}>
        <div className={'cards-container'}>
          <div className={'cards'}>
            <div ref={elImg1} className={'card-wrapper'}>
              <div className={'card'}>
                <div className={'card-content is-front'}>
                  <img
                    src="/images/machine.jpg"
                    alt="Magic Image icon"
                    style={{ width: '200px', opacity: 1, borderRadius: 32 }}
                  />
                </div>
                <div className={'card-content is-back'}></div>
              </div>
            </div>

            <div ref={elImg2} className={'card-wrapper'}>
              <div className={'card'}>
                <div className={'card-content is-front'}>
                  <img
                    src="/images/dna.jpg"
                    alt="Magic Image icon"
                    style={{ width: '200px', opacity: 1 }}
                  />
                </div>
                <div className={'card-content is-back'}></div>
              </div>
            </div>

            <div ref={elImg3} className={'card-wrapper'}>
              <div className={'card'}>
                <div className={'card-content is-front'}>
                  <img
                    src="/images/chemistry.jpg"
                    alt="Loading"
                    style={{ width: '200px', opacity: 1 }}
                  />
                </div>
                <div className={'card-content is-back'}></div>
              </div>
            </div>

            <div ref={elImg4} className={'card-wrapper'}>
              <div className={'card'}>
                <div className={'card-content is-front'}>
                  <img
                    src="/images/farmer.jpg"
                    alt="Loading"
                    style={{ width: '200px', opacity: 1 }}
                  />
                </div>
                <div className={'card-content is-back'}></div>
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
          // backgroundColor: '#f00',
          height: '100%',
          width: '45%',
          paddingLeft: 100,
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
              marginBottom: '12px',
              opacity: 0,
              animationDelay: '1s',
            }}
          >
            查专业
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
              animationDelay: '1s',
            }}
          >
            喜欢土木工程怎么办？稳啦！
          </div>

          <ul>
            <li
              ref={eldes1}
              className={'desList'}
              style={{ opacity: 0, animationDelay: '2s' }}
            >
              探索小众专业，发现你的兴趣
            </li>
            <li
              ref={eldes2}
              className={'desList'}
              style={{ opacity: 0, animationDelay: '2.5s' }}
            >
              同屏三栏，专业详情尽在眼前
            </li>
            <li
              ref={eldes3}
              className={'desList'}
              style={{ opacity: 0, animationDelay: '3s' }}
            >
              深度专业解析，选择不再迷茫
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default IndexSearchMajor
