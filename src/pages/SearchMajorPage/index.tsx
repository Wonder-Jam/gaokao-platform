import React, { createContext, useState, useEffect } from 'react'
import Entry from '@/components/Entry'
import FilterMenu from './components/FilterMenu'
import MajorList from './components/MajorList'
import { MapContainer, Layer, CardListContainer } from './style'
import * as Enum from './enum'

export const MajorSearchContext = createContext<{
  majorCategories: Enum.majorCategories

  setChoices: React.Dispatch<
    React.SetStateAction<{
      majorCategories: Enum.majorCategories
    }>
  >
}>({
  majorCategories: Enum.majorCategories.ALL,

  setChoices: () => {}, // 初始值可以是一个空函数，不过在使用时会被替换
})

export default function SearchSchoolPage() {
  const [choices, setChoices] = useState({
    majorCategories: Enum.majorCategories.ALL,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(choices) // 这里改为输出 choices，因为 SearchContext 是 Provider，而不是具体的值
    }, 3000) // 3000ms = 3秒，你可以根据需要修改时间间隔

    return () => {
      clearInterval(intervalId) // 在组件卸载时清除定时器
    }
  }, [choices])

  return (
    <MajorSearchContext.Provider value={{ ...choices, setChoices }}>
      <>
        <Entry>
          <Layer>
            <FilterMenu />

            <CardListContainer>
              <MajorList />
            </CardListContainer>
          </Layer>
        </Entry>
      </>
    </MajorSearchContext.Provider>
  )
}