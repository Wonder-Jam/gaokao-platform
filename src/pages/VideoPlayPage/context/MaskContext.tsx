import React from 'react'

export const MaskContext = React.createContext<{
  shown: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
  setTargetIndex: React.Dispatch<React.SetStateAction<number>>
  setTargetRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLDivElement>>
  >
}>({
  shown: false,
  toggle: () => {},
  setTargetIndex: () => {},
  setTargetRef: () => {},
})
export const useMaskContext = () => React.useContext(MaskContext)
