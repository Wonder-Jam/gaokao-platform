import React from 'react'
import { Avatar, ConfigProvider, Divider, List, Space } from 'antd'
import { LikeFilled, RightOutlined } from '@ant-design/icons'

const PolicyInformation: React.FC = () => {
  const policies = [
    '江苏：关于2024年艺术类专业考试通知书和省统考准考证自助打印的说明',
    '江苏：2024年普通高校招生艺术类专业省统考考点和考试时间安排',
    '江苏：2024年普通高考和学考报名再次提醒',
    '江苏：2024年普通高考报名问答（艺术类专版）',
    '江苏：关于开展2024年外省普通高中学业水平合格性考试成绩转入江苏认定工作的通告',
    '江苏：2024年普通高校招生艺术类专业省统考考点和考试时间安排公布',
  ]

  const workProgress = [
    '江苏：2024年普通高校招生考试和普通高中学业水平合格性考试报名工作即将开始',
    '江苏：2024年普通高校招生艺术类专业省统考时间安排表出炉',
    '江苏：2024年普通高考和学业水平合格性考试报名工作会议召开',
    '江苏：2023年高职（专科）院校招生录取工作会议召开',
    '江苏：2023年普通高校招生普通类专科批次录取全面开始',
    '江苏：2023年普通高校招生体育类、艺术类专科批次录取工作7月29日开始',
  ]

  const guide = [
    '2024年艺术类招生报考指南',
    '2024年保送生报考指南',
    '2024年空军招飞报考指南',
    '2024年海军招飞报考指南',
  ]

  let titleStyle: React.CSSProperties = {
    fontWeight: '600',
    fontSize: '36px',
    marginTop: '30px',
    marginLeft: '12px',
    marginBottom: '30px',
  }
  let bodyStyle: React.CSSProperties = {}
  return (
    <div style={{ backgroundColor: '#fff', margin: '20px', height: '430px' }}>
      <div style={titleStyle}>政策与资讯</div>
      <div style={bodyStyle}>
        <Space
          style={{
            marginLeft: '20px',
            marginRight: '20px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{ width: '400px', height: '310px', backgroundColor: '#fff' }}
          >
            <div
              style={{
                marginLeft: '14px',
                marginRight: '14px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '24px', fontWeight: '600' }}>
                招生政策
              </span>
              <RightOutlined />
            </div>
            <Divider></Divider>
            <div>
              <List
                size={'small'}
                itemLayout="horizontal"
                dataSource={policies}
                renderItem={(item, index) => (
                  <List.Item style={{ fontSize: '16px', fontWeight: '500' }}>
                    {item.length > 22 ? item.substring(0, 22) + '......' : item}
                  </List.Item>
                )}
              />
            </div>
          </div>
          <div
            style={{ width: '400px', height: '310px', backgroundColor: '#fff' }}
          >
            <div
              style={{
                marginLeft: '14px',
                marginRight: '14px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '24px', fontWeight: '600' }}>
                工作动态
              </span>
              <RightOutlined />
            </div>
            <Divider></Divider>
            <div>
              <List
                size={'small'}
                itemLayout="horizontal"
                dataSource={workProgress}
                renderItem={(item, index) => (
                  <List.Item style={{ fontSize: '16px', fontWeight: '500' }}>
                    {item.length > 22 ? item.substring(0, 22) + '......' : item}
                  </List.Item>
                )}
              />
            </div>
          </div>
          <div
            style={{ width: '400px', height: '310px', backgroundColor: '#fff' }}
          >
            <div
              style={{
                marginLeft: '14px',
                marginRight: '14px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>
                <LikeFilled />
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#626f69',
                  }}
                >
                  {' '}
                  招考热点
                </span>
              </span>
              <RightOutlined />
            </div>
            <div
              style={{
                backgroundColor: '#f3fcff',
                marginTop: '50px',
              }}
            >
              <ConfigProvider
                theme={{
                  components: {
                    List: {
                      // itemPaddingSM: '1'
                    },
                  },
                }}
              >
                <List
                  size={'small'}
                  split={false}
                  itemLayout="horizontal"
                  dataSource={guide}
                  renderItem={(item, index) => (
                    <List.Item style={{ fontSize: '16px', fontWeight: '500' }}>
                      {item}
                    </List.Item>
                  )}
                />
              </ConfigProvider>
            </div>
            <div
              style={{
                textAlign: 'left',
                boxSizing: 'border-box',
                margin: 0,
                height: '64px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 19px',
                fontSize: '16px',
                fontWeight: '700',
                color: '#1cb278',
                background:
                  'https://t2.chei.com.cn/gaokao/assets/web/images/home-dfz-bg.png',
                backgroundSize: '100%',
                cursor: 'pointer',
                borderRadius: '4px 4px 0 0',
                // background: url(../images/home-dfz-bg.png) no-repeat 50%,
                // backgroundSiz: 100% 100%,
                // cursor: pointer,
                // border-radius: 4px 4px 0 0,
              }}
            >
              广告位招租
            </div>
          </div>
        </Space>
      </div>
    </div>
  )
}

export default PolicyInformation
