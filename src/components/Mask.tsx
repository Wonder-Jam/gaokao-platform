import styled from '@emotion/styled'
import React from 'react'

export default function Mask({
  isShown,
  children,
}: {
  isShown: boolean
  children?: React.ReactNode
}) {
  return <MaskStyle isShown={isShown}>{children}</MaskStyle>
}

export const MaskStyle = styled.div<{
  isShown: boolean
}>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  background-color: hsla(0, 0%, 100%, 0.98); // rgba(0, 0, 0, 0.88)
  transition: opacity 0.3s, visibility 0.3s;
  visibility: ${({ isShown }) =>
    isShown
      ? 'visible'
      : 'hidden'}; // visibility的出现与消失是瞬间的，无法通过transition来控制
  opacity: ${({ isShown }) =>
    isShown ? 1 : 0}; // 搭配这个就可以实现蒙层的渐变出现了
`
