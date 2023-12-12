import React, { useEffect, useState } from 'react'
import { Card, Divider, Input, Button, List, Skeleton, Typography } from 'antd'
import { MajorItem } from './style'

import GenderRatioChart from './GenderRatio'

import SubjectRatioChart from './SubjectRatio'

import { it } from 'node:test'
import { SearchProps } from 'antd/es/input/Search'
import { router } from 'next/client'

const { Text } = Typography

const { Search } = Input

// TODO: MajorList 太丑了，需要美化：1.太空了，资源利用不到位 2.List.Item.Meta限制太多了，要自定义内容

interface DataType {
  // gender?: string;
  // name: {
  //   title?: string;
  //   first?: string;
  //   last?: string;
  // };
  id?: number
  name?: string
  // email?: string;
  website?: string
  picture: {
    large?: string
    medium?: string
    thumbnail?: string
  }
  motto?: string
  salary?: number
  introduction?: {
    what?: string
    learn?: string
    do?: string
  }
  detailed_introduction?: string
  subject?: string
  ratio?: {
    male?: number
    science?: number
  }
  direction?: string
  course?: string
  celebrity?: string
  // nat?: string;
  loading: boolean
  description?: string
}

const count = 3
const fakeDataUrl = `/data/majors.json`

const MajorInfo: React.FC = props => {
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataType[]>([])
  const [list, setList] = useState<DataType[]>([])
  const [majorDetail, setMajorDetail] = useState<DataType>({
    id: 1,
    name: '软件工程',
    picture: {
      large:
        'https://tse1-mm.cn.bing.net/th/id/OIP-C.3y0c0QX0L3X6z4p3d0h4XgHaHa?pid=ImgDet&rs=1',
    },
    motto: '软件工程',
    loading: false,
    description: '软件工程',
    website: 'https://www.baidu.com',
    salary: 10000,
    introduction: {
      what: '软件工程是一门研究计算机科学和工程学原理、方法和工具，以及将这些原理、方法和工具应用于计算机软件的创造和应用的学科。',
      learn:
        '软件工程是一门研究计算机科学和工程学原理、方法和工具，以及将这些原理、方法和工具应用于计算机软件的创造和应用的学科。',
      do: '软件工程是一门研究计算机科学和工程学原理、方法和工具，以及将这些原理、方法和工具应用于计算机软件的创造和应用的学科。',
    },
    detailed_introduction:
      '软件工程是一门研究计算机科学和工程学原理、方法和工具，以及将这些原理、方法和工具应用于计算机软件的创造和应用的学科。软件工程是一门研究计算机科学和工程学原理、方法和工具，以及将这些原理、方法和工具应用于计算机软件的创造和应用的学科。软件工程是一门研究计算机科学和工程学原理、方法和工具，以及将这些原理、方法和工具应用于计算机软件的创造和应用的学科。',
    subject: '软件',
  })
  //获取url中param位置的参数的值的代码

  // const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get('id');
  useEffect(() => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        setInitLoading(false)
        setData(res.results)
        setList(res.results)
        setMajorDetail(res.results[0])
      })
      .catch(e => {
        console.log(e)
        setInitLoading(false)
      })
  }, [])

  const onLoadMore = () => {
    setLoading(true)
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: '',
          picture: {},
        })),
      ),
    )
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        const newData = data.concat(res.results)
        setData(newData)
        setList(newData)
        setLoading(false)
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'))
      })
      .catch(e => {
        console.log(e)
        setLoading(false)
      })
  }

  const handleMajorItemClick = () => {
    // router.push('/SearchSchoolPage')
    // router.push('/SearchSchoolPage');
    //   window.open('https://www.example.com', '_blank');
  }

  const ListItem = (item: DataType) => {
    return (
      <MajorItem>
        {/*<img src={item.picture.large} style={{ borderRadius: '3px', width: '80px', height: '80px' }} />*/}
        <div
          style={{ marginLeft: '10px', cursor: 'pointer' }}
          onClick={handleMajorItemClick}
        >
          <h3 style={{ margin: '0px', marginTop: '6px', color: '#1677ff' }}>
            {item.name}
          </h3>
          <p style={{ margin: '0px', marginTop: '5px', color: 'gray' }}>
            平均薪酬：￥{item.salary}
          </p>
          <p style={{ margin: '0px', marginTop: '2px' }}>{item.description}</p>
        </div>
      </MajorItem>
    )
  }

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null

  const info = (item: DataType) => {
    return (
      <>
        <p>{item.motto}</p>
        <Text>{item.description}</Text>
      </>
    )
  }

  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value)

  return (
    <>
      {/*浅灰色的背景*/}

      <div style={{ backgroundColor: 'whitesmoke' }}>
        {/*<Divider orientation="left"></Divider>*/}

        <Card id="专业简介" size="small" style={{ width: '100%' }} hoverable>
          <h1>专业信息</h1>
          {/*灰色的字*/}
          <p style={{ color: 'gray' }}>{majorDetail.description}</p>
        </Card>

        <Divider orientation="left">
          {/*<h3>专业简介</h3>*/}
          专业简介
        </Divider>

        <Card id="专业简介" size="small" style={{ width: '100%' }} hoverable>
          <div>
            <p>是什么</p>
            <p style={{ color: 'gray' }}>{majorDetail.introduction.what}</p>
            <p>学什么</p>
            <p style={{ color: 'gray' }}>{majorDetail.introduction.learn}</p>
            <p>干什么</p>
            <p style={{ color: 'gray' }}>{majorDetail.introduction.do}</p>
          </div>
        </Card>

        <Divider orientation="left">
          {/*<h3>详解</h3>*/}
          详解
        </Divider>

        <Card id="专业详解" size="small" style={{ width: '100%' }} hoverable>
          <p style={{ color: 'gray' }}>{majorDetail.detailed_introduction}</p>
        </Card>

        <Divider orientation="left">
          {/*<h3>学科</h3>*/}
          学科
        </Divider>

        <Card
          id="选考学科建议"
          size="small"
          style={{ width: '100%' }}
          hoverable
        >
          <h3>选考学科建议:{majorDetail.subject}</h3>
        </Card>

        <Divider orientation="left">
          {/*<h3>学生比例</h3>*/}
          学生比例
        </Divider>

        <div
          style={{
            height: '300px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Card size="small" style={{ height: '300px', width: '49.5%' }}>
            <GenderRatioChart />
          </Card>
          <Card size="small" style={{ height: '300px', width: '49.5%' }}>
            <SubjectRatioChart />
          </Card>
        </div>

        <Divider orientation="left">
          {/*<h3>考研方向</h3>*/}
          考研方向
        </Divider>

        <Card id="考研方向" size="small" style={{ width: '100%' }} hoverable>
          {/*<h3>考研方向</h3>*/}
          <p style={{ color: 'gray' }}>{majorDetail.direction}</p>
        </Card>

        <Divider orientation="left">开设课程</Divider>

        <Card id="开设课程" size="small" style={{ width: '100%' }} hoverable>
          {/*<h3>开设课程</h3>*/}
          <p style={{ color: 'gray' }}>{majorDetail.course}</p>
        </Card>

        <Divider orientation="left">社会名人</Divider>

        <Card id="社会名人" size="small" style={{ width: '100%' }} hoverable>
          {/*<h3>社会名人</h3>*/}
          <p style={{ color: 'gray' }}>{majorDetail.celebrity}</p>
        </Card>
      </div>
    </>
  )
}

export default MajorInfo
