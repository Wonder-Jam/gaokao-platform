import React, { createContext, useState, useEffect } from 'react'
import RootLayout from '@/app/layout'
import FilterMenu from './components/FilterMenu'
import UniversityList from './components/UniversityList'
import { MapContainer, Layer, CardListContainer } from './style'
import * as Enum from './enum'
import Tabs from './components/Tabs'
import { SearchContext } from './Context/SearchContext'

export default function SearchSchoolPage() {
  const [universityListWidth, setUniversityListWidth] = useState('30%')
  const [choices, setChoices] = useState({
    province: Enum.province.None,
    city: Enum.city.None,
    rank: Enum.rank.None,
    filterSchool: [] as string[],
  })

  return (
    <SearchContext.Provider value={{ ...choices, setChoices }}>
      <>
        <RootLayout>
          <Layer>
            <FilterMenu />
            <MapContainer>
              <Tabs />
            </MapContainer>
            <CardListContainer width={universityListWidth}>
              <UniversityList setUniversityListWidth={setUniversityListWidth} />
            </CardListContainer>
          </Layer>
        </RootLayout>
      </>
    </SearchContext.Provider>
  )
}
