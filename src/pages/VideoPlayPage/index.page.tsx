import React from 'react'
import RootLayout from '@/app/layout'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { CardListContainer, ToggleContainer } from './style'
import { useSlideAnimation } from '@/hooks/useSlideAnimation'
import { VideoSchoolList } from './data'
import { useToggle } from 'ahooks'
import { HotSpotTopicContainer } from './components/HotSpotList'
import { MaskContext } from './context/MaskContext'
import { CardDetail } from './components/CardDetai'
import { CardItem } from './components/CardItem'
import { MaskContainer } from './components/MaskContainer'

export default function VideoPlayPage() {
  const cardItems = VideoSchoolList.map((item, index) => (
    <CardItem key={item.schoolName + '' + index} {...item} index={index} />
  ))
  const PageRef = React.useRef<HTMLDivElement>(null)
  const [isShown, { toggle }] = useToggle(true)
  const [maskShown, setMaskShown] = React.useState<boolean>(false)
  const [targetIndex, setTargetIndex] = React.useState(0)
  const [targetRef, setTargetRef] = React.useState<
    React.RefObject<HTMLDivElement>
  >(React.createRef())
  const Animation = useSlideAnimation({
    targetRef: targetRef,
    direction: maskShown ? 'slide-in' : 'slide-out',
    pageRef: PageRef,
    contentNode: <CardDetail {...VideoSchoolList[targetIndex]} />,
  })

  return (
    <div style={{ height: '100%', width: '100%' }} ref={PageRef}>
      <MaskContext.Provider
        value={{
          shown: maskShown,
          toggle: setMaskShown,
          setTargetIndex,
          setTargetRef,
        }}
      >
        <RootLayout>
          <div style={{ display: 'flex', height: '100%', width: '100%' }}>
            <CardListContainer>{cardItems}</CardListContainer>
            <ToggleContainer onClick={toggle} show={isShown}>
              {isShown ? <RightOutlined /> : <LeftOutlined />}
            </ToggleContainer>
            <HotSpotTopicContainer show={isShown} />
          </div>
        </RootLayout>
      </MaskContext.Provider>
      <MaskContainer isShown={maskShown} setShow={setMaskShown}>
        {Animation}
      </MaskContainer>
    </div>
  )
}
