import { usePageNavigation } from '../../hooks/usePageNavigation'
import logo from '../../static/logo.jpeg'
import { Menu, MenuProps, Image, Select } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'
import {
  HeaderContainer,
  MainContainer,
  HeaderBarContainer,
  ImageContainer,
  TextContainer,
} from './style'
import { useScroll, useThrottle } from 'ahooks'

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
  const MainRef = React.useRef(null)
  const HeaderRef = React.useRef<HTMLDivElement>(null)
  const prevScrollY = React.useRef(0)
  const isScrollingDown = React.useRef(false)
  const scroll = useThrottle(useScroll(MainRef), { wait: 200 })
  const hidden = React.useMemo(() => {
    if (HeaderRef.current && scroll?.top) {
      // console.log(HeaderRef.current.clientHeight)
      return scroll.top > HeaderRef.current.clientHeight
    }
    return false // 如果 HeaderRef.current 为 null，则返回默认值
  }, [scroll?.top])
  const headerStyle = React.useMemo(() => {
    // console.log(isScrollingDown.current)
    if (hidden && isScrollingDown.current) {
      // Scroll down, hide header
      return { transform: 'translateY(-100%)' }
    } else {
      // Scroll up, show header
      return { transform: 'translateY(0)' }
    }
  }, [hidden, isScrollingDown.current])
  React.useEffect(() => {
    if (scroll?.top !== undefined && prevScrollY.current !== undefined) {
      isScrollingDown.current = scroll.top > prevScrollY.current
      prevScrollY.current = scroll.top
    }
  }, [scroll?.top])
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Head>
        <title>GoSchool-你的择校利器!</title>
        <link rel="icon" href="/files/blogcef6f59c8c54b99a5684ec6a902d0ff8.png" />
      </Head>
      <HeaderContainer ref={HeaderRef} style={headerStyle}>
        <HeaderBar />
      </HeaderContainer>
      <MainContainer ref={MainRef}>
        <div
          style={{
            width: '100vw',
            height: '8%',
          }}
        ></div>
        <div
          style={{
            width: '100vw',
            height: '92%',
          }}
        >
          {children}
        </div>
      </MainContainer>
    </div>
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
      <Select
        defaultValue="请选择您所在的地区"
        style={{ width: 200, marginRight: '5px' }}
        options={[{ value: '北京', label: '北京' }, { value: '天津', label: '天津' }, { value: '湖南', label: '湖南' }, { value: '湖北', label: '湖北' }, { value: '江苏', label: '江苏' }, { value: '浙江', label: '浙江' }, { value: '广东', label: '广东' }, { value: '四川', label: '四川' }, { value: '上海', label: '上海' }, { value: '重庆', label: '重庆' }]}
      />
    </HeaderBarContainer>
  )
}
