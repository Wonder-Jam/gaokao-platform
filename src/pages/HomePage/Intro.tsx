import useScrollAnimationEffect from '@/hooks/useScrollAnimationEffect'
import React, { useRef } from 'react'
import '../../styles/enterMotion.css'
import { useContainerRef } from '../index.page'
import './Intro.css'

const Intro: React.FC = () => {
  const el = useRef(null)
  const elContent1 = useRef(null)
  const elContent2 = useRef(null)
  const elContent3 = useRef(null)
  const containerRef = useContainerRef()
  useScrollAnimationEffect(
    containerRef,
    new Map([
      [el, 'slideTopTitle'],
      [elContent1, 'slideTopContent1'],
      [elContent2, 'slideTopContent2'],
      [elContent3, 'slideTopContent3'],
    ]),
  )

  return (
    <div
      style={{
        width: '100vw',
      }}
    >
      <div className={'title'} ref={el}>
        Go School
      </div>
      <div className={'mainbody-wrapper'}>
        <div className={'mainbody'}>
          <h1 className={'mainbody-inner'}>
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
