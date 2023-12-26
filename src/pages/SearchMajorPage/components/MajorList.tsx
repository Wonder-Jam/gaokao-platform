import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { List, Card, Tag, Space, Divider, Skeleton, Button } from 'antd'
import { UniversityItem } from './style'
import { eventBus } from '../utils/eventBus'
import Searchbar from '@/components/Searchbar'
import FilterTag from './FilterTag'
import { SearchContext } from '../Context/SearchContext'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDebounceFn } from 'ahooks'
import { useRouter } from 'next/router'

// TODO: UniversityList 太丑了，需要美化：1.太空了，资源利用不到位 2.List.Item.Meta限制太多了，要自定义内容

export const TagColorMap = {
  '985': 'cyan',
  '211': 'green',
  双一流: 'orange',
  华东五校: 'red',
}

interface AppPorps {
  setUniversityListWidth: React.Dispatch<React.SetStateAction<string>>
}

export type tagsType = keyof typeof TagColorMap
export interface DataType {
  id?: number

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
  created: string
  dominant: string
  location: {
    name: string
    place: string
  }
  tags: tagsType[]
}

const count = 3
const fakeDataUrl = '/data/mockMajorData.json'
export interface responseData {
  contentSize: number
  page: DataType[]
}
const MajorList: React.FC<AppPorps> = props => {
  const [initLoading, setInitLoading] = useState(true)
  const [data, setData] = useState<DataType[]>([])
  const [list, setList] = useState<DataType[]>([])
  const [isFolded, setIsFolded] = useState(false)
  const listItemRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const hasInitialPage = useRef(false)
  const router = useRouter()
  const contentSize = useRef(0)
  const useItemHeight = useCallback(() => {
    if (listItemRef.current && listRef.current) {
      const listItemHeight = listItemRef.current.clientHeight
      const listHeight = listRef.current.clientHeight
      if (
        listItemHeight * list.length < listHeight &&
        list.length < contentSize.current
      ) {
        onLoadMore()
      }
    }
  }, [listItemRef.current, listRef.current, list.length, contentSize.current])
  const { run: useDebounceItemHeight } = useDebounceFn(useItemHeight, {
    wait: 500,
  })
  const needLoadMore = useMemo(() => {
    if (list.length === 0 && contentSize.current !== 0) return false
    return list.length < contentSize.current
  }, [contentSize.current, list.length])
  useEffect(useDebounceItemHeight, [list.length])
  useEffect(() => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then((res: responseData) => {
        setInitLoading(false)
        const { page } = res
        contentSize.current = res.contentSize
        setData(page)
        if (router.query.name && !hasInitialPage.current) {
          const target = page.find(value => value.name === router.query.name)
          if (target) {
            onItemClicked(target)
          }
        }
        hasInitialPage.current = true
      })
      .catch(e => {
        console.log(e)
        setInitLoading(false)
      })
    window.addEventListener('resize', useDebounceItemHeight)
    return () => {
      window.removeEventListener('resize', useDebounceItemHeight)
    }
  }, [])

  const { province, filterSchool } = useContext(SearchContext)
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
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        const { page } = res
        setData(prev => [...prev, ...page])
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'))
      })
      .catch(e => {
        console.log(e)
      })
  }

  const onItemClicked = useCallback((item: DataType) => {
    // eventBus.emit('universityClicked', item)
    eventBus.emit('majorClicked', item)
  }, [])
  const options = useMemo(() => {
    return list.map(value => value.name)
  }, [list]) // TODO:数据有可能重复，待修复

  const searshTargetSchool = useCallback(
    (targetName: string) => {
      const item = list.find(value => value.name === targetName)
      if (item) onItemClicked(item)
    },
    [list],
  )
  const ListItem = (item: DataType) => {
    return (
      <UniversityItem>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/*<img*/}
          {/*  src={item.picture.large}*/}
          {/*  style={{ borderRadius: '3px', width: '80px', height: '80px' }}*/}
          {/*/>*/}
          <div style={{ marginLeft: '10px' }}>
            <h3 style={{ margin: '0px', marginTop: '3px' }}>{item.name}</h3>
            <p style={{ margin: '0px', marginTop: '2px', color: 'gray' }}>
              {item.motto}
            </p>

            <Space size={[0, 4]} wrap>
              {item.tags[0] ? <Tag color="cyan">{item.tags[0]}</Tag> : null}
              {item.tags[1] ? <Tag color="green">{item.tags[1]}</Tag> : null}
              {item.tags[2] ? <Tag color="orange">{item.tags[2]}</Tag> : null}
              {item.tags[3] ? <Tag color="red">{item.tags[3]}</Tag> : null}
            </Space>

            {/*<Space size={[0, 4]} wrap>*/}
            {/*  {item.tags.map((value: tagsType) => {*/}
            {/*    return TagColorMap[value] ? (*/}
            {/*      <Tag color={TagColorMap[value]}>{value}</Tag>*/}
            {/*    ) : null*/}
            {/*  })}*/}
            {/*</Space>*/}
          </div>
        </div>
      </UniversityItem>
    )
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '5%',
          width: '97%',
          marginLeft: '5px',
          marginRight: '5px',
        }}
      >
        {/*<Button*/}
        {/*  icon={isFolded ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}*/}
        {/*  onClick={() => {*/}
        {/*    setIsFolded(prev => {*/}
        {/*      props.setUniversityListWidth(!prev ? '4%' : '30%')*/}
        {/*      if (typeof window !== 'undefined') {*/}
        {/*        setTimeout(() => {*/}
        {/*          window.dispatchEvent(new Event('resize'))*/}
        {/*        }, 30)*/}
        {/*      }*/}
        {/*      return !prev*/}
        {/*    })*/}
        {/*    console.log(isFolded)*/}
        {/*  }}*/}
        {/*/>*/}
        {isFolded ? null : (
          <Searchbar
            optionsData={options}
            onSearch={searshTargetSchool}
            size="middle"
            style={{
              height: '5%',
              width: '97%',
              marginLeft: '5px',
              // marginRight: '5px',
            }}
          />
        )}
      </div>
      {/*{isFolded ? null : (*/}
      {/*  <FilterTag*/}
      {/*    style={{*/}
      {/*      width: '97%',*/}
      {/*      height: '5%',*/}
      {/*      marginLeft: '5px',*/}
      {/*      marginRight: '5px',*/}
      {/*    }}*/}
      {/*  />*/}
      {/*)}*/}
      {isFolded ? null : (
        <div
          ref={listRef}
          id="scrollableDiv"
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
            height: '90%',
          }}
        >
          <InfiniteScroll
            dataLength={list.length}
            hasMore={needLoadMore}
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
              dataSource={list}
              renderItem={(item, index) => (
                <List.Item
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                  }}
                  ref={index === 0 ? listItemRef : null}
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
      )}
    </>
  )
}

export default MajorList
