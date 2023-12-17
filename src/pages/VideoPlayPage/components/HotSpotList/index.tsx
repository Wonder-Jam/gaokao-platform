import { List, Tabs } from 'antd'
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

const items = TabData.map((value: TabDataType, index) => ({
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
export function HotSpotTopicContainer({ show }: { show: boolean }) {
  return (
    <RightBarContainer show={show}>
      <TabContainer>
        <Tabs type="card" defaultActiveKey="1" items={items} />
      </TabContainer>
    </RightBarContainer>
  )
}
