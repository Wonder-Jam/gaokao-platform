import { Mask } from './style'
import { Card, Divider, Tag, Space, Popover, Button } from 'antd'
import UniversityScoreLine from './UniversityScoreLine'
import UniversityScoreLineTable from './UniversityScoreLineTable'
import UniversityMajorPlan from './UniversityMajorPlan'
import type { ScorelineDataType, UniversityDetailProps } from '../type'
import UniersityOverview from './UniversityOverview'
import { FieldTimeOutlined, FlagOutlined, EnvironmentOutlined, NodeIndexOutlined } from '@ant-design/icons';
import UniversityRank from './UniversityRank'
import GenderRatioChart from './UniversityGenderRatio'
import UniversityEnvironment from './UniversityEvironment'
// 测试数据，来源于[4]和[6]
const scorelineData = [
  { year: 2010, score: 602, type: '文史' },
  { year: 2010, score: 652, type: '理工' },
  { year: 2011, score: 605, type: '文史' },
  { year: 2011, score: 655, type: '理工' },
  { year: 2012, score: 608, type: '文史' },
  { year: 2012, score: 658, type: '理工' },
  { year: 2013, score: 610, type: '文史' },
  { year: 2013, score: 660, type: '理工' },
  { year: 2014, score: 612, type: '文史' },
  { year: 2014, score: 662, type: '理工' },
  { year: 2015, score: 615, type: '文史' },
  { year: 2015, score: 665, type: '理工' },
  { year: 2016, score: 618, type: '文史' },
  { year: 2016, score: 668, type: '理工' },
  { year: 2017, score: 620, type: '文史' },
  { year: 2017, score: 670, type: '理工' },
  { year: 2018, score: 623, type: '文史' },
  { year: 2018, score: 673, type: '理工' },
  { year: 2019, score: 626, type: '文史' },
  { year: 2019, score: 676, type: '理工' },
  { year: 2020, score: 629, type: '文史' },
  { year: 2020, score: 679, type: '理工' },
  { year: 2021, score: 632, type: '文史' },
  { year: 2021, score: 682, type: '理工' },
  { year: 2022, score: 635, type: '文史' },
  { year: 2022, score: 685, type: '理工' },
]

const MajorData = [
  {
    key: 1,
    major: ['软件工程', '计算机科学与技术', '网络工程', '信息安全'],
    majorGroup: '专业组2',
    admissionType: '普通批',
    requirement: '首选物理，再选不限',
    year: 2022,
    scoreLine: 654,
    category: '理工/物理',
  },
  {
    key: 2,
    major: ['工商管理', '市场营销', '财务管理', '人力资源管理'],
    majorGroup: '专业组3',
    admissionType: '普通批',
    requirement: '首选历史，再选不限',
    year: 2022,
    scoreLine: 670,
    category: '文史/历史',
  },
  {
    key: 3,
    major: ['新闻传播学', '广告学', '汉语言文学', '历史学'],
    majorGroup: '专业组1',
    admissionType: '提前批',
    requirement: '首选历史，再选不限',
    year: 2022,
    scoreLine: 688,
    category: '文史/历史',
  },
  {
    key: 4,
    major: ['化学工程', '材料科学与工程', '能源与动力工程'],
    majorGroup: '专业组4',
    admissionType: '普通批',
    requirement: '首选物理，再选化学',
    year: 2022,
    scoreLine: 660,
    category: '理工/物理',
  },
  {
    key: 5,
    major: ['经济学', '金融学', '国际经济与贸易', '统计学'],
    majorGroup: '专业组5',
    admissionType: '提前批',
    requirement: '首选不限，再选不限',
    year: 2022,
    scoreLine: 675,
    category: '不限',
  },
  {
    key: 6,
    major: ['人工智能', '匡亚明理科实验班'],
    majorGroup: '专业组6',
    admissionType: '普通批',
    requirement: '首选物理，再选化学',
    year: 2022,
    scoreLine: 690,
    category: '理工/物理',
  },
  {
    key: 7,
    major: ['软件工程', '计算机科学与技术', '网络工程', '信息安全'],
    majorGroup: '专业组2',
    admissionType: '普通批',
    requirement: '首选物理，再选不限',
    year: 2021,
    scoreLine: 654,
    category: '理工/物理',
  },
  {
    key: 8,
    major: ['工商管理', '市场营销', '财务管理', '人力资源管理'],
    majorGroup: '专业组3',
    admissionType: '普通批',
    requirement: '首选历史，再选不限',
    year: 2021,
    scoreLine: 670,
    category: '文史/历史',
  },
  {
    key: 9,
    major: ['新闻传播学', '广告学', '汉语言文学', '历史学'],
    majorGroup: '专业组1',
    admissionType: '提前批',
    requirement: '首选历史，再选不限',
    year: 2021,
    scoreLine: 688,
    category: '文史/历史',
  },
  {
    key: 10,
    major: ['化学工程', '材料科学与工程', '能源与动力工程'],
    majorGroup: '专业组4',
    admissionType: '普通批',
    requirement: '首选物理，再选化学',
    year: 2021,
    scoreLine: 660,
    category: '理工/物理',
  },
  {
    key: 11,
    major: ['经济学', '金融学', '国际经济与贸易', '统计学'],
    majorGroup: '专业组5',
    admissionType: '提前批',
    requirement: '首选不限，再选不限',
    year: 2021,
    scoreLine: 675,
    category: '不限',
  },
  {
    key: 12,
    major: ['人工智能', '匡亚明理科实验班'],
    majorGroup: '专业组6',
    admissionType: '普通批',
    requirement: '首选物理，再选化学',
    year: 2021,
    scoreLine: 690,
    category: '理工/物理',
  },
  {
    key: 13,
    major: ['软件工程', '计算机科学与技术', '网络工程', '信息安全'],
    majorGroup: '专业组2',
    admissionType: '普通批',
    requirement: '首选物理，再选不限',
    year: 2020,
    scoreLine: 654,
    category: '理工/物理',
  },
  {
    key: 14,
    major: ['工商管理', '市场营销', '财务管理', '人力资源管理'],
    majorGroup: '专业组3',
    admissionType: '普通批',
    requirement: '首选历史，再选不限',
    year: 2020,
    scoreLine: 670,
    category: '文史/历史',
  },
  {
    key: 15,
    major: ['新闻传播学', '广告学', '汉语言文学', '历史学'],
    majorGroup: '专业组1',
    admissionType: '提前批',
    requirement: '首选历史，再选不限',
    year: 2020,
    scoreLine: 688,
    category: '文史/历史',
  },
  {
    key: 16,
    major: ['化学工程', '材料科学与工程', '能源与动力工程'],
    majorGroup: '专业组4',
    admissionType: '普通批',
    requirement: '首选物理，再选化学',
    year: 2020,
    scoreLine: 660,
    category: '理工/物理',
  },
  {
    key: 17,
    major: ['经济学', '金融学', '国际经济与贸易', '统计学'],
    majorGroup: '专业组5',
    admissionType: '提前批',
    requirement: '首选不限，再选不限',
    year: 2020,
    scoreLine: 675,
    category: '不限',
  },
  {
    key: 18,
    major: ['人工智能', '匡亚明理科实验班'],
    majorGroup: '专业组6',
    admissionType: '普通批',
    requirement: '首选数学，再选物理',
    year: 2020,
    scoreLine: 690,
    category: '理工/物理',
  },
]

const rankData = [
  { year: 2010, rank: 120, type: 'USNews' },
  { year: 2010, rank: 115, type: 'QS' },
  { year: 2010, rank: 110, type: 'THE' },
  { year: 2010, rank: 105, type: 'ARWU' },
  { year: 2011, rank: 118, type: 'USNews' },
  { year: 2011, rank: 113, type: 'QS' },
  { year: 2011, rank: 108, type: 'THE' },
  { year: 2011, rank: 103, type: 'ARWU' },
  { year: 2012, rank: 116, type: 'USNews' },
  { year: 2012, rank: 111, type: 'QS' },
  { year: 2012, rank: 106, type: 'THE' },
  { year: 2012, rank: 101, type: 'ARWU' },
  { year: 2013, rank: 114, type: 'USNews' },
  { year: 2013, rank: 109, type: 'QS' },
  { year: 2013, rank: 104, type: 'THE' },
  { year: 2013, rank: 99, type: 'ARWU' },
  { year: 2014, rank: 112, type: 'USNews' },
  { year: 2014, rank: 107, type: 'QS' },
  { year: 2014, rank: 102, type: 'THE' },
  { year: 2014, rank: 97, type: 'ARWU' },
  { year: 2015, rank: 110, type: 'USNews' },
  { year: 2015, rank: 105, type: 'QS' },
  { year: 2015, rank: 100, type: 'THE' },
  { year: 2015, rank: 95, type: 'ARWU' },
  { year: 2016, rank: 108, type: 'USNews' },
  { year: 2016, rank: 103, type: 'QS' },
  { year: 2016, rank: 98, type: 'THE' },
  { year: 2016, rank: 93, type: 'ARWU' },
  { year: 2017, rank: 106, type: 'USNews' },
  { year: 2017, rank: 101, type: 'QS' },
  { year: 2017, rank: 96, type: 'THE' },
  { year: 2017, rank: 91, type: 'ARWU' },
  { year: 2018, rank: 104, type: 'USNews' },
  { year: 2018, rank: 99, type: 'QS' },
  { year: 2018, rank: 94, type: 'THE' },
  { year: 2018, rank: 89, type: 'ARWU' },
  { year: 2019, rank: 102, type: 'USNews' },
  { year: 2019, rank: 97, type: 'QS' },
  { year: 2019, rank: 92, type: 'THE' },
  { year: 2019, rank: 87, type: 'ARWU' },
  { year: 2020, rank: 100, type: 'USNews' },
  { year: 2020, rank: 95, type: 'QS' },
  { year: 2020, rank: 90, type: 'THE' },
  { year: 2020, rank: 85, type: 'ARWU' },
  { year: 2021, rank: 98, type: 'USNews' },
  { year: 2021, rank: 93, type: 'QS' },
  { year: 2021, rank: 88, type: 'THE' },
  { year: 2021, rank: 83, type: 'ARWU' },
  { year: 2022, rank: 96, type: 'USNews' },
  { year: 2022, rank: 91, type: 'QS' },
  { year: 2022, rank: 86, type: 'THE' },
  { year: 2022, rank: 81, type: 'ARWU' },
];


export default function UniversityDetail(data: UniversityDetailProps) {

  const tableData: ScorelineDataType[] = [];
  const years = Array.from(new Set(scorelineData.map(item => item.year))); // 提取唯一年份

  years.forEach((year, index) => {
    const newDataItem: ScorelineDataType = {
      key: `${index + 1}`,
      arts: scorelineData.find(item => item.year === year && item.type === '文史')?.score || 0,
      science: scorelineData.find(item => item.year === year && item.type === '理工')?.score || 0,
      year: year,
    };
    tableData.push(newDataItem);
  });

  const content = (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
      <div><a href="#学校简介">学校简介</a></div>
      <div><a href="#学校概况">学校概况</a></div>
      <div><a href="#历年分数">历年分数</a></div>
      <div><a href="#专业组分数">专业组分数</a></div>
      <div><a href="#大学排名">大学排名</a></div>
      <div><a href="#校园情况">校园情况</a></div>
    </div>
  );


  return (
    <div style={{ overflow: 'auto', marginTop: '-13px', height: '80vh', paddingBottom: '100px' }}>
      <div style={{ position: 'absolute', zIndex: '1', right: '10px', top: '10px' }} >
        <Popover title=<h1 style={{ display:'flex',justifyContent:'center',fontSize:'18px'}}>页内导航</h1> trigger="click" content={content}>
          <Button><NodeIndexOutlined />页内导航</Button>
        </Popover>
      </div>
      <div style={{ width: '100%', height: '20vh', backgroundColor: '#ffffff', backgroundImage: `url(${data.backgroundUrl})`, backgroundSize: 'cover' }}>
        <Mask />
      </div>
      <div style={{ marginTop: '-75px', display: 'flex', flexDirection: 'row', marginBottom: '-20px' }}>
        <img src={data.logoUrl} style={{ width: '150px', height: '150px' }} />
        <h1 style={{ marginTop: '85px' }}>
          {data.name}
          <Space style={{ marginLeft: '10px' }} size={[0, 4]} wrap>
            {data.tags[0] ? <Tag color="#f50">{data.tags[0]}</Tag> : null}
            {data.tags[1] ? <Tag color="#2db7f5">{data.tags[1]}</Tag> : null}
            {data.tags[2] ? <Tag color="#87d068">{data.tags[2]}</Tag> : null}
            {data.tags[3] ? <Tag color="#108ee9">{data.tags[3]}</Tag> : null}
          </Space>
        </h1>
      </div>
      <Card id='学校简介' size='small' style={{ width: '100%' }}>
        <p>{data.description}</p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><FieldTimeOutlined style={{ marginRight: '5px', color: '#1677FF' }} /><p style={{ marginRight: '5px' }}>建校时间:</p><p>1902</p></div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><FlagOutlined style={{ marginRight: '5px', color: '#1677FF' }} /><p style={{ marginRight: '5px' }}>主管部门:</p><p>教育部</p></div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><EnvironmentOutlined style={{ marginRight: '5px', color: '#1677FF' }} /><p style={{ marginRight: '5px' }}>学校地址:</p><p>鼓楼校区: 江苏省南京市鼓楼区汉口路22号<br />仙林校区: 江苏省南京市栖霞区仙林大道163号</p></div>
        </div>
      </Card>
      <div id='学校概况'></div>
      <Divider orientation="left">
        学校概况
      </Divider>
      <UniersityOverview />
      <div id='历年分数'></div>
      <Divider orientation="left">
        历年分数
      </Divider>
      <div style={{ height: '300px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Card size='small' style={{ width: '49.5%', height: '300px' }}>
          <UniversityScoreLine data={scorelineData as { year: number; score: number; type: "文史" | "理工"; }[]} />
        </Card>
        <div style={{ width: '49.5%', height: '50vh' }}>
          <UniversityScoreLineTable data={tableData.reverse()} />
        </div>
      </div>
      <div id='专业组分数'></div>
      <Divider orientation="left">
        专业组分数
      </Divider>
      <UniversityMajorPlan data={MajorData} />
      <div id='大学排名'></div>
      <Divider orientation="left">
        大学排名
      </Divider>
      <Card size='small' style={{ height: '300px' }}>
        <UniversityRank data={rankData as { year: number; rank: number; type: "USNews" | "QS" | "THE" | "ARWU"; }[]} />
      </Card>
      <div id='校园情况'></div>
      <Divider orientation="left">
        校园情况
      </Divider>
      <div style={{ height: '300px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Card size='small' style={{ height: '300px', width: '49.5%' }}>
          <GenderRatioChart />
        </Card>
        <UniversityEnvironment style={{ width: '49.5%' }} />
      </div>
    </div>
  )
}
