import React from 'react';
import {Row, Col, Card} from 'antd';
import { ReadOutlined, AccountBookOutlined, ExperimentOutlined, BlockOutlined, CaretUpOutlined, CheckCircleOutlined } from '@ant-design/icons'



export default function UniersityOverview(){
    return (
        <Row gutter={8}>
        <Col className="gutter-row" span={4}>
          <Card size='small' >
            <h1>44<span style={{ fontSize: '18px' }}>个</span></h1>
            <p><ReadOutlined style={{ marginRight: '5px', color: '#1677FF' }} />重点学科</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card size='small' >
            <h1>100<span style={{ fontSize: '18px' }}>亿</span></h1>
            <p><AccountBookOutlined  style={{ marginRight: '5px', color: '#1677FF' }} />教育经费</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card size='small' >
            <h1>386<span style={{ fontSize: '18px' }}>个</span></h1>
            <p><ExperimentOutlined style={{ marginRight: '5px', color: '#1677FF' }} />科研项目</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card size='small' >
            <h1>2.8<span style={{ fontSize: '18px' }}>千亩</span></h1>
            <p><BlockOutlined style={{ marginRight: '5px', color: '#1677FF' }} />占地面积</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card size='small' >
            <h1>32<span style={{ fontSize: '18px' }}>%</span></h1>
            <p><CaretUpOutlined style={{ marginRight: '5px', color: '#1677FF' }} />深造率</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={4}>
          <Card size='small' >
            <h1>98.7<span style={{ fontSize: '18px' }}>%</span></h1>
            <p><CheckCircleOutlined style={{ marginRight: '5px', color: '#1677FF' }} />落实去向</p>
          </Card>
        </Col>
      </Row>
    )
}