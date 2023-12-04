import React, { useEffect, useState } from 'react'
import { Input, Button, List, Typography, Card, Tag, Space } from 'antd'
import { UniversityItem } from './style'
import { eventBus } from '../utils/eventBus'
import { SearchProps } from 'antd/es/input/Search'
import { Searchbar } from './Searchbar'

const { Text } = Typography

// TODO: UniversityList 太丑了，需要美化：1.太空了，资源利用不到位 2.List.Item.Meta限制太多了，要自定义内容

interface DataType {
  name: string
  website: string
  picture: {
    large: string
    medium?: string
    thumbnail?: string
  }
  motto: string
  loading: boolean
  description: string
  background: string
  tags: string[]
}

const count = 3
const fakeDataUrl = 'api/universitylist'

const UniversityList: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataType[]>([])
  const [list, setList] = useState<DataType[]>([])

  useEffect(() => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        setInitLoading(false)
        setData(res)
        setList(res)
        // console.log(res.results)
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
          picture: { large: '' },
          motto: '',
          description: '',
          website: '',
          background: '',
          tags: [],
        })),
      ),
    )
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        const newData = data.concat(res)
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

  const onItemClicked = (item: DataType) => {
    // Access the properties of the item here
    console.log(item)
    eventBus.emit('universityClicked', item)
  }

  const ListItem = (item: DataType) => {
    return (
      <UniversityItem>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src={item.picture.large}
            style={{ borderRadius: '3px', width: '80px', height: '80px' }}
          />
          <div style={{ marginLeft: '10px' }}>
            <h3 style={{ margin: '0px', marginTop: '3px' }}>{item.name}</h3>
            <p style={{ margin: '0px', marginTop: '2px', color: 'gray' }}>
              {item.motto}
            </p>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
            <Space size={[0, 4]} wrap>
              {item.tags[0] ? <Tag color="#f50">{item.tags[0]}</Tag> : null}
              {item.tags[1] ? <Tag color="#2db7f5">{item.tags[1]}</Tag> : null}
              {item.tags[2] ? <Tag color="#87d068">{item.tags[2]}</Tag> : null}
              {item.tags[3] ? <Tag color="#108ee9">{item.tags[3]}</Tag> : null}
            </Space>
            {/* </div> */}
            {/* <p style={{ margin: '0px', marginTop: '1px' }}>{item.description}</p> */}
          </div>
        </div>
      </UniversityItem>
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
      {/* <Search
        placeholder="搜索大学..."
        onSearch={onSearch}
        enterButton
        size="large"
        bordered={true}
        style={{ position:'fixed', marginBottom: '10px', marginLeft: '5px', marginRight: '5px' }}
      /> */}
      <Searchbar
        style={{
          height: '7vh',
          width: '97%',
          marginBottom: '10px',
          marginLeft: '5px',
          marginRight: '5px',
        }}
      />
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        grid={{ gutter: 16, column: 1 }}
        itemLayout="horizontal"
        // bordered
        loadMore={loadMore}
        dataSource={list}
        style={{ overflowY: 'auto', overflowX: 'hidden', height: '90vh' }}
        renderItem={item => (
          <List.Item
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
            }}
          >
            <Card
              loading={item.loading}
              hoverable={true}
              size="small"
              style={{ width: '97%', height: '15%', padding: '0px' }}
              onClick={() => onItemClicked(item)}
            >
              <ListItem {...item} />
            </Card>
          </List.Item>
        )}
      />
    </>
  )
}

export default UniversityList
