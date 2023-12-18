import React from 'react'
import { CalendarOutlined } from '@ant-design/icons'
import { ConfigProvider, Timeline } from 'antd'

const MonthCalendar: React.FC = () => {
  let calendarContainer: React.CSSProperties = {
    width: '23%',
    height: '442px',
    display: 'inline-block',
    backgroundColor: '#fff',
    margin: '10px',
    marginLeft: '14px',
  }
  let titleStyle: React.CSSProperties = {
    margin: '10px',
    marginLeft: '20px',
  }
  let timelineStyle: React.CSSProperties = {
    marginTop: '6px',
    width: '80%',
    backgroundColor: '#efefef',
    margin: '0 auto',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
  }
  return (
    <div style={calendarContainer}>
      <div style={titleStyle}>
        <CalendarOutlined color={'#1677ff'} />
        <span style={{ fontWeight: '600', fontSize: '20px' }}> 高考月历</span>
      </div>
      <div style={timelineStyle}>
        <ConfigProvider
          theme={{
            components: {
              Timeline: {
                dotBorderWidth: 2,
              },
            },
          }}
        >
          <Timeline
            // style={{flexBasis: '300px'}}
            mode="left"
            items={[
              {
                label: (
                  <span style={{ fontWeight: '600', fontSize: '14px' }}>
                    11月
                  </span>
                ),
                children: (
                  <>
                    <p>高考报名</p>
                    <p>空军招飞</p>
                    <p>海军招飞</p>
                    <p>民航招飞</p>
                  </>
                ),
              },
              {
                label: (
                  <span style={{ fontWeight: '600', fontSize: '14px' }}>
                    12月
                  </span>
                ),
                children: <p>艺术类统考</p>,
              },
              {
                label: (
                  <span style={{ fontWeight: '600', fontSize: '14px' }}>
                    1月
                  </span>
                ),
                children: <p>港澳高校内地招生</p>,
              },
            ]}
          />
        </ConfigProvider>
      </div>
    </div>
  )
}

export default MonthCalendar
