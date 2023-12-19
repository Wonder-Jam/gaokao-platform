import { Mask } from './style'
import { Card, Divider, Tag, Space, Popover, Button, Spin } from 'antd'
import UniversityScoreLine from './UniversityScoreLine'
import UniversityScoreLineTable from './UniversityScoreLineTable'
import UniversityMajorPlan from './UniversityMajorPlan'
import type { ScorelineDataType, UniversityDetailProps } from '../type'
import UniersityOverview from './UniversityOverview'
import {
  FieldTimeOutlined,
  FlagOutlined,
  EnvironmentOutlined,
  NodeIndexOutlined,
} from '@ant-design/icons'
import UniversityRank from './UniversityRank'
import GenderRatioChart from './UniversityGenderRatio'
import UniversityEnvironment from './UniversityEvironment'
import { useEffect, useState } from 'react'
import { TagColorMap, tagsType } from './UniversityList'

interface DetailData {
  scorelineData: { year: number; score: number; type: '文史' | '理工' }[]
  majorData: {
    key: number
    major: string[]
    majorGroup: string
    admissionType: string
    requirement: string
    year: number
    scoreLine: number
    category: string
  }[]
  rankData: {
    year: number
    rank: number
    type: 'USNews' | 'QS' | 'THE' | 'ARWU'
  }[]
  genderRatio: { ratio: number }
}
export default function UniversityDetail(data: UniversityDetailProps) {
  const [tableData, setTableData] = useState<ScorelineDataType[]>([]) // 提取唯一年份
  const [detailData, setDetailData] = useState<DetailData>({} as DetailData)

  useEffect(() => {
    fetch(`api/universityDetail?target=${data.name}`, {
      method: 'POST',
      body: JSON.stringify({
        // Add parameters here
        tags: data.tags,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then((res: DetailData) => {
        console.log(res)
        let data: ScorelineDataType[] = []
        const years = Array.from(
          new Set(res.scorelineData.map(item => item.year)),
        )
        years.forEach((year, index) => {
          const newDataItem: ScorelineDataType = {
            key: `${index + 1}`,
            arts:
              res.scorelineData.find(
                item => item.year === year && item.type === '文史',
              )?.score || 0,
            science:
              res.scorelineData.find(
                item => item.year === year && item.type === '理工',
              )?.score || 0,
            year: year,
          }
          data.push(newDataItem)
        })
        setTableData(data)
        setDetailData(res)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  const content = (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div>
        <a href="#学校简介">学校简介</a>
      </div>
      <div>
        <a href="#学校概况">学校概况</a>
      </div>
      <div>
        <a href="#历年分数">历年分数</a>
      </div>
      <div>
        <a href="#专业组分数">专业组分数</a>
      </div>
      <div>
        <a href="#大学排名">大学排名</a>
      </div>
      <div>
        <a href="#校园情况">校园情况</a>
      </div>
    </div>
  )

  return (
    <div
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
        marginTop: '-13px',
        height: '85vh',
        paddingBottom: '100px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          zIndex: '1',
          right: '10px',
          top: '10px',
        }}
      >
        <Popover
          title=<h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '18px',
            }}
          >
            页内导航
          </h1>
          trigger="click"
          content={content}
        >
          <Button>
            <NodeIndexOutlined />
            页内导航
          </Button>
        </Popover>
      </div>
      <div
        style={{
          width: '100%',
          height: '20vh',
          backgroundColor: '#ffffff',
          backgroundImage: `url(${data.backgroundUrl})`,
          backgroundSize: 'cover',
        }}
      >
        <Mask />
      </div>
      <div
        style={{
          marginTop: '-75px',
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '-20px',
        }}
      >
        <img src={data.logoUrl} style={{ width: '150px', height: '150px' }} />
        <h1 style={{ marginTop: '85px' }}>
          {data.name}
          <Space style={{ marginLeft: '10px' }} size={[0, 4]} wrap>
            {data.tags.map((value: tagsType) => {
              return TagColorMap[value] ? (
                <Tag color={TagColorMap[value]}>{value}</Tag>
              ) : null
            })}
          </Space>
        </h1>
      </div>
      <Card id="学校简介" size="small" style={{ width: '100%' }}>
        <p>{data.description}</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <FieldTimeOutlined
              style={{ marginRight: '5px', color: '#1677FF' }}
            />
            <p style={{ marginRight: '5px' }}>建校时间:</p>
            <p>{data.created}</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <FlagOutlined style={{ marginRight: '5px', color: '#1677FF' }} />
            <p style={{ marginRight: '5px' }}>主管部门:</p>
            <p>{data.dominant}</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <EnvironmentOutlined
              style={{ marginRight: '5px', color: '#1677FF' }}
            />
            <p style={{ marginRight: '5px' }}>学校地址:</p>
            <div style={{ flexDirection: 'column' }}>
              {data.location.map((item, index) => {
                return (
                  <>
                    <p style={{ margin: '0' }} key={index}>
                      {item.name}: {item.place}
                    </p>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </Card>
      {detailData.scorelineData ? (
        <>
          <div id="学校概况"></div>
          <Divider orientation="left">学校概况</Divider>
          <UniersityOverview />
          <div id="历年分数"></div>
          <Divider orientation="left">历年分数</Divider>
          <div
            style={{
              height: '300px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Card size="small" style={{ width: '49.5%', height: '300px' }}>
              <UniversityScoreLine
                data={
                  // scorelineData as {
                  //   year: number
                  //   score: number
                  //   type: '文史' | '理工'
                  // }[]
                  detailData.scorelineData
                }
              />
            </Card>
            <div style={{ width: '49.5%', height: '50vh' }}>
              <UniversityScoreLineTable data={tableData.reverse()} />
            </div>
          </div>
          <div id="专业组分数"></div>
          <Divider orientation="left">专业组分数</Divider>
          <UniversityMajorPlan data={detailData.majorData} />
          <div id="大学排名"></div>
          <Divider orientation="left">大学排名</Divider>
          <Card size="small" style={{ height: '300px' }}>
            <UniversityRank
              data={
                // rankData as {
                //   year: number
                //   rank: number
                //   type: 'USNews' | 'QS' | 'THE' | 'ARWU'
                // }[]
                detailData.rankData
              }
            />
          </Card>
          <div id="校园情况"></div>
          <Divider orientation="left">校园情况</Divider>
          <div
            style={{
              height: '300px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Card size="small" style={{ height: '300px', width: '49.5%' }}>
              <GenderRatioChart />
            </Card>
            <UniversityEnvironment style={{ width: '49.5%' }} />
          </div>
        </>
      ) : (
        <div
          style={{
            width: '100%',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin style={{ margin: 'auto' }} />
        </div>
      )}
    </div>
  )
}
