import React, { useEffect, useState } from 'react'
import { Button, Image } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons'
import './IndexHeader.css'

const IndexHeader: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={'header-wrapper'}>
      <div
        style={{
          width: '38%',
          height: '100%',
          borderRadius: 30,
          overflow: 'hidden',
          // backgroundColor: '#00f',
        }}
      >
        <Slider indexActive={activeIndex}></Slider>
      </div>

      <div
        style={{
          width: '30%',
          // backgroundColor: '#efefef'
        }}
      >
        <Description indexActive={activeIndex}></Description>
      </div>

      <div
        style={{
          position: 'relative',
          left: '-5%',
          display: 'flex',
          width: '40px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#f00',
        }}
      >
        <ProgressBar
          indexActive={activeIndex}
          onChange={() => setActiveIndex(activeIndex == 0 ? 1 : 0)}
        ></ProgressBar>
      </div>
    </div>
  )
}

const Slider: React.FC<{ indexActive: number }> = ({ indexActive }) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient ? (
        <QueueAnim>
          <div key={'img'}>
            {indexActive === 0 && (
              <QueueAnim type={['bottom', 'top']} duration={2000} key={'img0'}>
                <div
                  key={'img1'}
                  style={{ borderRadius: 30, overflow: 'hidden' }}
                >
                  <Image
                    height={'100%'}
                    width={'100%'}
                    src={'/images/slider1.jpg'}
                  ></Image>
                </div>
              </QueueAnim>
            )}
            {indexActive === 1 && (
              <QueueAnim type={['bottom', 'top']} duration={2000} key={'img1'}>
                <div
                  key={'img2'}
                  style={{ borderRadius: 30, overflow: 'hidden' }}
                >
                  <Image
                    height={'100%'}
                    width={'100%'}
                    src={'/images/slider3.jpg'}
                  ></Image>
                </div>
              </QueueAnim>
            )}
          </div>
        </QueueAnim>
      ) : (
        <></>
      )}
    </>
  )
}

const ProgressBar: React.FC<{ indexActive: number; onChange: () => void }> = ({
  indexActive,
  onChange,
}) => {
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)
  const [isAuto, setIsAuto] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress1(prevProgress1 => {
        if (!isAuto) {
          if (indexActive === 0) {
            return 100
          } else {
            return 0
          }
        }
        if (prevProgress1 == 102) {
          onChange()
          return 0
        } else if (indexActive == 0) {
          return prevProgress1 + 2
        } else {
          return prevProgress1
        }
      })
      setProgress2(prevProgress2 => {
        if (!isAuto) {
          if (indexActive === 1) {
            return 100
          } else {
            return 0
          }
        }
        if (prevProgress2 == 102) {
          onChange()
          return 0
        } else if (indexActive == 1) {
          return prevProgress2 + 2
        } else {
          return prevProgress2
        }
      })
    }, 80)

    return () => clearInterval(intervalId)
  }, [indexActive, isAuto])

  return (
    <>
      <div
        style={{
          overflow: 'hidden',
          height: '120px',
          width: '100%',
          cursor: 'pointer',
        }}
        onClick={() => {
          if (indexActive == 1) {
            onChange()
            setProgress2(0)
          }
          setIsAuto(!isAuto)
        }}
      >
        <div
          style={{
            backgroundColor: '#cbd2d9',
            width: '4px',
            height: '100%',
            margin: '0 auto',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              borderRadius: '10px',
              width: '4px',
              margin: '0 auto',
              height: `${progress1}%`,
              background: '#0064e0',
              transition: 'height 0.08s',
            }}
          ></div>
        </div>
      </div>

      <div
        style={{
          overflow: 'hidden',
          height: '120px',
          marginTop: 10,
          marginBottom: 12,
          cursor: 'pointer',
          width: '100%',
        }}
        onClick={() => {
          if (indexActive == 0) {
            onChange()
            setProgress1(0)
          }
          setIsAuto(!isAuto)
        }}
      >
        <div
          style={{
            backgroundColor: '#cbd2d9',
            width: '4px',
            height: '100%',
            margin: '0 auto',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              borderRadius: '10px',
              margin: '0 auto',
              width: '4px',
              height: `${progress2}%`,
              background: '#0064e0',
              transition: 'height 0.08s',
            }}
          ></div>
        </div>
      </div>

      <div onClick={() => setIsAuto(!isAuto)} style={{ cursor: 'pointer' }}>
        {isAuto ? (
          <PauseCircleOutlined style={{ color: '#666' }} />
        ) : (
          <PlayCircleOutlined style={{ color: '#666' }} />
        )}
      </div>
    </>
  )
}

const Description: React.FC<{ indexActive: number }> = ({ indexActive }) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'column',
        // justifyContent: "center",
        alignItems: 'center',
        height: '100%',
        // backgroundColor: '#0f0'
      }}
    >
      <div>
        {isClient ? (
          <QueueAnim>
            <div key={'img'}>
              {indexActive === 0 && (
                <QueueAnim
                  type={['right', 'left']}
                  duration={3000}
                  key={'img1'}
                >
                  <div key={'1'}>
                    <div
                      key={'title'}
                      style={{ fontSize: 40, fontWeight: 520 }}
                    >
                      九乡河文理学院
                    </div>
                    <div
                      key={'content'}
                      style={{ fontSize: 14, marginTop: 10, marginBottom: 10 }}
                    >
                      九乡河文理学院是一所历史悠久、声誉卓著的高等学府。
                    </div>
                    <div key={'button'}>
                      <Button
                        style={{ width: '102px', fontWeight: '600' }}
                        type={'primary'}
                        shape={'round'}
                        size={'large'}
                      >
                        了解更多
                      </Button>
                    </div>
                  </div>
                </QueueAnim>
              )}
              {indexActive === 1 && (
                <QueueAnim
                  type={['right', 'left']}
                  duration={3000}
                  key={'img2'}
                >
                  <div key={'2'}>
                    <div
                      key={'title'}
                      style={{ fontSize: 40, fontWeight: 520 }}
                    >
                      南哪儿大学
                    </div>
                    <div
                      key={'content'}
                      style={{ fontSize: 14, marginTop: 10, marginBottom: 10 }}
                    >
                      “你是在南京哪个大学？”
                    </div>
                    <div key={'button'}>
                      <Button
                        style={{ width: '104px', fontWeight: '600' }}
                        type={'primary'}
                        shape={'round'}
                        size={'large'}
                      >
                        了解更多
                      </Button>
                    </div>
                  </div>

                  {/*<div key="a">Queue Demo</div>*/}
                  {/*<div key="b">Queue Demo</div>*/}
                  {/*<div key="c">Queue Demo</div>*/}
                  {/*<div key="d">Queue Demo</div>*/}
                </QueueAnim>
              )}
            </div>
          </QueueAnim>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default IndexHeader
