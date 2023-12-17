import React, { useState } from 'react'
import { ListContainer, List, ListItem, SelectedItem } from './style' // 引入样式对象
import * as Enum from '../enum'

interface MajorCategoriesListProps {
  onSelect: (selectedMajorCategories: string) => void
  selected: string
}

const majorCategories = [
  '全部',
  '哲学',
  '经济学',
  '法学',
  '教育学',
  '文学',
  '历史学',
  '理学',
  '工学',
  '农学',
  '医学',
  '军事学',
  '管理学',
  '艺术学',
]

const MajorCategoriesList: React.FC<MajorCategoriesListProps> = ({
  onSelect,
  selected,
}) => {
  const handleMajorCategoriesClick = (majorCategories: string) => {
    onSelect(majorCategories)
  }

  return (
    <ListContainer>
      <List>
        {majorCategories.map(majorCategory => (
          <ListItem
            key={majorCategory}
            style={{
              color: selected === majorCategory ? '#1677ff' : '',
            }}
            onClick={() => handleMajorCategoriesClick(majorCategory)}
          >
            {majorCategory}
          </ListItem>
        ))}
      </List>
    </ListContainer>
  )
}

export default MajorCategoriesList
