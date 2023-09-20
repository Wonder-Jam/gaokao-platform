import React from 'react'
import { Card, Image, Avatar } from 'antd'
import Entry from '../../components/Entry'
const { Meta } = Card
import { ArrowLeftOutlined } from '@ant-design/icons'
import { CardContainer, CardListContainer, ArrowLeftContainer } from './style'
import Mask from '@/components/Mask'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

function CardItem(props) {
  const { title, description, image, avatar } = props
  const [show, setShow] = React.useState(false)
  return (
    <>
      <CardContainer isShown={show}>
        <Card
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
        {show ? <Animation /> : null}
      </Mask>
    </>
  )
}
const slide = keyframes`
  from{
    top: 0;
    left: 0;
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

const Animation = styled.div`
  animation: ${slide} 0.3s ease-in-out;
  animation-fill-mode: forwards;
  width: 200px;
  height: 200px;
  z-index: 100;
`

export const Demo = styled.div`
  width: 1074px;
  transition:
    transform 0.4s ease 0s,
    width 0.4s ease 0s;
  transform: translate(148px, 24px) scale(1);
  overflow: visible;
  height: calc(100% - 48px);
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow:
    0 8px 64px 0 rgba(0, 0, 0, 0.04),
    0 1px 4px 0 rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  background: #ffffff;
  transform-origin: left top;
`

export default function VideoPlayPage() {
  const cardItems = cards.map(card => <CardItem key={card.title} {...card} />)
  return (
    <>
      <Entry>
        <CardListContainer>{cardItems}</CardListContainer>
      </Entry>
    </>
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
  {
    title: 'Card title 3',
    description: 'This is the description 3',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
  },
]
