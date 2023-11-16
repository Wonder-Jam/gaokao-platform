import { Keyframes, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { useDebounceFn } from 'ahooks'
interface slideOptions {
  pageRef?: React.MutableRefObject<HTMLElement | null>
  targetRef: React.RefObject<HTMLElement>
  direction: 'slide-in' | 'slide-out'
  contentNode?: ReactNode
}
export function useSlideAnimation(props: slideOptions) {
  const { targetRef, direction, pageRef, contentNode } = props
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
  const { run: debounceOnScroll } = useDebounceFn(onScroll, { wait: 50 })
  React.useEffect(() => {
    // window.addEventListener('resize', debounceOnScroll)
    if (pageRef && pageRef.current) {
      pageRef.current.addEventListener('scroll', debounceOnScroll)
    }
    return () => {
      pageRef?.current?.removeEventListener('scroll', debounceOnScroll)
    }
  }, [pageRef?.current])
  React.useEffect(() => {
    onScroll()
  }, [targetRef.current])
  slideIn.current = keyframes`
      from{
        top: ${coordinate.top}px;
        left: ${coordinate.left}px;
        position: fixed;
        transform: scale(0.5);
      }
      to{
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) scale(1);
        position: fixed;
      }
    `
  slideOut.current = keyframes`
    to{
      top: ${coordinate.top}px;
      left: ${coordinate.left}px;
      position: fixed;
      transform: scale(0.5);
    }
    from{
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) scale(1);
        position: fixed;
  }
    `

  const SlideOutAnimation = styled.div`
    animation: ${slideOut.current} 0.3s ease-in-out;
    animation-fill-mode: forwards;
    z-index: 100;
  `

  const SlideInAnimation = styled.div`
    animation: ${slideIn.current} 0.3s ease-in-out;
    animation-fill-mode: forwards;
    z-index: 100;
  `
  return (
    <>
      {direction === 'slide-in' ? (
        <SlideInAnimation>{contentNode}</SlideInAnimation>
      ) : (
        <SlideOutAnimation>{contentNode}</SlideOutAnimation>
      )}
    </>
  )
}
