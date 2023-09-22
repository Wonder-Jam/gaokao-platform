import React from 'react';
import { Card, Tag } from 'antd';

const Feature: React.FC = (props) => {
  // console.log(props)
  return (
    <Card
      size="small"
      title={props.data.feature.id}
      style={{ width: 300 }}
    >
      <Tag color="#f50">985 2所</Tag>
      <Tag color="#2db7f5">211 9所</Tag>
      <Tag color="#87d068">高等院校 147所</Tag>
    </Card>
  )
}



export default Feature;