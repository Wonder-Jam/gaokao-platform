import React from 'react'
import RootLayout from '@/app/layout'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { CardListContainer, IconContainer, ToggleContainer } from './style'
import { useSlideAnimation } from '@/hooks/useSlideAnimation'
import { VideoSchoolList, VideoSchoolType } from './data'
import { useToggle } from 'ahooks'
import { HotSpotTopicContainer } from './components/HotSpotList'
import { MaskContext } from './context/MaskContext'
import { CardDetail } from './components/CardDetail'
import { CardItem } from './components/CardDetail/CardItem'
import { MaskContainer } from './components/MaskContainer'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Skeleton } from 'antd'

export default function VideoPlayPage() {
  const PageRef = React.useRef<HTMLDivElement>(null)
  const [isShown, { toggle }] = useToggle(true)
  const [maskShown, setMaskShown] = React.useState<boolean>(false)
  const [targetIndex, setTargetIndex] = React.useState(0)
  const [targetRef, setTargetRef] = React.useState<
    React.RefObject<HTMLDivElement>
  >(React.createRef())
  const [data, setData] = React.useState<VideoSchoolType[]>(VideoSchoolList)
  const LoadingMore = React.useCallback(() => {
    setTimeout(() => {
      setData(prev => [...prev, ...VideoSchoolList])
    }, 1000)
  }, [])
  const cardItems = data.map((item, index) => (
    <CardItem key={item.schoolName + '' + index} {...item} index={index} />
  ))
  const Animation = useSlideAnimation({
    targetRef: targetRef,
    direction: maskShown ? 'slide-in' : 'slide-out',
    pageRef: PageRef,
    contentNode: <CardDetail {...VideoSchoolList[targetIndex]} />,
  })

  const searchTargetSchoolVideo = React.useCallback((targetName: string) => {
    const filter = data.filter(value => value.schoolName === targetName)
    setData([...filter])
  }, [])

  return (
    <div style={{ height: '100%', width: '100%' }} ref={PageRef}>
      <MaskContext.Provider
        value={{
          shown: maskShown,
          toggle: setMaskShown,
          setTargetIndex,
          setTargetRef,
          onSearch: searchTargetSchoolVideo,
        }}
      >
        <RootLayout>
          <div style={{ display: 'flex', height: '100%', width: '100%' }}>
            <InfiniteScroll
              dataLength={data.length}
              hasMore={true}
              next={LoadingMore}
              loader={<Skeleton paragraph={{ rows: 2 }} active />}
              height={'100%'}
            >
              <CardListContainer>{cardItems}</CardListContainer>
            </InfiniteScroll>

            <ToggleContainer onClick={toggle} show={isShown}>
              <IconContainer>
                {isShown ? <RightOutlined /> : <LeftOutlined />}
              </IconContainer>
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
