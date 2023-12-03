import React from 'react'
import { Card, Image, Button } from 'antd'
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
import { usePageContainer } from '../_app.page'
import { useSlideAnimation } from '@/hooks/useSlideAnimation'
import { VideoSchoolType, VideoSchoolList } from './data'
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'

function CardItem(props: VideoSchoolType) {
  const [show, setShow] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const PageRef = usePageContainer()
  const Animation = useSlideAnimation({
    targetRef: cardRef,
    direction: show ? 'slide-in' : 'slide-out',
    pageRef: PageRef,
    contentNode: <CardDetail {...props} />,
  })
  return (
    <>
      <CardContainer>
        <Card
          style={{}}
          ref={cardRef}
          onClick={() => setShow(true)}
          hoverable
          cover={
            <Image
              style={{
                height: '350px',
                objectFit: 'cover',
              }}
              preview={false}
              alt="example"
              src={props.schoolCover}
            />
          }
        >
          <Meta
            style={{
              display: 'flex',
              alignItems: 'contain',
            }}
            title={props.schoolName}
            description={props.schoolSiteUrl}
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
  const {
    videoUrl,
    schoolName,
    schoolSiteUrl,
    schoolRecuritmentUrl,
    schoolBdage,
    schoolCover,
  } = props
  React.useEffect(() => {
    const player = new Player({
      id: videoUrl + 'video',
      url: videoUrl,
      width: '70%',
      height: '100%',
      poster: schoolCover,
    })
    return () => {
      if (player) {
        player.destroy()
      }
    }
  }, [])
  return (
    <div
      style={{
        width: '75vw',
        height: '90vh',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        display: 'flex',
      }}
    >
      <div id={videoUrl + 'video'}></div>
      <div
        style={{
          position: 'relative',
          width: '30%',
          height: '100%',
          minWidth: '300px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            height: '150px',
            width: '100%',
          }}
        >
          <div style={{ marginTop: '10px' }}>{schoolBdage}</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <div style={{ color: '#0070f3' }}>{schoolName}</div>
            <Button size="large" target="_blank" href={schoolSiteUrl}>
              学校官网
            </Button>
            <Button size="large" target="_blank" href={schoolRecuritmentUrl}>
              本科招生网
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ButtonProps {
  content: string
  href?: string
}

function MyButton(props: ButtonProps) {
  return (
    <button>
      <a
        style={{
          textDecoration: 'none',
        }}
        href={props.href}
        target="_blank"
      />
      {props.content}
    </button>
  )
}

export default function VideoPlayPage() {
  const cardItems = VideoSchoolList.map((item, index) => (
    <CardItem key={item.schoolName + '' + index} {...item} />
  ))
  const PageRef = React.useRef<HTMLDivElement>(null)
  return (
    <div ref={PageRef}>
      <Entry>
        <CardListContainer>{cardItems}</CardListContainer>
      </Entry>
    </div>
  )
}
