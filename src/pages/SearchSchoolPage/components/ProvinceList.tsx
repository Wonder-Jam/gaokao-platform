import React, { useState } from 'react'
import { ListContainer, List, ListItem, SelectedItem } from './style' // 引入样式对象

interface ProvinceListProps {
  onSelect: (selectedProvince: string) => void
  selected: string
}

const provinces = [
  '全国',
  '北京',
  '上海',
  '天津',
  '重庆',
  '河北',
  '山西',
  '辽宁',
  '吉林',
  '黑龙江',
  '江苏',
  '浙江',
  '安徽',
  '福建',
  '江西',
  '山东',
  '河南',
  '湖北',
  '湖南',
  '广东',
  '广西',
  '海南',
  '四川',
  '贵州',
  '云南',
  '陕西',
  '甘肃',
  '青海',
  '宁夏',
  '新疆',
  '台湾',
  '香港',
  '澳门',
  '内蒙古',
  '西藏',
]

const ProvinceList: React.FC<ProvinceListProps> = ({ onSelect, selected }) => {
  const handleProvinceClick = (province: string) => {
    onSelect(province)
  }

  return (
    <ListContainer>
      <List style={{ maxWidth: '300px' }}>
        {provinces.map(province => (
          <ListItem
            key={province}
            style={{
              color: selected === province ? '#1677ff' : 'gray',
            }}
            onClick={() => handleProvinceClick(province)}
          >
            {province}
          </ListItem>
        ))}
      </List>
    </ListContainer>
  )
}

export default ProvinceList
