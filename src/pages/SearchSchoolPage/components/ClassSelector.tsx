import React, { useState, useContext } from 'react'
import { Radio, Select, Space } from 'antd'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import type { SelectProps, RadioChangeEvent } from 'antd'
import { SearchContext } from '../Context/SearchContext'

const App: React.FC = () => {
  const { selectedClass, setChoices, filterSchool } = useContext(SearchContext)
  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`)
    if (typeof value === 'string') {
      setChoices(prev => ({
        ...prev,
        selectedClass: [value],
      }))
    } else {
      setChoices(prev => ({
        ...prev,
        selectedClass: value,
      }))
    }
  }
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Select
          placeholder="首选科目"
          onChange={handleChange}
          style={{ width: '100%' }}
          options={[
            { label: '物理', value: '物理' },
            { label: '历史', value: '历史' },
          ]}
        />
        <Select
          mode="multiple"
          placeholder="再选科目"
          onChange={handleChange}
          style={{ width: '100%' }}
          options={[
            { label: '化学', value: '化学' },
            { label: '生物', value: '生物' },
            { label: '地理', value: '地理' },
            { label: '政治', value: '政治' },
          ]}
        />
      </Space>
    </>
  )
}

export default App
