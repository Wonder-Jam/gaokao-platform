import React from 'react'
import { ArrowLeftOutlined, DownOutlined, UpOutlined } from '@ant-design/icons'
import { ArrowLeftContainer, UpAndDownContainer } from '../style'
import Mask from '@/components/Mask'

export function MaskContainer(props: {
  isShown: boolean
  setShow: (value: React.SetStateAction<boolean>) => void
  children?: React.ReactNode
}) {
  const { isShown, setShow, children } = props
  return (
    <Mask isShown={isShown}>
      <ArrowLeftContainer onClick={() => setShow(false)}>
        <ArrowLeftOutlined />
      </ArrowLeftContainer>
      <UpAndDownContainer>
        <UpOutlined />
        <DownOutlined />
      </UpAndDownContainer>
      {children}
    </Mask>
  )
}
