import useScrollAnimationEffect from '@/hooks/useScrollAnimationEffect'
import React, { useRef } from 'react'
import '../../styles/enterMotion.css'
import { useContainerRef } from '../index.page'
import './IndexVideoPlay.css'

const IndexVideoPlay: React.FC = () => {
  const elVideo1 = useRef<HTMLDivElement>(null)
  const elVideo2 = useRef<HTMLDivElement>(null)
  const elVideo3 = useRef<HTMLDivElement>(null)
  const elVideo4 = useRef<HTMLDivElement>(null)

  const eltitle = useRef(null)
  const elintro = useRef(null)
  const containerRef = useContainerRef()
  useScrollAnimationEffect(
    containerRef,
    new Map([
      [eltitle, 'slideEnter'],
      [elintro, 'slideEnter'],
      [elVideo1, 'mot-1'],
      [elVideo2, 'mot-2'],
      [elVideo3, 'mot-3'],
      [elVideo4, 'mot-4'],
    ]),
  )
  return (
    <div
      style={{
        width: 1280,
        height: 500,
        // backgroundColor: '#00f',
        margin: '0px auto',
        marginBottom: '100px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: "center",
          // backgroundColor: '#f00',
          height: '20%',
          width: '83%',
          margin: '0 auto',
          marginTop: '40px',
          marginBottom: '14px',
          // paddingLeft: 50
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
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
                // animationDelay: '1.5s',
                opacity: 0,
              }}
            >
              看一看
            </p>
          </div>
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
              // animationDelay: '2s',
              opacity: 0,
            }}
          >
            你想了解的大学，这里都有
          </div>
        </div>
      </div>

      <div
        style={{
          // backgroundColor: '#0f0',
          height: '69%',
          width: '84%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div ref={elVideo1} className={'video-1'}>
          <video autoPlay loop muted height={'100%'}>
            <source src="/love.mp4" type="video/mp4" />
            Net error
          </video>
        </div>

        <div ref={elVideo2} className={'video-2'}>
          <video
            autoPlay
            loop
            muted
            width={'100%'}
            style={{ position: 'absolute', top: '-54px' }}
          >
            <source src="/cat.mp4" type="video/mp4" />
            Net error
          </video>
        </div>

        <div className={'video-group'}>
          <div ref={elVideo3} className={'video-3'}>
            <video
              autoPlay
              loop
              muted
              width={'104%'}
              style={{ position: 'absolute', top: '-26px' }}
            >
              <source src="/xjy.mp4" type="video/mp4" />
              Net error
            </video>
          </div>

          <div ref={elVideo4} className={'video-4'}>
            <video
              autoPlay
              loop
              muted
              width={'104%'}
              style={{ position: 'absolute', top: '-26px' }}
            >
              <source src="/quick.mp4" type="video/mp4" />
              Net error
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexVideoPlay
