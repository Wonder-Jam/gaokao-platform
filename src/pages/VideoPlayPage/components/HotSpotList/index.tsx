import { List, Tabs } from 'antd'
import { RightBarContainer, TabContainer } from '../../style'
import { TabData, TabDataType, HotSpot } from './HotSpotData'
import {
  HotSpotListContainer,
  ItemContainer,
  NumberContainer,
  TitleContainer,
} from './style'

const items = TabData.map((value: TabDataType, index) => ({
  key: '' + index,
  label: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {value.icon}
      {value.tabTitle}
    </div>
  ),
  children: (
    <HotSpotList
      list={value.dataSource}
      tabContentBackGroundColor={value.tabContentBackGroundColor}
    />
  ),
}))

function HotSpotList({
  list,
  tabContentBackGroundColor,
}: {
  list: HotSpot[]
  tabContentBackGroundColor: string
}) {
  return (
    <HotSpotListContainer>
      <List
        split={false}
        dataSource={list}
        renderItem={(item: HotSpot, index) => (
          <ItemContainer>
            <List.Item
              onClick={() => window.open(item.link, '_blank')}
              style={{}}
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
