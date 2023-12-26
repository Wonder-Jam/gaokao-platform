import React, { useEffect, useRef, useState } from 'react'
import './IndexSearchMajor.css'
import '../../styles/enterMotion.css'
import { useContainerRef } from '../index.page'

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
  const containerRef = useContainerRef()

  useEffect(() => {
    if (!containerRef.current) return
    const handleScroll = () => {
      // @ts-ignore
      const rect = eldes3.current?.getBoundingClientRect()
      if (!containerRef.current) return
      if (rect.top < containerRef.current.clientHeight && rect.bottom >= 0) {
        // @ts-ignore
        eltitle.current.classList.add('slideEnter')
        // @ts-ignore
        elintro.current.classList.add('slideEnter')
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
    containerRef.current.addEventListener('scroll', handleScroll)
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div
      style={{
        // width: 1280,
        width: '100vw',
        height: '500px',
        display: 'flex',
        // backgroundColor: '#0f0',
        // margin: '50px auto',
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
                <div className={'card-content is-back'}>
                  <div className={'text-wrapper'}>
                    <h1>机械工程</h1>
                    <em />
                    <p>
                      机械工程（Mechanical
                      Engineering）是一门利用物理定律和化学规律为机械系统作分析、设计、制造及维修的工程学科。机械工程是以有关的自然科学和技术科学为理论基础，结合生产实践中的技术经验，研究和解决在开发、设计、制造、安装、运用和维修各种机械中的全部理论和实际问题的应用学科。
                    </p>
                  </div>
                </div>
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
                <div className={'card-content is-back'}>
                  <div className={'text-wrapper'}>
                    <h1>生物学</h1>
                    <em />
                    <p>
                      生物学（biology）是探索生命现象和生命活动规律的科学，是自然科学中的一门基础学科。
                      [6]其研究对象是生物（包括植物、动物和微生物）的结构、功能、发生和发展规律。其目的在于阐明和控制生命活动，改造自然，为农业、工业和医学等实践服务。
                    </p>
                  </div>
                </div>
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
                <div className={'card-content is-back'}>
                  <div className={'text-wrapper'}>
                    <h1>化学</h1>
                    <em />
                    <p>
                      化学（chemistry）是在原子、分子水平上研究物质的组成、结构、性质、转化及其应用的基础自然科学。它源自生活和生产实践，并随着人类社会的进步而不断发展。
                    </p>
                  </div>
                </div>
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
                <div className={'card-content is-back'}>
                  <div className={'text-wrapper'}>
                    <h1>农学</h1>
                    <em />
                    <p>
                      农学（Agriculture），是农业科学领域的传统学科，
                      以解决人类的“吃饭穿衣”为首要己任。随着农业科技创新速度的不断加快，生物技术和信息技术的飞速发展及其在农业中的广泛应用，农学在保持传统特色的基础上，正焕发着勃勃生机。
                    </p>
                  </div>
                </div>
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
              // animationDelay: '1s',
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
              // animationDelay: '1s',
            }}
          >
            喜欢土木工程怎么办？稳啦！
          </div>

          <ul>
            <li
              ref={eldes1}
              className={'desList'}
              style={{ opacity: 0, animationDelay: '1s' }}
            >
              小众专业，尽情探索你的兴趣
            </li>
            <li
              ref={eldes2}
              className={'desList'}
              style={{ opacity: 0, animationDelay: '1.5s' }}
            >
              同屏三栏，专业详情尽在眼前
            </li>
            <li
              ref={eldes3}
              className={'desList'}
              style={{ opacity: 0, animationDelay: '2s' }}
            >
              深度解析，从此选择不再迷茫
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default IndexSearchMajor
