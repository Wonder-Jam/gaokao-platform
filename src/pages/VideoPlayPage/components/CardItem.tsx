import { Card, Image } from 'antd'
const { Meta } = Card
import React from 'react'
import { useMaskContext } from '../context/MaskContext'
import { VideoSchoolType } from '../data'
import { CardContainer } from '../style'

export function CardItem(props: VideoSchoolType & { index: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const { toggle, setTargetIndex, setTargetRef } = useMaskContext()
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
            description={props.schoolSiteUrl}
          />
        </Card>
      </CardContainer>
    </>
  )
}
