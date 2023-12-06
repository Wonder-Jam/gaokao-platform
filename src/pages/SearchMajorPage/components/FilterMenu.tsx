import React, { useContext } from 'react'
import {
  BarChartOutlined,
  GlobalOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import * as Enum from '../enum'
import { MajorSearchContext } from '../index.page'
import { majorCategories } from '../enum'
import MajorCategoriesList from '@/pages/SearchMajorPage/components/MajorCategoriesList'

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

const majorCategoriesMap: Map<string, Enum.majorCategories> = new Map([
  ['教育学', majorCategories.Education],
  ['工学', majorCategories.Engineering],
  ['经济学', majorCategories.Economics],
  ['文学', majorCategories.Literature],
  ['管理学', majorCategories.Management],
  ['历史学', majorCategories.History],
  ['全部', majorCategories.ALL],
  ['法学', majorCategories.Law],
  ['哲学', majorCategories.Philosophy],
  ['医学', majorCategories.Medicine],
  ['艺术学', majorCategories.Arts],
  ['理学', majorCategories.Science],
  ['农学', majorCategories.Agriculture],
  ['全部', majorCategories.ALL],
])

const FilterMenu: React.FC = () => {
  const { majorCategories, setChoices } = useContext(MajorSearchContext)
  const handleMajorCategoriesSelect = (selectedCategory: string) => {
    setChoices({
      majorCategories:
        majorCategoriesMap.get(selectedCategory) ?? Enum.majorCategories.ALL,
    })
  }

  const items: MenuProps['items'] = [
    getItem('专业门类', 'sub1', <GlobalOutlined />, [
      getItem(
        <MajorCategoriesList
          onSelect={handleMajorCategoriesSelect}
          selected={majorCategories}
        />,
        'g1',
        null,
        [],
        'group',
      ),
    ]),

    // getItem('为地区排序', 'sub2', <BarChartOutlined />, [
    //   getItem('无', Enum.rank.None),
    //   getItem('全省GDP总值', Enum.rank.GDP),
    //   getItem('985大学数量', Enum.rank._985),
    //   getItem('211大学数量', Enum.rank._211),
    //   getItem('双一流大学数量', Enum.rank.DoubleFristClass),
    //   getItem('教育总经费', Enum.rank.EduFunds),
    // ]),

    { type: 'divider' },

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
    setChoices({ majorCategories })
  }

  return (
    <Menu
      onClick={onClick}
      style={{ height: '100%', width: '20%', overflowY: 'auto' }}
      defaultSelectedKeys={['0']}
      defaultOpenKeys={['sub1', 'sub2']}
      mode="inline"
      items={items}
    />
  )
}

export default FilterMenu
