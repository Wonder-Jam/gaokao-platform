import React from 'react'
import {Row, Col, Card} from 'antd';
import { CoffeeOutlined, HomeOutlined, BuildOutlined, WifiOutlined, BorderHorizontalOutlined, FireOutlined } from '@ant-design/icons'

interface AppProps{
    style?: React.CSSProperties
}

export default function ({style}: AppProps) {
    return (
        <Row style={{...style}} gutter={2}>
        <Col className="gutter-row" span={8}>
          <Card size='small' >
            <h1>20<span style={{ fontSize: '18px' }}>元</span></h1>
            <p><CoffeeOutlined style={{ marginRight: '5px', color: '#1677FF' }} />食堂均价</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card size='small' >
            <h1>1.5<span style={{ fontSize: '18px' }}>千元</span></h1>
            <p><HomeOutlined  style={{ marginRight: '5px', color: '#1677FF' }} />住宿均价</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card size='small' >
            <h1>4<span style={{ fontSize: '18px' }}>人</span></h1>
            <p><BuildOutlined style={{ marginRight: '5px', color: '#1677FF' }} />每间宿舍</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card size='small' >
            <h1><BorderHorizontalOutlined style={{marginRight: '5px', color: '#1677FF'}}/></h1>
            <p style={{fontSize: '18px', fontWeight:'bolder'}}>独立卫浴</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card size='small' >
            <h1><WifiOutlined style={{marginRight: '5px', color: '#1677FF'}}/></h1>
            <p style={{fontSize: '18px', fontWeight:'bolder'}}>无线WIFI</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card size='small' >
            <h1><FireOutlined style={{marginRight: '5px', color: '#1677FF'}}/></h1>
            <p style={{fontSize: '18px', fontWeight:'bolder'}}>寝室热水</p>
          </Card>
        </Col>
        </Row>
    )
}