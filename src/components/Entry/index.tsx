import { usePageNavigation } from '../../hooks/usePageNavigation'
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
} from './style'
const items = [
  {
    label: '首页',
    key: '/',
  },
  {
    label: '查学校',
    key: '/SearchSchoolPage',
  },
  {
    label: '查专业',
    key: '/SearchMajorPage',
  },
  {
    label: '看一看',
    key: '/VideoPlayPage',
  },
]

export default function Entry({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderContainer>
        <HeaderBar />
        <GaoKaoMenu />
      </HeaderContainer>
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
            src={'https://www.gaokao.cn/static/media/head_logo1.133254dc.png'}
            preview={false}
            onClick={goToEolPage}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src={
              'https://t1.chei.com.cn/gaokao/images/index/gk_logo.png?v=1620294265752'
            }
            preview={false}
            onClick={goToYangGuangGaoKaoPage}
          />
        </ImageContainer>
      </div>
      <Input.Search
        style={{
          width: '30%',
          minWidth: 190,
        }}
        placeholder="查大学，查专业，搜问答"
        allowClear
        size="large"
      />
      <Button onClick={openLoginModal}>登录 | 注册</Button>
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
