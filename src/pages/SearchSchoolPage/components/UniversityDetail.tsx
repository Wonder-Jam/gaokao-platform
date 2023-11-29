import NJU_LOGO from '@/static/school-badge/南京大学 NJU.svg'
import NJU_BACK from '@/static/school-badge/南京大学 NJU-1.svg'
import { DetailBackgroundContainer, Mask } from './style'
import { Card, Divider } from 'antd'
import LineChart from './UniversityScoreLine'
import UniversityScoreLineTable from './UniversityScoreLineTable'

// 测试数据，来源于[4]和[6]
const data = [
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



export default function UniversityDetail() {

    return (
        <div style={{ overflow: 'auto', marginTop: '-13px', height: '90vh', paddingBottom: '20vh' }}>
            <DetailBackgroundContainer>
                <Mask />
            </DetailBackgroundContainer>
            <div style={{ marginTop: '-75px', display: 'flex', flexDirection: 'row', marginBottom: '-20px' }}>
                <NJU_LOGO />
                <h1 style={{ marginTop: '85px', color: '#1677FF' }}><a href="https://www.nju.edu.cn/">南京大学</a></h1>
            </div>
            <Card size='small' style={{ width: '100%' }}>
                <p>南京大学，简称南大，位于中国江苏省南京市，该校历史或可追溯至三国吴永安元年（258年），历史上曾历经多次变迁，亦是中国第一所集教学和研究于一体的现代大学。中华民国政府撤离南京后，中华人民共和国成立前夕由“国立中央大学”易名“国立南京大学”，翌年迳称“南京大学”，沿用至今[5][6]。南京大学在长期的历史中积淀了丰厚的学风传统和精神遗产，倡行人文思想之会通与学术之昌明，以求世界的和平繁荣，在教育、学术和文化上均具重要贡献和影响。</p>
            </Card>
            <Divider orientation="left" plain>
                历年分数
            </Divider>
            <div style={{ height: '50vh', display:'flex', flexDirection:'row' }}>
                <Card size='small' style={{ width: '50%', height: '50vh' }}>
                    <LineChart data={data as { year: number; score: number; type: "文史" | "理工"; }[]} />
                </Card>
                <div style={{width:'50%'}}>
                    <UniversityScoreLineTable />
                </div>
            </div>

        </div>
    )
}