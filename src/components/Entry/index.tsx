import { usePageNavigation } from '../../hooks/usePageNavigation'
import logo from '../../static/logo.jpeg'
import {
  Button,
  Menu,
  MenuProps,
  Input,
  Image,
  Modal,
  Form,
  Select,
} from 'antd'
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
          height: '80px',
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
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const openLoginModal = () => setIsModalOpen(true)
  const closeLoginModal = () => setIsModalOpen(false)
  return (
    <HeaderBarContainer>
      <div>
        <ImageContainer>
          <Image
            // src={
            //   'https://files.lsmcloud.top/blog218cc985c57906433217d46ca1db1205.png'
            // }
            src={logo.src}
            preview={false}
            // style={{ transform: 'scale(0.6)' }}
            height={'60px'}
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
      {/* <Input.Search
        style={{
          width: '15%',
          minWidth: 190,
        }}
        placeholder="查大学，查专业，搜问答"
        allowClear
        size="large"
      /> */}
      <div
        style={{
          width: '15%',
        }}
      >
        <Button onClick={openLoginModal}>登录 | 注册</Button>
      </div>
      <LoginModal isModalOpen={isModalOpen} closeLoginModal={closeLoginModal} />
    </HeaderBarContainer>
  )
}

function LoginModal({
  isModalOpen,
  closeLoginModal,
}: {
  isModalOpen: boolean
  closeLoginModal: () => void
}) {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue="86"
        options={[
          { value: '86', label: '+86' },
          { value: '87', label: '+87' },
        ]}
        style={{ width: 70 }}
      />
    </Form.Item>
  )
  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={closeLoginModal}
        title="登录畅想更多权益"
        footer={null}
        centered
        maskClosable
        destroyOnClose
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 200,
            marginTop: 24,
          }}
        >
          <Form.Item
            name="phone"
            rules={[
              {
                message: '请输入手机号',
              },
            ]}
          >
            <Input placeholder="请输入手机号" addonBefore={prefixSelector} />
          </Form.Item>
          <Form.Item name="validation">
            <Input placeholder="请输入验证码" suffix="获取验证码" />
          </Form.Item>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            账号密码登录
          </div>
        </div>
      </Modal>
    </>
  )
}
