// ProvinceList.tsx

import React, { useState } from 'react'
import { ListContainer, List, ListItem, SelectedItem } from './style' // 引入样式对象

interface ProvinceListProps {
  onSelect: (selectedProvince: string) => void
}

const provinces = [
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
]

const ProvinceList: React.FC<ProvinceListProps> = ({ onSelect }) => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null)

  const handleProvinceClick = (province: string) => {
    setSelectedProvince(province)
    onSelect(province)
  }

  return (
    <ListContainer>
      <List>
        {provinces.map(province => (
          <ListItem
            key={province}
            style={{
              color: selectedProvince === province ? '#1677ff' : '',
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
