import * as Enum from '../enum'
import React, { createContext } from 'react'

export const SearchContext = createContext<{
  majorCategories: Enum.majorCategories

  province: Enum.province
  city: Enum.city
  rank: Enum.rank
  filterSchool: string[]
  selectedClass: string[]
  score: number
  setChoices: React.Dispatch<
    React.SetStateAction<{
      province: Enum.province
      city: Enum.city
      rank: Enum.rank
      filterSchool: string[]
    }>
  >
}>({
  majorCategories: Enum.majorCategories.ALL,
  province: Enum.province.None,
  city: Enum.city.None,
  rank: Enum.rank.None,
  filterSchool: [],
  selectedClass: [],
  score: 600,
  setChoices: () => {}, // 初始值可以是一个空函数，不过在使用时会被替换
})
