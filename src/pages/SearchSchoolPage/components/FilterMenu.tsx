import React, { useContext, useState } from 'react'
import {
  BarChartOutlined,
  FundProjectionScreenOutlined,
  GlobalOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PartitionOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu, Button, InputNumber, Space } from 'antd'
import ProvinceList from './ProvinceList'
import SchoolFilterList from './SchoolFilterList'
import * as Enum from '../enum'
import { SearchContext } from '../Context/SearchContext'
import ClassSelector from './ClassSelector'

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

const provinceAbbreviationMap: Map<string, Enum.province> = new Map([
  ['湖南', Enum.province.Hunan],
  ['北京', Enum.province.Beijing],
  ['天津', Enum.province.Tianjin],
  ['西藏', Enum.province.Tibet],
  ['广西', Enum.province.Guangxi],
  ['新疆', Enum.province.Xinjiang],
  ['上海', Enum.province.Shanghai],
  ['重庆', Enum.province.Chongqing],
  ['河北', Enum.province.Hebei],
  ['山西', Enum.province.Shanxi],
  ['内蒙古', Enum.province.InnerMongolia],
  ['辽宁', Enum.province.Liaoning],
  ['吉林', Enum.province.Jilin],
  ['黑龙江', Enum.province.Heilongjiang],
  ['江苏', Enum.province.Jiangsu],
  ['浙江', Enum.province.Zhejiang],
  ['安徽', Enum.province.Anhui],
  ['福建', Enum.province.Fujian],
  ['江西', Enum.province.Jiangxi],
  ['山东', Enum.province.Shandong],
  ['河南', Enum.province.Henan],
  ['湖北', Enum.province.Hubei],
  ['广东', Enum.province.Guangdong],
  ['海南', Enum.province.Hainan],
  ['四川', Enum.province.Sichuan],
  ['贵州', Enum.province.Guizhou],
  ['云南', Enum.province.Yunnan],
  ['陕西', Enum.province.Shaanxi],
  ['甘肃', Enum.province.Gansu],
  ['青海', Enum.province.Qinghai],
  ['宁夏', Enum.province.Ningxia],
  ['香港', Enum.province.HongKong],
  ['澳门', Enum.province.Macau],
  ['台湾', Enum.province.Taiwan],
  ['全国', Enum.province.None],
])

const FilterMenu: React.FC = () => {
  const { province, city, rank, setChoices, filterSchool } =
    useContext(SearchContext)
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const handleProvinceSelect = (selectedProvince: string) => {
    // 在这里处理选中省份的逻辑，可以将选中的值存储在某个变量中
    // console.log(`Selected Province: ${selectedProvince}`);
    setChoices({
      province:
        provinceAbbreviationMap.get(selectedProvince) ?? Enum.province.None,
      city,
      rank,
      filterSchool,
    })
  }

  const handleFilterSelect = (selectedFilters: string[]) => {
    // 在这里处理选中省份的逻辑，可以将选中的值存储在某个变量中
    // console.log(`Selected Province: ${selectedProvince}`);
    setChoices({
      province,
      city,
      rank,
      filterSchool: selectedFilters,
    })
  }

  const items: MenuProps['items'] = [
    getItem(
      collapsed ? '收缩' : '展开',
      'sub5',
      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
    ),

    getItem('地区', 'sub1', <GlobalOutlined />, [
      getItem(
        <Space direction="vertical" style={{ width: '100%' }}>
          <ProvinceList onSelect={handleProvinceSelect} selected={province} />
        </Space>,
        'g1',
        null,
        [],
        'group',
      ),
    ]),

    getItem('大学等级', 'sub2', <BarChartOutlined />, [
      // getItem('无', Enum.rank.None),
      // getItem('全省GDP总值', Enum.rank.GDP),
      // getItem('985大学数量', Enum.rank._985),
      // getItem('211大学数量', Enum.rank._211),
      // getItem('双一流大学数量', Enum.rank.DoubleFristClass),
      // getItem('教育总经费', Enum.rank.EduFunds),
      getItem(
        <SchoolFilterList
          onSelect={handleFilterSelect}
          selected={filterSchool}
        />,
        'g2',
        null,
        [],
        'group',
      ),
    ]),

    { type: 'divider' },

    getItem('您的选科组合', 'sub3', <PartitionOutlined />, [
      // getItem('无', Enum.rank.None),
      // getItem('全省GDP总值', Enum.rank.GDP),
      // getItem('985大学数量', Enum.rank._985),
      // getItem('211大学数量', Enum.rank._211),
      // getItem('双一流大学数量', Enum.rank.DoubleFristClass),
      // getItem('教育总经费', Enum.rank.EduFunds),
      getItem(<ClassSelector />, 'g2', null, [], 'group'),
    ]),
    getItem('您的预估分数', 'sub4', <FundProjectionScreenOutlined />, [
      // getItem('无', Enum.rank.None),
      // getItem('全省GDP总值', Enum.rank.GDP),
      // getItem('985大学数量', Enum.rank._985),
      // getItem('211大学数量', Enum.rank._211),
      // getItem('双一流大学数量', Enum.rank.DoubleFristClass),
      // getItem('教育总经费', Enum.rank.EduFunds),
      getItem(
        <Space direction="vertical" style={{ width: '100%' }}>
          <InputNumber
            addonAfter="分"
            style={{ width: '100%' }}
            min={0}
            max={750}
            value={700}
          />
        </Space>,
        'g2',
        null,
        [],
        'group',
      ),
    ]),

    // getItem('等级', 'sub4', <SettingOutlined />, [
    //   getItem('Option 9', '9'),
    //   getItem('Option 10', '10'),
    //   getItem('Option 11', '11'),
    //   getItem('Option 12', '12'),
    //   getItem('双一流大学数', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    // ]),

    // getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
  ]

  const onClick: MenuProps['onClick'] = e => {
    setChoices({
      province,
      city,
      rank: Number(e.key) as Enum.rank,
      filterSchool,
    })
    if (e.key === 'sub5') {
      toggleCollapsed()
    }
  }

  return (
    <Menu
      onClick={onClick}
      style={{
        height: '100%',
        width: collapsed ? '5%' : '30%',
        overflowY: 'auto',
      }}
      defaultSelectedKeys={['0']}
      defaultOpenKeys={['sub1', 'sub2']}
      mode="inline"
      items={items}
      inlineCollapsed={collapsed}
    />
  )
}

export default FilterMenu
