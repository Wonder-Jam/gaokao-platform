import * as Enum from '../enum'
import React, { createContext } from 'react'

export const SearchContext = createContext<{
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
