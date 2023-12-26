import React, { useEffect, useRef } from 'react'
import './IndexVideoPlay.css'
import '../../styles/enterMotion.css'
import { useContainerRef } from '../index.page'

const IndexVideoPlay: React.FC = () => {
  const elVideo1 = useRef<HTMLDivElement>(null)
  const elVideo2 = useRef<HTMLDivElement>(null)
  const elVideo3 = useRef<HTMLDivElement>(null)
  const elVideo4 = useRef<HTMLDivElement>(null)

  const eltitle = useRef(null)
  const elintro = useRef(null)
  const containerRef = useContainerRef()

  useEffect(() => {
    if (!containerRef.current) return

    const handleScroll = () => {
      // @ts-ignore
      const rect = elVideo4.current?.getBoundingClientRect()
      if (!containerRef.current) return
      // @ts-ignore
      if (rect.top < containerRef.current.clientHeight && rect.bottom >= 0) {
        // @ts-ignore
        eltitle.current.classList.add('slideEnter')
        // @ts-ignore
        elintro.current.classList.add('slideEnter')

        // @ts-ignore
        elVideo1.current.classList.add('mot-1')
        // @ts-ignore
        elVideo2.current.classList.add('mot-2')
        // @ts-ignore
        elVideo3.current.classList.add('mot-3')
        // @ts-ignore
        elVideo4.current.classList.add('mot-4')
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
            大学宣传资讯，应有尽有!
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
