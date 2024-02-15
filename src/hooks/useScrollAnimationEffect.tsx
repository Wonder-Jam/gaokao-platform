import { RefObject, useEffect } from 'react'
import { useThrottleFn } from 'ahooks'

type ElementsWithAnimation = Map<RefObject<HTMLElement>, string>
function useScrollAnimationEffect(
  containerRef: RefObject<HTMLElement>,
  targetElementsWithAnimations: ElementsWithAnimation,
  dependencies?: Array<any>,
) {
  const { run: handleScroll, cancel } = useThrottleFn(() => {
    if (!containerRef.current) return
    console.log('scroll', containerRef.current)
    const containerRect = containerRef.current.getBoundingClientRect()
    for (const [
      elRef,
      animationClass,
    ] of targetElementsWithAnimations.entries()) {
      if (!elRef.current) return
      const rect = elRef.current.getBoundingClientRect()
      if (rect.top < containerRect.bottom && rect.bottom >= containerRect.top) {
        elRef.current.classList.add(animationClass)
      }
    }
  })
  useEffect(
    () => {
      if (!containerRef.current) return
      const container = containerRef.current
      container.addEventListener('scroll', handleScroll)
      return () => {
        container.removeEventListener('scroll', handleScroll)
        cancel() // 在清除监听器时取消节流
      }
    },
    dependencies ? [...dependencies] : [],
  )
}
export default useScrollAnimationEffect
