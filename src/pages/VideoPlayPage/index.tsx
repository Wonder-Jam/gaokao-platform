import React from 'react'
import { Card, Image, Avatar } from 'antd'
import Entry from '@/components/Entry'
const { Meta } = Card
import { ArrowLeftOutlined, DownOutlined, UpOutlined } from '@ant-design/icons'
import {
  CardContainer,
  CardListContainer,
  ArrowLeftContainer,
  UpAndDownContainer,
} from './style'
import Mask from '../../components/Mask'
import { usePageContainer } from '../_app'
import { useSlideAnimation } from '@/hooks/useSlideAnimation'
import { VideoSchoolType, data } from './data'

function CardItem(props: VideoSchoolType & { image: string }) {
  const { image, ...video } = props
  const [show, setShow] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const PageRef = usePageContainer()
  const Animation = useSlideAnimation({
    targetRef: cardRef,
    direction: show ? 'slide-in' : 'slide-out',
    pageRef: PageRef,
    contentNode: <CardDetail {...video} />,
  })
  return (
    <>
      <CardContainer>
        <Card
          ref={cardRef}
          onClick={() => setShow(true)}
          hoverable
          cover={<Image preview={false} alt="example" src={image} />}
        >
          <Meta
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            title={video.schoolName}
            description={video.schoolSiteUrl}
          />
        </Card>
      </CardContainer>
      <MaskContainer isShown={show} setShow={setShow}>
        {Animation}
      </MaskContainer>
    </>
  )
}

function MaskContainer(props: {
  isShown: boolean
  setShow: (value: React.SetStateAction<boolean>) => void
  children: React.ReactNode
}) {
  const { isShown, setShow, children } = props
  return (
    <Mask isShown={isShown}>
      <ArrowLeftContainer onClick={() => setShow(false)}>
        <ArrowLeftOutlined />
      </ArrowLeftContainer>
      <UpAndDownContainer>
        <UpOutlined />
        <DownOutlined />
      </UpAndDownContainer>
      {children}
    </Mask>
  )
}

function CardDetail(props: VideoSchoolType) {
  const { videoUrl, schoolName } = props
  return (
    <div
      style={{
        width: 900,
        height: 950,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'palegoldenrod',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>{schoolName}</div>
      <video controls width={'100%'}>
        <source src={videoUrl} />
      </video>
    </div>
  )
}

function InteractionContainer() {}

export default function VideoPlayPage() {
  const cardItems = data.map(item => <CardItem key={item.title} {...item} />)
  const PageRef = React.useRef<HTMLDivElement>(null)
  return (
    <div ref={PageRef}>
      <Entry>
        <CardListContainer>{cardItems}</CardListContainer>
      </Entry>
    </div>
  )
}
