import { usePageNavigation } from '../../hooks/usePageNavigation'
import logo from '../../static/logo.jpeg'
import { Menu, MenuProps, Image } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import {
  HeaderContainer,
  MainContainer,
  HeaderBarContainer,
  ImageContainer,
  TextContainer,
} from './style'

const items = [
  {
    label: <TextContainer>首页</TextContainer>,
    key: '/',
  },
  {
    label: <TextContainer>查学校</TextContainer>,
    key: '/SearchSchoolPage',
  },
  {
    label: <TextContainer>查专业</TextContainer>,
    key: '/SearchMajorPage',
  },
  {
    label: <TextContainer>看一看</TextContainer>,
    key: '/VideoPlayPage',
  },
]

export default function Entry({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderContainer>
        <HeaderBar />
      </HeaderContainer>
      <div
        style={{
          width: '100vw',
          height: '8%',
        }}
      ></div>
      <MainContainer>{children}</MainContainer>
    </>
  )
}

function GaoKaoMenu() {
  const router = useRouter()
  const [current, setCurrent] = React.useState(router.pathname)
  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key)
    router.push(e.key)
  }
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        items={items}
        mode="horizontal"
        style={{
          display: 'flex',
          width: '60%',
          height: '100%',
          justifyContent: 'space-evenly',
        }}
      />
    </>
  )
}

function HeaderBar() {
  const { goToEolPage, goToYangGuangGaoKaoPage } = usePageNavigation()
  return (
    <HeaderBarContainer>
      <div>
        <ImageContainer>
          <Image
            src={logo.src}
            preview={false}
            // style={{ transform: 'scale(0.6)' }}
            height={'50px'}
            onClick={goToEolPage}
          />
        </ImageContainer>
        {/* <ImageContainer>
          <Image
            src={
              'https://t1.chei.com.cn/gaokao/images/index/gk_logo.png?v=1620294265752'
            }
            preview={false}
            onClick={goToYangGuangGaoKaoPage}
          />
        </ImageContainer> */}
      </div>
      <GaoKaoMenu />
    </HeaderBarContainer>
  )
}
