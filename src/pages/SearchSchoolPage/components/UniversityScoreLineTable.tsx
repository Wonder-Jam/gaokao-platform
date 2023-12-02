import React from 'react'
import { Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'
import { ScorelineDataType } from '../type'

interface AppProps {
  data: ScorelineDataType[]
}

const columns: ColumnsType<ScorelineDataType> = [
  {
    title: '年份',
    dataIndex: 'year',
    sorter: (a, b) => a.year - b.year,
    width: '30%',
  },
  {
    title: '文史/历史',
    dataIndex: 'arts',
    sorter: (a, b) => a.arts - b.arts,
  },
  {
    title: '理工/物理',
    dataIndex: 'science',
    sorter: (a, b) => a.science - b.science,
  },
]

// const data: DataType[] = [
// {
//   key: '1',
//   arts: 602,
//   science: 652,
//   year: 2010,
// },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

const onChange: TableProps<ScorelineDataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log('params', pagination, filters, sorter, extra)
}

const App: React.FC<AppProps> = ({ data }) => {
  return (
    <Table
      pagination={{ pageSize: 4 }}
      style={{}}
      columns={columns}
      dataSource={data}
      onChange={onChange}
    />
  )
}

export default App
