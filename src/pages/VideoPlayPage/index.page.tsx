import React, { MutableRefObject } from 'react'
import RootLayout from '@/app/layout'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { CardListContainer, IconContainer, ToggleContainer } from './style'
import { useSlideAnimation } from '@/hooks/useSlideAnimation'
import { VideoSchoolType } from './data'
import { useToggle } from 'ahooks'
import { HotSpotTopicContainer } from './components/HotSpotList'
import { MaskContext } from './context/MaskContext'
import { CardDetail } from './components/CardDetail'
import { CardItem } from './components/CardDetail/CardItem'
import { MaskContainer } from './components/MaskContainer'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Empty, Skeleton } from 'antd'

const fakeUrl = 'api/videoList'
export default function VideoPlayPage() {
  const PageRef = React.useRef<HTMLDivElement>(null)
  const [isShown, { toggle }] = useToggle(true)
  const filterTarget = React.useRef('')
  const [isLoading, setIsLoading] = React.useState(true)
  const [maskShown, setMaskShown] = React.useState<boolean>(false)
  const [targetIndex, setTargetIndex] = React.useState(0)
  const [targetRef, setTargetRef] = React.useState<
    React.RefObject<HTMLDivElement>
  >(React.createRef())
  const [data, setData] = React.useState<VideoSchoolType[]>([])
  const allDataList: MutableRefObject<VideoSchoolType[]> = React.useRef([])
  const LoadData = React.useCallback(() => {
    fetch(fakeUrl)
      .then(res => res.json())
      .then((res: VideoSchoolType[]) => {
        allDataList.current.push(...res)
        if (filterTarget.current !== '') {
          res = res.filter(value => value.schoolName === filterTarget.current)
        }
        setData(prev => [...prev, ...res])
        if (isLoading) {
          setIsLoading(false)
        }
      })
  }, [])
  React.useEffect(LoadData, [])
  const cardItems = data.map((item, index) => (
    <CardItem key={item.schoolName + '' + index} {...item} index={index} />
  ))
  const Animation = useSlideAnimation({
    targetRef: targetRef,
    direction: maskShown ? 'slide-in' : 'slide-out',
    pageRef: PageRef,
    contentNode: <CardDetail {...data[targetIndex]} />,
  })

  const searchTargetSchoolVideo = React.useCallback(
    (targetName: string) => {
      setIsLoading(true)
      filterTarget.current = targetName
      const filter = allDataList.current.filter(
        value => value.schoolName === targetName,
      )
      setData([...filter])
      LoadData()
    },
    [data],
  )

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
            {isLoading ? (
              <Skeleton active paragraph={{ rows: 10 }} />
            ) : !isLoading && data.length === 0 ? (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Empty />
              </div>
            ) : (
              <InfiniteScroll
                dataLength={data.length}
                hasMore={true}
                next={LoadData}
                loader={<Skeleton paragraph={{ rows: 2 }} active />}
                height={'100%'}
              >
                <CardListContainer>{cardItems}</CardListContainer>
              </InfiniteScroll>
            )}
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
