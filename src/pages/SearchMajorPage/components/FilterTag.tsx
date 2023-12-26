import React, { useEffect, useRef, useState, useContext } from 'react'
import { Tag } from 'antd'
import { SearchContext } from '../Context/SearchContext'
import * as Enum from '../enum'

interface Props {
  style?: React.CSSProperties
}

const FilterTag: React.FC<Props> = props => {
  const { province, city, rank, setChoices, filterSchool } =
    useContext(SearchContext)
  const [tags, setTags] = useState([province as string])
  useEffect(() => {
    setTags([province as string, ...filterSchool])
  }, [province, filterSchool])

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter(tag => tag !== removedTag)
    console.log(newTags)
    if (removedTag === province) {
      setChoices({
        province: Enum.province.None,
        city: city,
        rank: rank,
        filterSchool: filterSchool,
      })
    } else {
      setChoices({
        province: province,
        city: city,
        rank: rank,
        filterSchool: filterSchool.filter(item => item !== removedTag),
      })
    }
    setTags(newTags)
  }

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        closable={tag !== '全部'}
        onClose={e => {
          e.preventDefault()
          handleClose(tag)
        }}
      >
        {tag}
      </Tag>
    )
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    )
  }

  const tagChild = tags.map(forMap)

  //   const tagPlusStyle: React.CSSProperties = {
  //     background: token.colorBgContainer,
  //     borderStyle: 'dashed',
  //   };

  return (
    <>
      <div style={{ ...props.style }}>{tagChild}</div>
    </>
  )
}

export default FilterTag
