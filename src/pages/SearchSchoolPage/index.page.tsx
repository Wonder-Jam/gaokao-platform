import React, { createContext, useState, useEffect } from 'react'
import Entry from '@/components/Entry'
import FilterMenu from './components/FilterMenu'
import UniversityList from './components/UniversityList'
import { MapContainer, Layer, CardListContainer } from './style'
import * as Enum from './enum'
import Tabs from './components/Tabs'
import { SearchContext } from './Context/SearchContext'

export default function SearchSchoolPage() {
  const [choices, setChoices] = useState({
    province: Enum.province.None,
    city: Enum.city.None,
    rank: Enum.rank.None,
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
    <SearchContext.Provider value={{ ...choices, setChoices }}>
      <>
        <Entry>
          <Layer>
            <FilterMenu />
            <MapContainer>
              <Tabs />
            </MapContainer>
            <CardListContainer>
              <UniversityList />
            </CardListContainer>
          </Layer>
        </Entry>
      </>
    </SearchContext.Provider>
  )
}