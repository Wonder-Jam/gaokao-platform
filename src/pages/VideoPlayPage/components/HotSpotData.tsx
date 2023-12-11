export interface HotSpot {
  title: string
  link: string
}

export interface TabDataType {
  tabTitle: string
  tabTextColor: string
  tabContentBackGroundColor: string
  dataSource: HotSpot[]
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
export const TabData: TabDataType[] = [
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
