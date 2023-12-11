import React, { useState } from 'react'
import { ListContainer, List, ListItem, SelectedItem } from './style' // 引入样式对象

interface Props {
  onSelect: (selectedFilters: string[]) => void
  selected: string[]
}

const filterList = ['985', '211', '双一流']

const SchoolFilterList: React.FC<Props> = ({ onSelect, selected }) => {
  const handleFilterClick = (filter: string) => {
    if (selected.includes(filter)) {
      onSelect(selected.filter(item => item !== filter))
    } else {
      onSelect([...selected, filter])
    }
  }

  return (
    <ListContainer>
      <List>
        {filterList.map(item => (
          <ListItem
            key={item}
            style={{
              color: selected.includes(item) ? '#1677ff' : 'gray',
            }}
            onClick={() => handleFilterClick(item)}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </ListContainer>
  )
}

export default SchoolFilterList
