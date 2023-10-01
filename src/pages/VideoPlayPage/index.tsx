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
  console.log(cardRef.current)
  const Animation = useSlideAnimation({
    targetRef: cardRef,
    direction: show ? 'slide-in' : 'slide-out',
    pageRef: PageRef,
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
      <Mask isShown={show}>
        <ArrowLeftContainer onClick={() => setShow(false)}>
          <ArrowLeftOutlined />
        </ArrowLeftContainer>
        {Animation}
      </Mask>
    </>
  )
}

export default function VideoPlayPage() {
  const cardItems = cards.map(card => <CardItem key={card.title} {...card} />)
  const PageRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (PageRef.current) {
      console.log(PageRef.current.scrollTop)
    }
  }, [PageRef.current?.scrollTop])
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
