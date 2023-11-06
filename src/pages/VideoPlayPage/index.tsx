import React from 'react'
import { Card, Image, Avatar } from 'antd'
import Entry from '@/components/Entry'
const { Meta } = Card
import { ArrowLeftOutlined } from '@ant-design/icons'
import { CardContainer, CardListContainer, ArrowLeftContainer } from './style'
import Mask from '../../components/Mask'
import { usePageContainer } from '../_app'
import { useSlideAnimation } from '@/hooks/useSlideAnimation'

function CardItem(props: any) {
  const { title, description, image, avatar } = props
  const [show, setShow] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const PageRef = usePageContainer()
  const Animation = useSlideAnimation({
    targetRef: cardRef,
    direction: show ? 'slide-in' : 'slide-out',
    pageRef: PageRef,
    contentNode: <CardDetail imageUrl={image} />,
  })
  return (
    <>
      <CardContainer isShown={show}>
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
            avatar={<Avatar src={avatar} />}
            title={title}
            description={description}
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
      {children}
    </Mask>
  )
}

function CardDetail(props: { imageUrl: string }) {
  const { imageUrl } = props
  return (
    <div
      style={{
        width: 900,
        height: 950,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'palegoldenrod',
      }}
    >
      <div
        style={{
          width: 445,
          height:'100%',
          backgroundColor: '#F7F7F7',
        }}
      >
        <Image
          style={{ objectFit: 'contain' }}
          height={'100%'}
          width={'100%'}
          preview={false}
          alt="example"
          src={imageUrl}
        />
        imgageContainer
      </div>
      <div
        style={{
          backgroundColor: 'palegreen',
        }}
      >
        InteractionContainer
      </div>
    </div>
  )
}

function InteractionContainer() {}

export default function VideoPlayPage() {
  const cardItems = cards.map(card => <CardItem key={card.title} {...card} />)
  const PageRef = React.useRef<HTMLDivElement>(null)
  return (
    <div ref={PageRef}>
      <Entry>
        <CardListContainer
          onScroll={() => {
            console.log('erer')
          }}
        >
          {cardItems}
        </CardListContainer>
      </Entry>
    </div>
  )
}
const cards = [
  {
    title: 'Card title 1',
    description: 'This is the description 1',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
  },
  {
    title: 'Card title 2',
    description: 'This is the description 2',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
  },
  {
    title: 'Card title 3',
    description: 'This is the description 3',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
  },
  {
    title: 'Card title 3',
    description: 'This is the description 3',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
  },
  {
    title: 'Card title 5',
    description: 'This is the description 3',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
  },
  {
    title: 'Card title 3',
    description: 'This is the description 3',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
  },
  {
    title: 'Card title 3',
    description: 'This is the description 3',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
  },
  {
    title: 'Card title 3',
    description: 'This is the description 3',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
  },
]
