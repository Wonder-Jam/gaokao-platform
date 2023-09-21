import React from 'react'
import { Card, Image, Avatar } from 'antd'
import Entry from '@/components/Entry'
const { Meta } = Card
import { ArrowLeftOutlined } from '@ant-design/icons'
import { CardContainer, CardListContainer, ArrowLeftContainer } from './style'
import Mask from '../../components/Mask'
import styled from '@emotion/styled'
import { Keyframes, keyframes } from '@emotion/react'

function CardItem(props) {
  const { title, description, image, avatar } = props
  const [show, setShow] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [xAndy, setXandY] = React.useState({ top: 0, left: 0 })
  const back = React.useRef<Keyframes>()
  const slide = React.useRef<Keyframes>()
  React.useEffect(() => {
    if (cardRef.current) {
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          const { top, left } = entry.target.getBoundingClientRect()
          setXandY({
            top,
            left,
          })
        }
      })
      observer.observe(cardRef.current)
    }
  }, [cardRef.current])
  React.useEffect(() => {
    slide.current = keyframes`
  from{
    top: ${xAndy.top}px;
    left: ${xAndy.left}px;
    position: fixed;
    background-color: palegreen;
  }
  to{
    top: calc(50% - 100px);
    left: calc(50% - 100px);
    position: fixed;
    background-color: palegoldenrod;
  }
`
    back.current = keyframes`
to{
  top: ${xAndy.top}px;
  left: ${xAndy.left}px;
  position: fixed;
  background-color: palegreen;
}
from{
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  position: fixed;
  background-color: palegoldenrod;
}
`
  }, [xAndy.top, xAndy.left])

  const Back = styled.div`
    animation: ${back.current} 0.3s ease-in-out;
    animation-fill-mode: forwards;
    width: 200px;
    height: 200px;
    z-index: 100;
  `

  const Animation = styled.div`
    animation: ${slide.current} 0.3s ease-in-out;
    animation-fill-mode: forwards;
    width: 200px;
    height: 200px;
    z-index: 100;
  `

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
        {show ? <Animation /> : <Back />}
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
