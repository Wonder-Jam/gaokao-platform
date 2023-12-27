import React, { useEffect, useRef, useState } from 'react'
import './IndexSearchMajor.css'
import '../../styles/enterMotion.css'
import { useContainerRef } from '../index.page'
import { Button } from 'antd'
import { usePageNavigation } from '@/hooks/usePageNavigation'

const IndexSearchMajor: React.FC = () => {
  const { goToSearchMajorPage } = usePageNavigation()
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
                    <h1>逻辑学</h1>
                    <em />
                    <p>
                      逻辑学研习中西逻辑史、逻辑学、数理逻辑、思维科学等方面的基本理论和知识，以人类的思维形式及思维规律为研究对象，横跨数学、物理、计算机等多个学科，进行既定命题发生过程的推理和推导等。常见的找规律就是数理逻辑的典型，而数理逻辑也是现代逻辑学的主流。
                    </p>
                    <Button
                      style={{
                        width: '102px',
                        fontWeight: '600',
                        marginLeft: '10px',
                      }}
                      type={'primary'}
                      shape={'round'}
                      size={'large'}
                      onClick={() =>
                        goToSearchMajorPage({
                          name: '逻辑学',
                        })
                      }
                    >
                      了解更多
                    </Button>
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
                    <h1>经济学</h1>
                    <em />
                    <p>
                      经济学主要研究经济学、金融学、投资学、精算学等方面的基本知识和技能，在银行、证券、信托等金融机构进行经济分析、预测、规划、管理以及各类金融服务。例如：债券、基金的投资前景分析，股票、投资的风险评估，汽车、房子的抵押贷款，企业破产时的资产清算等。
                    </p>
                    <Button
                      style={{
                        width: '102px',
                        fontWeight: '600',
                        marginLeft: '10px',
                      }}
                      type={'primary'}
                      shape={'round'}
                      size={'large'}
                      onClick={() =>
                        goToSearchMajorPage({
                          name: '经济学',
                        })
                      }
                    >
                      了解更多
                    </Button>
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
                    <h1>宗教学</h1>
                    <em />
                    <p>
                      宗教学主要研究人类宗教现象及其历史演变，包括各大宗教的历史与理论、人类宗教的起源、宗教与人类其他精神活动的关系、宗教对社会生活的影响、宗教与政治的关系等方面。当今世界主要的宗教有：基督教、伊斯兰教、印度教、犹太教、佛教、道教、神道教等。{' '}
                    </p>
                    <Button
                      style={{
                        width: '102px',
                        fontWeight: '600',
                        marginLeft: '10px',
                      }}
                      type={'primary'}
                      shape={'round'}
                      size={'large'}
                      onClick={() =>
                        goToSearchMajorPage({
                          name: '宗教学',
                        })
                      }
                    >
                      了解更多
                    </Button>
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
                    <h1>互联网金融</h1>
                    <em />
                    <p>
                      互联网金融主要研究现代金融理论、金融科技及互联网金融、管理理论与电子商务技术，进行金融数据分析、金融信息系统分析和设计等。例如：余额宝等投资理财类产品的设计、金融建模，对金融产品进行数据收集于分析管理。
                    </p>
                    <Button
                      style={{
                        width: '102px',
                        fontWeight: '600',
                        marginLeft: '10px',
                      }}
                      type={'primary'}
                      shape={'round'}
                      size={'large'}
                      onClick={() =>
                        goToSearchMajorPage({
                          name: '互联网金融',
                        })
                      }
                    >
                      了解更多
                    </Button>
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
