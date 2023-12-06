import React from 'react'
import { Badge, Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'
import {
  FieldTimeOutlined,
  FlagOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: '',
    children: '1902',
  },
  {
    key: '2',
    label: '',
    children: '教育部',
  },
  {
    key: '3',
    label: '',
    children: <div style={{ whiteSpace: 'nowrap' }}></div>,
  },
]

function UniversityBasicInfo() {
  return <Descriptions size="small" items={items} />
}

export default UniversityBasicInfo
