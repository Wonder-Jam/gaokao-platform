import { Keyframes, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import {useDebounceFn} from 'ahooks'
interface slideOptions {
  pageRef?: React.MutableRefObject<HTMLElement | null>
  targetRef: React.RefObject<HTMLElement>
  direction: 'slide-in' | 'slide-out'
}
export function useSlideAnimation(props: slideOptions) {
  const { targetRef, direction, pageRef } = props
  const slideIn = React.useRef<Keyframes>()
  const slideOut = React.useRef<Keyframes>()
  const [coordinate, setCoordinate] = React.useState({ top: 0, left: 0 })
  const onScroll = React.useCallback(() => {
    const { top, left } = targetRef.current?.getBoundingClientRect() ?? {
      top: 0,
      left: 0,
    }
    setCoordinate({
      top,
      left,
    })
  }, [targetRef.current])
  const { run: debounceOnScroll } = useDebounceFn(onScroll,{ wait: 50})
  React.useEffect(() => {
    window.addEventListener('resize',debounceOnScroll)
    if (pageRef && pageRef.current) {
      pageRef.current.addEventListener('scroll', debounceOnScroll)
    }
    return () => {
      pageRef?.current?.removeEventListener('scroll', onScroll)
    }
  }, [pageRef?.current])
  React.useEffect(() => {
    onScroll()
  },[])
  React.useEffect(() => {
    slideIn.current = keyframes`
      from{
        top: ${coordinate.top}px;
        left: ${coordinate.left}px;
        position: fixed;
        background-color: palegreen;
      }
      to{
        top: calc(50% - 100px);
        left: calc(50% - 100px);
        position: fixed;
        background-color: palegoldenrod;
      }
    `
    slideOut.current = keyframes`
    to{
      top: ${coordinate.top}px;
      left: ${coordinate.left}px;
      position: fixed;
      background-color: palegreen;
    }
    from{
      top: calc(50% - 100px);
      left: calc(50% - 100px);
      position: fixed;
      background-color: palegoldenrod;
    }
    `
  }, [coordinate.top, coordinate.left])

  const SlideOutAnimation = styled.div`
    animation: ${slideOut.current} 0.3s ease-in-out;
    animation-fill-mode: forwards;
    width: 200px;
    height: 200px;
    z-index: 100;
  `

  const SlideInAnimation = styled.div`
    animation: ${slideIn.current} 0.3s ease-in-out;
    animation-fill-mode: forwards;
    width: 200px;
    height: 200px;
    z-index: 100;
  `
  return (
    <>
      {direction === 'slide-in' ? <SlideInAnimation /> : <SlideOutAnimation />}
    </>
  )
}
