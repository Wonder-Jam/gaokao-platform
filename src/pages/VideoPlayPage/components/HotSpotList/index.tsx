import { List, Tabs } from 'antd'
import { RightBarContainer, TabContainer } from '../../style'
import {
  TabData,
  TabDataType,
  HotSpot,
  TabTitle,
  SchoolDetail,
} from './HotSpotData'
import {
  HotSpotListContainer,
  ItemContainer,
  NumberContainer,
  TitleContainer,
} from './style'
import { usePageNavigation } from '@/hooks/usePageNavigation'
import React from 'react'
import eventBus from '@/utils/eventBus'
import UniversityDetail from '@/pages/SearchSchoolPage/components/UniversityDetail'

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
                  console.log(targetSchool)
                  fetch(fakeDataUrl)
                    .then(res => res.json())
                    .then((schoolList: SchoolDetail[]) => {
                      const school = schoolList.find(
                        value => value.name === targetSchool.current,
                      )
                      if (school) {
                        const cachedTabs = sessionStorage.getItem('schoolTabs')
                        const newTabIndexString = sessionStorage.getItem('newTabIndex')
                        sessionStorage.setItem('newTabIndex',String(Number(newTabIndexString) + 1))
                        if (cachedTabs && cachedTabs !== '[]') {
                          const tabInfos = JSON.parse(cachedTabs)
                          tabInfos.push({
                            label: school.name,
                            children: (
                              <UniversityDetail
                                name={school.name}
                                description={school.description}
                                motto={school.motto}
                                logoUrl={school.picture.large}
                                backgroundUrl={school.background}
                                tags={school.tags}
                                website={school.website}
                              />
                            ),
                          })
                          sessionStorage.setItem('schoolTabs',JSON.stringify(tabInfos))
                        }

                        goToSearchSchoolPage()
                      } else {
                        window.open(item.link, '_blank')
                      }
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
