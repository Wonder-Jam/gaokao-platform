import React, { useState } from 'react'
import { Table, Space, Select } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'
import type { SelectProps } from 'antd'
import type { MajorDataType } from '../type'

interface AppProps {
  data: MajorDataType[]
}

// TODO: 从props中获取数据，生成options，这需要后端接口的支持
const timeOptions: SelectProps['options'] = [
  { value: '2010', label: '2010' },
  { value: '2011', label: '2011' },
  { value: '2012', label: '2012' },
  { value: '2013', label: '2013' },
  { value: '2014', label: '2014' },
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
]

const firstChoiceOptions: SelectProps['options'] = [
  { value: '文史/历史', label: '文史/历史' },
  { value: '理工/物理', label: '理工/物理' },
]

const otherClasses = [
  {
    text: '化学',
    value: 'chemistry',
  },
  {
    text: '生物',
    value: 'biology',
  },
  {
    text: '政治',
    value: 'politics',
  },
  {
    text: '地理',
    value: 'geography',
  },
]

const columns: ColumnsType<MajorDataType> = [
  {
    title: '年份',
    dataIndex: 'year',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value: string | number | boolean, record) => String(record.name).indexOf(String(value)) === 0,
    sorter: (a, b) => a.year - b.year,
    // sortDirections: ['descend'],
  },
  {
    title: '录取批次',
    dataIndex: 'admissionType',
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.admissionType.length - b.admissionType.length,
  },
  {
    title: '科目要求',
    dataIndex: 'requirement',
    filters: [
      {
        text: '首选物理',
        value: 'firstChoicePhysics',
      },
      {
        text: '首选历史',
        value: 'firstChoiceHistory',
      }
    ],
    onFilter: (value: string | number | boolean, record) => {
      if (value === 'firstChoicePhysics') {
        return record.requirement.includes('物理') || record.requirement.includes('首选不限')
      } else if (value === 'firstChoiceHistory') {
        return record.requirement.includes('历史') || record.requirement.includes('首选不限')
      }
      return false
    },
  },
  {
    title: '分数线',
    dataIndex: 'scoreLine',
    // defaultSortOrder: 'descend',
    sorter: (a, b) => a.scoreLine - b.scoreLine,
  },
  {
    title: '专业组',
    dataIndex: 'majorGroup',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => {
      return (
        Number(a.majorGroup.substring(3)) - Number(b.majorGroup.substring(3))
      )
    },
  },
  {
    title: '包含专业',
    dataIndex: 'major',
    // defaultSortOrder: 'descend',
    render: (major: string[]) => (
      <>
        {major.map((item: string) => (
          <Space key={item}>{item} </Space>
        ))}
      </>
    ),
    // sorter: (a, b) => a.majorGroup.length - b.majorGroup.length,
  },
]

const onChange: TableProps<MajorDataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log('params', pagination, filters, sorter, extra)
}

const App: React.FC<AppProps> = ({ data }) => {
  const [selectedYears, setSelectedYears] = useState<string[]>(['2022'])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    '文史/历史',
    '理工/物理',
  ])

  const handleYearChange = (value: string[]) => {
    setSelectedYears(value)
  }

  const handleCategoryChange = (value: string[]) => {
    setSelectedCategories(value)
  }

  const filteredData = data.filter(item => {
    return (
      selectedYears.includes(String(item.year)) &&
      (selectedCategories.includes(item.category) || item.category === '不限')
    )
  })

  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '50%' }}
          placeholder="请选择年份"
          defaultValue={selectedYears}
          onChange={handleYearChange}
          options={timeOptions.reverse()}
        />
        <Select
          mode="multiple"
          allowClear
          style={{ width: '50%' }}
          placeholder="请选择文理/首选科目"
          defaultValue={selectedCategories}
          onChange={handleCategoryChange}
          options={firstChoiceOptions}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        onChange={onChange}
        pagination={{ pageSize: 7 }}
      />
    </Space>
  )
}

export default App
