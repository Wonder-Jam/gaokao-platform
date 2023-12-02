import React, { useState } from 'react'
import { Table, Space, Select } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'
import type { SelectProps } from 'antd'
import { MajorDataType } from '../type'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

interface AppProps {
  data: DataType[]
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

const columns: ColumnsType<DataType> = [
  {
    title: '年份',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: string | number | boolean, record) =>
      String(record.name).indexOf(String(value)) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value: string | number | boolean, record) =>
      String(record.name).indexOf(String(value)) === 0,
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log('params', pagination, filters, sorter, extra)
}

const App: React.FC = () => {
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

  // const filteredData = data.filter(item => {
  //     return (
  //         selectedYears.includes(item.year) &&
  //         selectedCategories.includes(item.category)
  //     );
  // });

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
          options={timeOptions}
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
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </Space>
  )
}

export default App
