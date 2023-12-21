import { List, Skeleton, Tabs } from 'antd'
import { RightBarContainer, TabContainer } from '../../style'
import { TabData, TabDataType, HotSpot, TabTitle } from './HotSpotData'
import {
  HotSpotListContainer,
  ItemContainer,
  NumberContainer,
  TitleContainer,
} from './style'
import { usePageNavigation } from '@/hooks/usePageNavigation'
import React from 'react'
import Searchbar from '@/components/Searchbar'
import { responseData } from '@/pages/SearchSchoolPage/components/UniversityList'
import { useMaskContext } from '../../context/MaskContext'

const fakeDataUrl = 'api/universitylist'
function HotSpotList({
  list,
  hotSpotType,
}: {
  list: HotSpot[]
  hotSpotType: TabTitle
}) {
  const { goToSearchSchoolPage } = usePageNavigation()
  const targetSchool = React.useRef('')
  return (
    <HotSpotListContainer>
      <List
        split={false}
        dataSource={list}
        renderItem={(item: HotSpot, index) => (
          <ItemContainer>
            <List.Item
              onClick={() => {
                if (hotSpotType === '政策分析' || hotSpotType === '专业热搜') {
                  window.open(item.link, '_blank')
                } else {
                  targetSchool.current = item.title
                  goToSearchSchoolPage({
                    name: targetSchool.current,
                  })
                }
              }}
            >
              <NumberContainer>{index + 1}</NumberContainer>
              <TitleContainer>{item.title}</TitleContainer>
            </List.Item>
          </ItemContainer>
        )}
      />
    </HotSpotListContainer>
  )
}

const generateItems = (data: TabDataType[]) => {
  return data.map((value: TabDataType, index) => ({
    key: '' + index,
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {value.icon}
        {value.tabTitle}
      </div>
    ),
    children: (
      <HotSpotList list={value.dataSource} hotSpotType={value.tabTitle} />
    ),
  }))
}

// 在组件中使用generateItems函数生成items数组
export function HotSpotTopicContainer({ show }: { show: boolean }) {
  const [data, setData] = React.useState<TabDataType[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const items = generateItems(data)
  React.useEffect(() => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then((res: responseData) => {
        const { page } = res
        TabData[1].dataSource = page.map(value => ({
          title: value.name,
          link: value.website,
        }))
        setData(TabData) // 更新数据到状态变量
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  const options = React.useMemo(() => {
    if (data.length > 1 && data[1].dataSource) {
      return data[1].dataSource.map(value => value.title)
    }
    return []
  }, [data])
  const onSearch = useMaskContext().onSearch
  return (
    <RightBarContainer show={show}>
      <Searchbar
        onSearch={onSearch}
        style={{ width: '100%', marginBottom: '5px' }}
        optionsData={options}
        placeholder={'快搜索你感兴趣的学校吧！'}
      />
      <TabContainer>
        {isLoading ? (
          <Skeleton style={{ width: '300px' }} />
        ) : (
          <Tabs type="card" defaultActiveKey="1" items={items} />
        )}
      </TabContainer>
    </RightBarContainer>
  )
}
