import * as Enum from '../enum'
import React, { createContext } from 'react'

export const SearchContext = createContext<{
  province: Enum.province
  city: Enum.city
  rank: Enum.rank
  setChoices: React.Dispatch<
    React.SetStateAction<{
      province: Enum.province
      city: Enum.city
      rank: Enum.rank
    }>
  >
}>({
  province: Enum.province.None,
  city: Enum.city.None,
  rank: Enum.rank.None,
  setChoices: () => {}, // 初始值可以是一个空函数，不过在使用时会被替换
})
