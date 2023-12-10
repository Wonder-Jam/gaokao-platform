import React from 'react'
import { Card, Image, Button, Avatar, List, Tabs, TabsProps } from 'antd'
import RootLayout from '@/app/layout'
const { Meta } = Card
import {
  ArrowLeftOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from '@ant-design/icons'
import {
  CardContainer,
  CardListContainer,
  ArrowLeftContainer,
  UpAndDownContainer,
  WxContanier,
  RightBarContainer,
  TabContainer,
  ToggleContainer,
} from './style'
import Mask from '../../components/Mask'
import { usePageContainer } from '../_app.page'
import { useSlideAnimation } from '@/hooks/useSlideAnimation'
import { VideoSchoolType, VideoSchoolList, WeChatArticles } from './data'
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'
import { useToggle } from 'ahooks'

function CardItem(props: VideoSchoolType) {
  const [show, setShow] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const PageRef = usePageContainer()
  const Animation = useSlideAnimation({
    targetRef: cardRef,
    direction: show ? 'slide-in' : 'slide-out',
    pageRef: PageRef,
    contentNode: <CardDetail {...props} />,
  })
  return (
    <>
      <CardContainer>
        <Card
          style={{}}
          ref={cardRef}
          onClick={() => setShow(true)}
          hoverable
          cover={
            <Image
              style={{
                height: '350px',
                objectFit: 'cover',
              }}
              preview={false}
              alt="example"
              src={props.schoolCover}
            />
          }
        >
          <Meta
            style={{
              display: 'flex',
              alignItems: 'contain',
            }}
            title={props.schoolName}
            description={props.schoolSiteUrl}
          />
        </Card>
      </CardContainer>
      <MaskContainer isShown={show} setShow={setShow}>
        {Animation}
      </MaskContainer>
    </>
  )
}

function MaskContainer(props: {
  isShown: boolean
  setShow: (value: React.SetStateAction<boolean>) => void
  children: React.ReactNode
}) {
  const { isShown, setShow, children } = props
  return (
    <Mask isShown={isShown}>
      <ArrowLeftContainer onClick={() => setShow(false)}>
        <ArrowLeftOutlined />
      </ArrowLeftContainer>
      <UpAndDownContainer>
        <UpOutlined />
        <DownOutlined />
      </UpAndDownContainer>
      {children}
    </Mask>
  )
}

function CardDetail(props: VideoSchoolType) {
  const {
    videoUrl,
    schoolName,
    schoolSiteUrl,
    schoolRecuritmentUrl,
    schoolBdage,
    schoolCover,
  } = props
  React.useEffect(() => {
    const player = new Player({
      id: videoUrl + 'video',
      url: videoUrl,
      width: '70%',
      height: '100%',
      poster: schoolCover,
    })
    return () => {
      if (player) {
        player.destroy()
      }
    }
  }, [])
  return (
    <div
      style={{
        width: '75vw',
        height: '90vh',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        position: 'relative',
      }}
    >
      <div id={videoUrl + 'video'}></div>
      <div
        style={{
          position: 'absolute',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          height: '150px',
          width: '30%',
          minWidth: '300px',
          backgroundColor: '#fff',
          right: 0,
        }}
      >
        <div style={{ marginTop: '10px' }}>{schoolBdage}</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            textAlign: 'center',
          }}
        >
          <div style={{ color: '#0070f3' }}>{schoolName}</div>
          <Button size="large" target="_blank" href={schoolSiteUrl}>
            学校官网
          </Button>
          <Button size="large" target="_blank" href={schoolRecuritmentUrl}>
            本科招生网
          </Button>
        </div>
      </div>
      <div
        style={{
          width: '30%',
          height: '100%',
          minWidth: '300px',
          overflowY: 'auto',
        }}
      >
        <div
          style={{ height: '150px', width: '100%', backgroundColor: '#fff' }}
        ></div>
        <List
          itemLayout="horizontal"
          dataSource={WeChatArticles}
          renderItem={(item, index) => (
            <WxContanier
              onClick={() => window.open(item.destinationLink, '_blank')}
            >
              <List.Item>
                <Avatar
                  shape="square"
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  src={item.image}
                  style={{ marginRight: '5px' }}
                />
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            </WxContanier>
          )}
        />
      </div>
    </div>
  )
}

export default function VideoPlayPage() {
  const cardItems = VideoSchoolList.map((item, index) => (
    <CardItem key={item.schoolName + '' + index} {...item} />
  ))
  const PageRef = React.useRef<HTMLDivElement>(null)
  const [isShown, { toggle }] = useToggle(true)
  return (
    <div style={{ height: '100%', width: '100%' }} ref={PageRef}>
      <RootLayout>
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
          <CardListContainer>{cardItems}</CardListContainer>
          <ToggleContainer onClick={toggle} show={isShown}>
            {isShown ? <RightOutlined /> : <LeftOutlined />}
          </ToggleContainer>
          <HotSpotTopicContainer show={isShown} />
        </div>
      </RootLayout>
    </div>
  )
}

interface HotSpot {
  title: string
  link: string
}

const PolicyData: HotSpot[] = [
  {
    title: '重磅！2024高考政策有变化？一分钟带你看懂！',
    link: 'https://mp.weixin.qq.com/s/WDXkithD179jHbB4SZ8m6w',
  },
  {
    title: '事关全国高考，教育部重要通知',
    link: 'https://mp.weixin.qq.com/s/al0ngK5991GSwKzW_s1eRw',
  },
  {
    title: '新高考3+1+2政策解读及选科建议',
    link: 'https://mp.weixin.qq.com/s/RTRTUxKnSJCtZDDKaRLRPQ',
  },
  {
    title: '2023年高考政策公布！这5大要点影响录取',
    link: 'https://mp.weixin.qq.com/s/aiG46LNHhKWBIqMGeMhyGw',
  },
  {
    title: '事关中高考改革！最新部署！',
    link: 'https://mp.weixin.qq.com/s/IriCZBOWiHElVeumU2bPTQ',
  },
  {
    title: '[24云南高考]2024年高考政策调整带来哪些变化？有哪些影响',
    link: 'https://mp.weixin.qq.com/s/4Ucg_kvFCxjhhvgw870yDQ',
  },
  {
    title: '竞争最残酷的一届！2024年全国高考人数超1353万',
    link: 'https://mp.weixin.qq.com/s/AyPpNDYfoYhglmkWGTSy8g',
  },
  {
    title: '高考，就是高高兴兴去考试！',
    link: 'https://mp.weixin.qq.com/s/bOQ3aVNZzDsKwol16Y9L8A',
  },
  {
    title: '重磅！2024高考政策有变化？一分钟带你看懂！',
    link: 'https://mp.weixin.qq.com/s/WDXkithD179jHbB4SZ8m6w',
  },
  {
    title: '事关全国高考，教育部重要通知',
    link: 'https://mp.weixin.qq.com/s/al0ngK5991GSwKzW_s1eRw',
  },
  {
    title: '新高考3+1+2政策解读及选科建议',
    link: 'https://mp.weixin.qq.com/s/RTRTUxKnSJCtZDDKaRLRPQ',
  },
  {
    title: '2023年高考政策公布！这5大要点影响录取',
    link: 'https://mp.weixin.qq.com/s/aiG46LNHhKWBIqMGeMhyGw',
  },
  {
    title: '事关中高考改革！最新部署！',
    link: 'https://mp.weixin.qq.com/s/IriCZBOWiHElVeumU2bPTQ',
  },
  {
    title: '[24云南高考]2024年高考政策调整带来哪些变化？有哪些影响',
    link: 'https://mp.weixin.qq.com/s/4Ucg_kvFCxjhhvgw870yDQ',
  },
  {
    title: '竞争最残酷的一届！2024年全国高考人数超1353万',
    link: 'https://mp.weixin.qq.com/s/AyPpNDYfoYhglmkWGTSy8g',
  },
  {
    title: '高考，就是高高兴兴去考试！',
    link: 'https://mp.weixin.qq.com/s/bOQ3aVNZzDsKwol16Y9L8A',
  },
]
const popularUniversities: HotSpot[] = [
  {
    title: '南京大学',
    link: 'https://www.nju.edu.cn/',
  },
  {
    title: '清华大学',
    link: 'https://www.tsinghua.edu.cn/',
  },
  {
    title: '北京大学',
    link: 'https://www.pku.edu.cn/',
  },
  {
    title: '复旦大学',
    link: 'https://www.fudan.edu.cn/',
  },
  {
    title: '上海交通大学',
    link: 'https://www.sjtu.edu.cn/',
  },
  {
    title: '武汉大学',
    link: 'https://www.whu.edu.cn/',
  },
  {
    title: '中山大学',
    link: 'https://www.sysu.edu.cn/',
  },
  {
    title: '浙江大学',
    link: 'https://www.zju.edu.cn/',
  },

  {
    title: '四川大学',
    link: 'https://www.scu.edu.cn/',
  },
  {
    title: '华中科技大学',
    link: 'http://www.hust.edu.cn/',
  },
  {
    title: '西安交通大学',
    link: 'https://www.xjtu.edu.cn/',
  },
  {
    title: '北京航空航天大学',
    link: 'https://ev.buaa.edu.cn/',
  },
  {
    title: '同济大学',
    link: 'https://www.tongji.edu.cn/',
  },
  {
    title: '南开大学',
    link: 'https://www.nankai.edu.cn/',
  },
  {
    title: '厦门大学',
    link: 'https://www.xmu.edu.cn/',
  },
]

const popularMajors: HotSpot[] = [
  {
    title: '计算机科学与技术',
    link: 'https://www.example.com/computer-science',
  },
  {
    title: '人工智能',
    link: 'https://www.example.com/artificial-intelligence',
  },
  {
    title: '数据科学',
    link: 'https://www.example.com/data-science',
  },
  {
    title: '机械工程',
    link: 'https://www.example.com/mechanical-engineering',
  },
  {
    title: '电子工程',
    link: 'https://www.example.com/electrical-engineering',
  },
  {
    title: '金融学',
    link: 'https://www.example.com/finance',
  },
  {
    title: '国际关系',
    link: 'https://www.example.com/international-relations',
  },
  {
    title: '医学',
    link: 'https://www.example.com/medicine',
  },
  {
    title: '法学',
    link: 'https://www.example.com/law',
  },
  {
    title: '心理学',
    link: 'https://www.example.com/psychology',
  },
  {
    title: '化学工程',
    link: 'https://www.example.com/chemical-engineering',
  },
  {
    title: '市场营销',
    link: 'https://www.example.com/marketing',
  },
  {
    title: '环境科学',
    link: 'https://www.example.com/environmental-science',
  },
  {
    title: '传媒与广告',
    link: 'https://www.example.com/media-and-advertising',
  },
  {
    title: '建筑学',
    link: 'https://www.example.com/architecture',
  },
]

interface TabDataType {
  tabTitle: string
  tabTextColor: string
  tabContentBackGroundColor: string
  dataSource: HotSpot[]
}

const TabData: TabDataType[] = [
  {
    tabTitle: '政策分析',
    tabTextColor: '#ff7875',
    tabContentBackGroundColor: '#fff1f0',
    dataSource: PolicyData,
  },
  {
    tabTitle: '院校热搜',
    tabTextColor: '#5cdbd3',
    tabContentBackGroundColor: '#e6fffb',
    dataSource: popularUniversities,
  },
  {
    tabTitle: '专业热搜',
    tabTextColor: '#95de64',
    tabContentBackGroundColor: '#f6ffed',
    dataSource: popularMajors,
  },
]

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

function HotSpotTopicContainer({ show }: { show: boolean }) {
  return (
    <RightBarContainer show={show}>
      <TabContainer>
        <Tabs type="card" defaultActiveKey="1" items={items} />
      </TabContainer>
    </RightBarContainer>
  )
}
