import NJU_LOGO from '@/static/school-badge/南京大学 NJU.svg'
import NJU_BACK from '@/static/school-badge/南京大学 NJU-1.svg'
import { Mask } from './style'
import { Card, Divider, Tag, Space } from 'antd'
import LineChart from './UniversityScoreLine'
import UniversityScoreLineTable from './UniversityScoreLineTable'
import UniversityMajorPlan from './UniversityMajorPlan'
import type { ScorelineDataType, UniversityDetailProps } from '../type'

// 测试数据，来源于[4]和[6]
const scorelineData = [
  { year: 2010, score: 602, type: "文史" },
  { year: 2010, score: 652, type: "理工" },
  { year: 2011, score: 605, type: "文史" },
  { year: 2011, score: 655, type: "理工" },
  { year: 2012, score: 608, type: "文史" },
  { year: 2012, score: 658, type: "理工" },
  { year: 2013, score: 610, type: "文史" },
  { year: 2013, score: 660, type: "理工" },
  { year: 2014, score: 612, type: "文史" },
  { year: 2014, score: 662, type: "理工" },
  { year: 2015, score: 615, type: "文史" },
  { year: 2015, score: 665, type: "理工" },
  { year: 2016, score: 618, type: "文史" },
  { year: 2016, score: 668, type: "理工" },
  { year: 2017, score: 620, type: "文史" },
  { year: 2017, score: 670, type: "理工" },
  { year: 2018, score: 623, type: "文史" },
  { year: 2018, score: 673, type: "理工" },
  { year: 2019, score: 626, type: "文史" },
  { year: 2019, score: 676, type: "理工" },
  { year: 2020, score: 629, type: "文史" },
  { year: 2020, score: 679, type: "理工" },
  { year: 2021, score: 632, type: "文史" },
  { year: 2021, score: 682, type: "理工" },
  { year: 2022, score: 635, type: "文史" },
  { year: 2022, score: 685, type: "理工" },
];

const MajorData = [
  {
    key: 1,
    major: ["软件工程", "计算机科学与技术", "网络工程", "信息安全"],
    majorGroup: "专业组2",
    admissionType: "普通批",
    requirement: "首选物理，再选不限",
    year: 2022,
    scoreLine: 654,
    category: "理工/物理",
  },
  {
    key: 2,
    major: ["工商管理", "市场营销", "财务管理", "人力资源管理"],
    majorGroup: "专业组3",
    admissionType: "普通批",
    requirement: "首选历史，再选不限",
    year: 2022,
    scoreLine: 670,
    category: "文史/历史",
  },
  {
    key: 3,
    major: ["新闻传播学", "广告学", "汉语言文学", "历史学"],
    majorGroup: "专业组1",
    admissionType: "提前批",
    requirement: "首选历史，再选不限",
    year: 2022,
    scoreLine: 688,
    category: "文史/历史",
  },
  {
    key: 4,
    major: ["化学工程", "材料科学与工程", "能源与动力工程"],
    majorGroup: "专业组4",
    admissionType: "普通批",
    requirement: "首选物理，再选化学",
    year: 2022,
    scoreLine: 660,
    category: "理工/物理",
  },
  {
    key: 5,
    major: ["经济学", "金融学", "国际经济与贸易", "统计学"],
    majorGroup: "专业组5",
    admissionType: "提前批",
    requirement: "首选不限，再选不限",
    year: 2022,
    scoreLine: 675,
    category: "不限",
  },
  {
    key: 6,
    major: ["人工智能", "匡亚明理科实验班"],
    majorGroup: "专业组6",
    admissionType: "普通批",
    requirement: "首选物理，再选化学",
    year: 2022,
    scoreLine: 690,
    category: "理工/物理",
  },
  {
    key: 7,
    major: ["软件工程", "计算机科学与技术", "网络工程", "信息安全"],
    majorGroup: "专业组2",
    admissionType: "普通批",
    requirement: "首选物理，再选不限",
    year: 2021,
    scoreLine: 654,
    category: "理工/物理",
  },
  {
    key: 8,
    major: ["工商管理", "市场营销", "财务管理", "人力资源管理"],
    majorGroup: "专业组3",
    admissionType: "普通批",
    requirement: "首选历史，再选不限",
    year: 2021,
    scoreLine: 670,
    category: "文史/历史",
  },
  {
    key: 9,
    major: ["新闻传播学", "广告学", "汉语言文学", "历史学"],
    majorGroup: "专业组1",
    admissionType: "提前批",
    requirement: "首选历史，再选不限",
    year: 2021,
    scoreLine: 688,
    category: "文史/历史",
  },
  {
    key: 10,
    major: ["化学工程", "材料科学与工程", "能源与动力工程"],
    majorGroup: "专业组4",
    admissionType: "普通批",
    requirement: "首选物理，再选化学",
    year: 2021,
    scoreLine: 660,
    category: "理工/物理",
  },
  {
    key: 11,
    major: ["经济学", "金融学", "国际经济与贸易", "统计学"],
    majorGroup: "专业组5",
    admissionType: "提前批",
    requirement: "首选不限，再选不限",
    year: 2021,
    scoreLine: 675,
    category: "不限",
  },
  {
    key: 12,
    major: ["人工智能", "匡亚明理科实验班"],
    majorGroup: "专业组6",
    admissionType: "普通批",
    requirement: "首选物理，再选化学",
    year: 2021,
    scoreLine: 690,
    category: "理工/物理",
  },
  {
    key: 13,
    major: ["软件工程", "计算机科学与技术", "网络工程", "信息安全"],
    majorGroup: "专业组2",
    admissionType: "普通批",
    requirement: "首选物理，再选不限",
    year: 2020,
    scoreLine: 654,
    category: "理工/物理",
  },
  {
    key: 14,
    major: ["工商管理", "市场营销", "财务管理", "人力资源管理"],
    majorGroup: "专业组3",
    admissionType: "普通批",
    requirement: "首选历史，再选不限",
    year: 2020,
    scoreLine: 670,
    category: "文史/历史",
  },
  {
    key: 15,
    major: ["新闻传播学", "广告学", "汉语言文学", "历史学"],
    majorGroup: "专业组1",
    admissionType: "提前批",
    requirement: "首选历史，再选不限",
    year: 2020,
    scoreLine: 688,
    category: "文史/历史",
  },
  {
    key: 16,
    major: ["化学工程", "材料科学与工程", "能源与动力工程"],
    majorGroup: "专业组4",
    admissionType: "普通批",
    requirement: "首选物理，再选化学",
    year: 2020,
    scoreLine: 660,
    category: "理工/物理",
  },
  {
    key: 17,
    major: ["经济学", "金融学", "国际经济与贸易", "统计学"],
    majorGroup: "专业组5",
    admissionType: "提前批",
    requirement: "首选不限，再选不限",
    year: 2020,
    scoreLine: 675,
    category: "不限",
  },
  {
    key: 18,
    major: ["人工智能", "匡亚明理科实验班"],
    majorGroup: "专业组6",
    admissionType: "普通批",
    requirement: "首选数学，再选物理",
    year: 2020,
    scoreLine: 690,
    category: "理工/物理",
  },
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

  return (
        <div style={{ overflow: 'auto', marginTop: '-13px', height: '90vh', paddingBottom: '100px' }}>
            <div style={{  width: '100%',height: '20vh',backgroundColor: '#ffffff', backgroundImage: `url(${data.backgroundUrl})`,backgroundSize: 'cover'}}>
                <Mask />
            </div>
            <div style={{ marginTop: '-75px', display: 'flex', flexDirection: 'row', marginBottom: '-20px' }}>
                <img src={data.logoUrl} style={{ width: '150px', height: '150px' }} />
                <h1 style={{ marginTop: '85px' }}>
                    {data.name}
                    <Space style={{marginLeft:'10px'}} size={[0, 4]} wrap>
                        {data.tags[0] ? <Tag color="#f50">{data.tags[0]}</Tag> : null}
                        {data.tags[1] ? <Tag color="#2db7f5">{data.tags[1]}</Tag> : null}
                        {data.tags[2] ? <Tag color="#87d068">{data.tags[2]}</Tag> : null}
                        {data.tags[3] ? <Tag color="#108ee9">{data.tags[3]}</Tag> : null}
                    </Space>
                </h1>
            </div>
            <Card size='small' style={{ width: '100%' }}>
                <p>{data.description}</p>
            </Card>
            <Divider orientation="left">
                历年分数
            </Divider>
            <div style={{ height: '300px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Card size='small' style={{ width: '49.5%', height: '300px' }}>
                    <LineChart data={scorelineData as { year: number; score: number; type: "文史" | "理工"; }[]} />
                </Card>
                <div style={{ width: '49.5%', height: '50vh' }}>
                    <UniversityScoreLineTable data={tableData.reverse()} />
                </div>
            </div>
            <Divider orientation="left">
                专业组分数
            </Divider>
            <UniversityMajorPlan data={MajorData} />
      </div>
    )
}