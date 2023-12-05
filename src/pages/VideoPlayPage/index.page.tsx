import React from 'react'
import { Card, Image, Button, Avatar, List } from 'antd'
import Entry from '@/components/Entry'
const { Meta } = Card
import { ArrowLeftOutlined, DownOutlined, UpOutlined } from '@ant-design/icons'
import {
  CardContainer,
  CardListContainer,
  ArrowLeftContainer,
  UpAndDownContainer,
  WxContanier,
} from './style'
import Mask from '../../components/Mask'
import { usePageContainer } from '../_app.page'
import { useSlideAnimation } from '@/hooks/useSlideAnimation'
import { VideoSchoolType, VideoSchoolList, WeChatArticles } from './data'
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
        position: 'relative',
      }}
    >
      <div id={videoUrl + 'video'}></div>
      <div
        style={{
          position: 'absolute',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          height: '150px',
          width: '30%',
          minWidth: '300px',
          backgroundColor: '#fff',
          right: 0,
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
      <div
        style={{
          width: '30%',
          height: '100%',
          minWidth: '300px',
          overflowY: 'auto',
        }}
      >
        <div
          style={{ height: '150px', width: '100%', backgroundColor: '#fff' }}
        ></div>
        <List
          itemLayout="horizontal"
          dataSource={WeChatArticles}
          renderItem={(item, index) => (
            <WxContanier
              onClick={() => window.open(item.destinationLink, '_blank')}
            >
              <List.Item>
                <Avatar
                  shape="square"
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  src={item.image}
                  style={{ marginRight: '5px' }}
                />
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            </WxContanier>
          )}
        />
      </div>
    </div>
  )
}

export default function VideoPlayPage() {
  const cardItems = VideoSchoolList.map((item, index) => (
    <CardItem key={item.schoolName + '' + index} {...item} />
  ))
  const PageRef = React.useRef<HTMLDivElement>(null)
  return (
    <div style={{ height: '100%', width: '100%' }} ref={PageRef}>
      <Entry>
        <CardListContainer>{cardItems}</CardListContainer>
      </Entry>
    </div>
  )
}
