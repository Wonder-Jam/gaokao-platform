// 导入React和antd的组件
import React from 'react'
import { Card, Image, Avatar } from 'antd'
import Entry from '../components/Entry'
import styles from './VideoPlayPage.module.css'
const { Meta } = Card
import styled from '@emotion/styled'
import { ArrowLeftOutlined } from '@ant-design/icons'

function CardItem(props) {
  const { title, description, image, avatar } = props
  const [show, setShow] = React.useState(false)
  return (
    <>
      <Card
        onClick={() => setShow(true)}
        className={styles.card}
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
      <Mask isShown={show}>
        <ArrowLeftOutlined
          onClick={() => {
            setShow(false)
          }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 40,
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: 24,
            top: 24,
          }}
        />
      </Mask>
    </>
  )
}

function Mask({
  isShown,
  children,
}: {
  isShown: boolean
  children?: React.ReactNode
}) {
  return <MaskStyle isShown={isShown}>{children}</MaskStyle>
}

const MaskStyle = styled.div<{
  isShown: boolean
}>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.88);
  transition: all 0.3s;
  visibility: ${({ isShown }) =>
    isShown
      ? 'visible'
      : 'hidden'}; // visibility的出现与消失是瞬间的，无法通过transition来控制
  opacity: ${({ isShown }) =>
    isShown ? 1 : 0}; // 搭配这个就可以实现蒙层的渐变出现了
`

export default function VideoPlayPage() {
  const cardItems = cards.map(card => <CardItem key={card.title} {...card} />)
  return (
    <>
      <Entry>
        <div className={styles.cardContainer}>{cardItems}</div>
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
