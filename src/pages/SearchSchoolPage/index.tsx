import React from 'react'
import Entry from '@/components/Entry'
import EchartsMap from './components/EchartsMap'
import FilterMenu from './components/FilterMenu'
import UniversityList from './components/UniversityList'
import { MapContainer, Layer, CardListContainer } from './style'
import { createContext } from 'react'
import * as Enum from './enum'

export const choices = createContext({
  province: Enum.provice.None,
  city: Enum.city.None,
  rank: Enum.rank.None,
})

export default function SearchSchoolPage() {
  return (
    <>
      <Entry> </Entry>
      <Layer>
        <FilterMenu />
        <MapContainer>
          <EchartsMap />
        </MapContainer>
        <CardListContainer>
          <UniversityList />
        </CardListContainer>
      </Layer>
    </>
  )
}
