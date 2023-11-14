import React from 'react'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import ProvinceList from './ProvinceList'

// TODO: 1. 这个Menu也是信息密度太低了，目前计划改成三个antd中的select组件（但是感觉也不合适）2. 使用context

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const handleProvinceSelect = (selectedProvince: string) => {
  // 在这里处理选中省份的逻辑，可以将选中的值存储在某个变量中
  console.log(`Selected Province: ${selectedProvince}`)
}

const items: MenuProps['items'] = [
  getItem('地区', 'sub1', <MailOutlined />, [
    getItem(
      <ProvinceList onSelect={handleProvinceSelect} />,
      'g1',
      null,
      [],
      'group',
    ),
  ]),

  getItem('经济', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  ]),

  { type: 'divider' },

  getItem('等级', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem(
    'Group',
    'grp',
    null,
    [getItem('Option 13', '13'), getItem('Option 14', '14')],
    'group',
  ),
]

const FilterMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e)
  }

  return (
    <Menu
      onClick={onClick}
      style={{ height: '100%', width: '20%', overflowY: 'auto' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}

export default FilterMenu
