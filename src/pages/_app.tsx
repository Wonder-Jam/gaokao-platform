import React from 'react'
import '../styles/global.css'
export default function App({ Component, pageProps }) {
  const ref = React.useRef<HTMLElement | null>(null)
  React.useEffect(() => {
    ;(function loadGlobalCssVariables() {
      function setInnerHeight() {
        window.document.documentElement.style.setProperty(
          '--innerHeight',
          `${window.innerHeight / 100}px`,
        )
      }
      setInnerHeight()
      window.document.addEventListener('DOMContentLoaded', setInnerHeight) // 没有触发
      window.addEventListener('resize', setInnerHeight)
    })()
    ref.current = document.getElementById("__next")
    if(ref.current){
      ref.current.style.height = 'calc(100 * var(--innerHeight))'
      ref.current.style.overflowY = 'auto'
      ref.current.style.overscrollBehavior = 'none'
    }
  },[])
  return (
    <ContainerContext.Provider value={{container: ref}}>
      <Component {...pageProps} />
    </ContainerContext.Provider>
  )
}
interface ContainerContextValue {
  container: React.MutableRefObject<HTMLElement | null>
}

const ContainerContext = React.createContext<ContainerContextValue>({
  container: null as any,
})
export const usePageContainer = () => React.useContext(ContainerContext).container