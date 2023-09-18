import { Button, Menu, MenuProps, Input, Image } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'

const items = [
  {
    label: '首页',
    key: '/MainPage',
  },
  {
    label: '查学校',
    key: '/SearchSchoolPage',
  },
  {
    label: '查专业',
    key: '/SearchMajorPage',
  },
]

export default function Entry({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [current, setCurrent] = React.useState(router.pathname)
  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key)
    router.push(e.key)
  }
  const onSearch = (value: any) => console.log(value)
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 100,
        }}
      >
        <div>
          <Image
            style={{
              cursor: 'pointer',
              width: 169,
              marginRight: 10,
            }}
            src={'https://www.gaokao.cn/static/media/head_logo1.133254dc.png'}
            preview={false}
            onClick={() => (window.location.href = 'https://www.eol.cn/')}
          />
          <Image
            style={{
              cursor: 'pointer',
              width: 169,
              marginRight: 10,
            }}
            src={
              'https://t1.chei.com.cn/gaokao/images/index/gk_logo.png?v=1620294265752'
            }
            preview={false}
            onClick={() =>
              (window.location.href = 'https://gaokao.chsi.com.cn/')
            }
          />
        </div>
        <Input.Search
          style={{
            width: '30%',
          }}
          placeholder="查大学，查专业，搜问答"
          allowClear
          size="large"
          onSearch={onSearch}
        />
        <Button>登录 | 注册</Button>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        items={items}
        mode="horizontal"
      />

      {children}
    </>
  )
}
