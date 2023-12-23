import { Card, Image, Tag } from 'antd'
const { Meta } = Card
import React from 'react'
import { useMaskContext } from '../../context/MaskContext'
import { VideoSchoolType } from '../../data'
import { CardContainer } from './style'

const TagColorMap: Record<string, string> = {
  招生宣传: 'cyan',
  专业解读: 'green',
  政策分析: 'orange',
  热点: 'red',
}
const TagOptions = ['招生宣传', '专业解读', '政策分析']
export function CardItem(props: VideoSchoolType & { index: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const { toggle, setTargetIndex, setTargetRef } = useMaskContext()
  const option = TagOptions[Math.floor(Math.random() * 3)]
  const TagItem = (
    <span>
      <Tag color={TagColorMap['招生宣传']}>{'招生宣传'}</Tag>
      {/* <Tag color={TagColorMap['专业解读']}>{'专业解读'}</Tag> */}
      <Tag color={TagColorMap['热点']}>{'热点'}</Tag>
    </span>
  )
  const index = props.index
  return (
    <>
      <CardContainer>
        <Card
          style={{}}
          ref={cardRef}
          onClick={() => {
            toggle(true)
            setTargetIndex(index)
            setTargetRef(cardRef)
          }}
          hoverable
          cover={
            <Image
              style={{
                height: '350px',
                objectFit: 'cover',
              }}
              preview={false}
              alt="example"
              src={props.schoolCover}
            />
          }
        >
          <Meta
            style={{
              display: 'flex',
              alignItems: 'contain',
            }}
            title={props.schoolName}
            description={TagItem}
          />
        </Card>
      </CardContainer>
    </>
  )
}
