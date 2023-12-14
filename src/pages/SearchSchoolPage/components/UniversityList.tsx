import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  createRef,
} from 'react'
import { List, Typography, Card, Tag, Space, Divider, Skeleton } from 'antd'
import { UniversityItem } from './style'
import { eventBus } from '../utils/eventBus'
import { Searchbar } from './Searchbar'
import FilterTag from './FilterTag'
import { SearchContext } from '../Context/SearchContext'
import InfiniteScroll from 'react-infinite-scroll-component'
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
  province: string
  tags: string[]
}

const count = 3
const fakeDataUrl = 'api/universitylist'

const UniversityList: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataType[]>([])
  const [list, setList] = useState<DataType[]>([])
  const listItemRef = createRef<HTMLElement>()
  useEffect(() => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        setInitLoading(false)
        setData(res)
        // setList(res)
        // console.log(res.results)
      })
      .catch(e => {
        console.log(e)
        setInitLoading(false)
      })
    const callback = () => {
      if (listItemRef.current) {
        const listItemHeight = listItemRef.current.clientHeight
        console.log('ListItem height:', listItemHeight)
      }
    }
    console.log('hiegh')
    window.addEventListener('resize', callback)
    callback()
  }, [])

  const { province, city, rank, setChoices, filterSchool } =
    useContext(SearchContext)

  useEffect(() => {
    if (province === '全国' && filterSchool.length === 0) {
      setList(data)
    } else if (province === '全国' && filterSchool.length !== 0) {
      setList(
        data.filter(item => {
          console.log('阿啦啦啦！' + item.tags)
          return item.tags.some(tag => filterSchool.includes(tag))
        }),
      )
    } else if (province !== '全国' && filterSchool.length === 0) {
      setList(data.filter(item => item.province === province))
    } else {
      setList(
        data.filter(
          item =>
            item.province === province &&
            item.tags.some(tag => filterSchool.includes(tag)),
        ),
      )
    }
  }, [data, filterSchool, province])

  const onLoadMore = () => {
    setLoading(true)
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
        province: '',
      })),
    )
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        const newData = data.concat(res)
        setData(newData)
        // setList(newData)
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

  // const loadMore =
  //   !initLoading && !loading ? (
  //     <div
  //       style={{
  //         textAlign: 'center',
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: '32px',
  //       }}
  //     >
  //       <Button onClick={onLoadMore}>loading more</Button>
  //     </div>
  //   ) : null

  return (
    <>
      <Searchbar
        style={{
          height: '5%',
          width: '97%',
          // marginBottom: '10px',
          marginLeft: '5px',
          marginRight: '5px',
        }}
      />
      <FilterTag
        style={{
          width: '97%',
          height: '5%',
          marginLeft: '5px',
          marginRight: '5px',
        }}
      />
      <div
        id="scrollableDiv"
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: '90%',
        }}
      >
        <InfiniteScroll
          dataLength={list.length}
          hasMore={false}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          next={onLoadMore}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          scrollableTarget="scrollableDiv"
        >
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            grid={{ gutter: 16, column: 1 }}
            itemLayout="horizontal"
            // bordered
            dataSource={list}
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
        </InfiniteScroll>
      </div>
    </>
  )
}

export default UniversityList
