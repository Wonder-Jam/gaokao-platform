import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { ArrowLeftContainer } from '../style'
import Mask from '@/components/Mask'

export const MaskContainer = React.memo(
  (props: {
    isShown: boolean
    setShow: (value: React.SetStateAction<boolean>) => void
    children?: React.ReactNode
  }) => {
    const { isShown, setShow, children } = props
    const handleClick = React.useCallback(() => {
      setShow(false)
    }, [setShow])
    const Children = React.useMemo(() => {
      return (
        <>
          <ArrowLeftContainer onClick={handleClick}>
            <ArrowLeftOutlined />
          </ArrowLeftContainer>
          {children}
        </>
      )
    }, [handleClick, children])
    console.log('render maskContainer')
    return <Mask isShown={isShown}>{Children}</Mask>
  },
)
