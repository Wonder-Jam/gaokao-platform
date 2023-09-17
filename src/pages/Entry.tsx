import { Button, Menu, MenuProps } from 'antd'
import Search, { SearchProps } from 'antd/es/input/Search'
import { useRouter } from 'next/router'
import React from 'react'

const items = [
  {
    label: '首页',
    key: 'MainPage',
  },
  {
    label: '查学校',
    key: 'SearchSchoolPage',
  },
  {
    label: '查专业',
    key: 'SearchMajorPage',
  }
]

export default function Entry({children} : {children: React.ReactNode}) {

  const router = useRouter()
  const [current, setCurrent] = React.useState(router.pathname)
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    router.push(e.key)
  }
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)
  return (
    <>
    <div>
    <Search
      placeholder='查大学，查专业，搜问答'
      allowClear
      size='large'
      onSearch={onSearch}
    />
    <Button>登录 | 注册</Button>
    </div>
      <Menu 
      onClick={onClick} 
      selectedKeys={[current]}
      items={items}
      mode='horizontal'
    />

    {children}
    </>
  )
}