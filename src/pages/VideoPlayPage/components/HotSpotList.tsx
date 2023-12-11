import { List, Tabs } from 'antd'
import { RightBarContainer, TabContainer } from '../style'
import { TabData, TabDataType, HotSpot } from './HotSpotData'

const items = TabData.map((value: TabDataType, index) => ({
  key: '' + index,
  label: <span style={{ color: value.tabTextColor }}>{value.tabTitle}</span>,
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
    <div
      style={{
        height: '80vh',
        overflow: 'auto',
        backgroundColor: tabContentBackGroundColor,
        borderRadius: '10px',
        padding: '0 5px',
      }}
    >
      <List
        split={false}
        dataSource={list}
        renderItem={(item: HotSpot, index) => (
          <List.Item
            onClick={() => window.open(item.link, '_blank')}
            style={{
              cursor: 'pointer',
              color: '#434343',
              fontWeight: '500',
            }}
          >
            <span
              style={{
                width: '10%',
                paddingRight: '10px',
                textAlign: 'end',
              }}
            >
              {index + 1}
            </span>
            <span
              style={{
                width: '90%',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {item.title}
            </span>
          </List.Item>
        )}
      />
    </div>
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
