import React, { useEffect, useState } from 'react'
import { Avatar, Button, List, Skeleton, Typography } from 'antd'
import { UniversityItem } from './style'
import { it } from 'node:test'

const { Text } = Typography

// TODO: UniversityList 太丑了，需要美化：1.太空了，资源利用不到位 2.List.Item.Meta限制太多了，要自定义内容

interface DataType {
  // gender?: string;
  // name: {
  //   title?: string;
  //   first?: string;
  //   last?: string;
  // };
  name?: string
  // email?: string;
  website?: string
  picture: {
    large?: string
    medium?: string
    thumbnail?: string
  }
  motto?: string
  // nat?: string;
  loading: boolean
  description?: string
}

const count = 3
const fakeDataUrl = `/files/universities.json`

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
        setData(res.results)
        setList(res.results)
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

  const ListItem = (item: DataType) => {
    return (
      <UniversityItem>
        <img src={item.picture.large} style={{ borderRadius: '3px', width: '80px', height: '80px' }} />
        <div style={{ marginLeft: '10px' }}>
          <h3 style={{margin: '0px', marginTop: '6px'}}><a href={item.website}>{item.name}</a></h3>
          <p style={{margin: '0px', marginTop: '5px', color: 'gray'}}>{item.motto}</p>
          <p style={{margin: '0px', marginTop: '2px'}}>{item.description}</p>
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

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      // bordered
      loadMore={loadMore}
      dataSource={list}
      renderItem={item => (
        <List.Item
        //   actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            {/* <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href={item.website}>{item.name}</a>}
              description={info(item)}
            /> */}
            {/* <p>{item.description}</p> */}
            <ListItem {...item} />
          </Skeleton>
        </List.Item>
      )}
    />
  )
}

export default UniversityList
