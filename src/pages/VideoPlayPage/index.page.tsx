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
  const {
    videoUrl,
    schoolName,
    schoolSiteUrl,
    schoolRecuritmentUrl,
    schoolBdage,
    schoolLogo,
  } = props
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
        flexDirection: 'column',
      }}
    >
      <div>{schoolName}</div>
      <img src={schoolLogo} />
      {schoolBdage}
      <video controls width={'100%'}>
        <source src={videoUrl} />
      </video>
      <div
        style={{
          display: 'flex',
          width: '50%',
          marginTop: '16px',
          justifyContent: 'space-around',
        }}
      >
        <Button
          style={{
            fontSize: '30px',
            height: '60px',
            lineHeight: '40px',
          }}
          size="large"
          target="_blank"
          href={schoolSiteUrl}
        >
          学校官网
        </Button>
        <Button
          style={{ fontSize: '30px', height: '60px', lineHeight: '40px' }}
          size="large"
          target="_blank"
          href={schoolRecuritmentUrl}
        >
          本科招生网
        </Button>
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
