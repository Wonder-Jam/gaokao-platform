import React from 'react';
import { Card, Space } from 'antd';

const Feature: React.FC = (props) => {
  console.log(props)
  return (<Space direction="vertical" size={16}>
    <Card size="small" title={props.data.feature.id} extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>{props.data.feature.id}</p>
      <p>{props.data.feature.properties.level}</p>
      <p>{props.data.feature.properties.site}</p>
    </Card>
  </Space>)
}



export default Feature;