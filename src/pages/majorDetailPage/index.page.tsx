import Entry from '@/components/Entry'
import React, { createContext, useState } from 'react'
import MajorInfo from '@/pages/majorDetailPage/components/MajorInfo'
import * as Enum from './enum'
import { InfoContainer, Layer } from './style'

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

  return (
    <MajorSearchContext.Provider value={{ ...choices, setChoices }}>
      <>
        <Entry>
          <Layer>
            <InfoContainer>
              <MajorInfo />
            </InfoContainer>
          </Layer>
        </Entry>
      </>
    </MajorSearchContext.Provider>
  )
}
