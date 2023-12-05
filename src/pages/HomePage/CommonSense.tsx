import React from 'react'
import { List, Space } from 'antd'

const CommonSense: React.FC = () => {
  let titleStyle: React.CSSProperties = {
    fontWeight: '600',
    fontSize: '36px',
    marginTop: '30px',
    marginLeft: '12px',
    marginBottom: '30px',
  }

  let boxStyle: React.CSSProperties={
      // width: '260px',
      // height: '320px',
      // backgroundColor: '#0f0',
      // display: 'flex',
      //   flexDirection: "column",
      // justifyContent: 'space-between',
      textAlign: 'left',
      color: '#515a6e',
      // font: 14px/1.8 Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,SimSun,"sans-serif",
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      width: '286px',
      height: '272px',
      background: '#fff',
      boxShadow: '0 2px 6px 0 rgba(0,0,0,.1)',
      borderRadius: '4px',
  }

  let boxTitleStyle: React.CSSProperties={
      // font: '14px/1.8 Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,SimSun,"sans-serif"',
      boxSizing: 'border-box',
      padding: 0,
      width: '166px',
      height: '36px',
      lineHeight: '36px',
      textAlign: 'center',
      background: 'linear-gradient(180deg,#69b1ff,#1677ff)',
      borderRadius: '18px 0 18px 0',
      fontSize: '18px',
      color: '#fff',
      margin: '0 auto',
      marginTop: '-18px',
  }

  let boxContentStyle: React.CSSProperties={
      textAlign: 'left',
      color: '#515a6e',
      // font: 14px/1.8 Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,SimSun,"sans-serif";
      boxSizing: 'border-box',
      margin: 0,
      height: '92px',
      padding: '17px 0 19px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  }

  let boxaStyle: React.CSSProperties={
      textAlign: 'left',
      // font: 14px/1.8 Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,SimSun,"sans-serif",
      boxSizing: 'border-box',
      background: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: 'color .2s ease',
      textDecoration: 'none',
      color: '#131b18',
      lineHeight: '22px',
      marginBottom: '12px',
  }


  return (
    <div style={{ backgroundColor: '#fff', margin: '20px' }}>
      <div style={titleStyle}>高考常识</div>
      <Space style={{
          textAlign: "left",
          color: '#515a6e',
          // font: 14px/1.8 Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,SimSun,"sans-serif";
          boxSizing: 'border-box',
          margin: 20,
          padding: 0,
          paddingTop: 20,
          paddingBottom: 20,
          display: 'flex',
          justifyContent: 'space-between',
      }}>
        <div style={boxStyle}>
            <div style={boxTitleStyle}>招生章程</div>
            <div style={boxContentStyle}>
                <a style={boxaStyle}>text1</a>
                <a style={boxaStyle}>text2</a>
            </div>
            <div style={boxTitleStyle}>高校名单</div>
            <div style={boxContentStyle}>
                <a style={boxaStyle}>text1</a>
                <a style={boxaStyle}>text2</a>
            </div>
        </div>
          <div style={boxStyle}>
              <div style={boxTitleStyle}>考试科目</div>
              <div style={boxContentStyle}>
                  <a style={boxaStyle}>text1</a>
                  <a style={boxaStyle}>text2</a>
              </div>
              <div style={boxTitleStyle}>专业目录</div>
              <div style={boxContentStyle}>
                  <a style={boxaStyle}>text1</a>
                  <a style={boxaStyle}>text2</a>
              </div>
          </div>
          <div style={boxStyle}>
              <div style={boxTitleStyle}>三大专项</div>
              <div style={boxContentStyle}>
                  <a style={boxaStyle}>text1</a>
                  <a style={boxaStyle}>text2</a>
              </div>
              <div style={boxTitleStyle}>体检军检</div>
              <div style={boxContentStyle}>
                  <a style={boxaStyle}>text1</a>
                  <a style={boxaStyle}>text2</a>
              </div>
          </div>
          <div style={boxStyle}>
              <div style={boxTitleStyle}>历年分数线</div>
              <div style={boxContentStyle}>
                  <a style={boxaStyle}>text1</a>
                  <a style={boxaStyle}>text2</a>
              </div>
              <div style={boxTitleStyle}>志愿填报</div>
              <div style={boxContentStyle}>
                  <a style={boxaStyle}>text1</a>
                  <a style={boxaStyle}>text2</a>
              </div>
          </div>
      </Space>
    </div>
  )
}

export default CommonSense
