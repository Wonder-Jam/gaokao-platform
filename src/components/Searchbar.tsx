import React, { CSSProperties, useState } from 'react'
import { AutoComplete, Input } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'

interface SearchBarProps {
  optionsData: string[]
  style?: CSSProperties
  placeholder?: string
  size?: SizeType
  onSearch: (value: string) => void
}
function SearchBar({
  optionsData,
  style,
  onSearch,
  placeholder = '请输入',
  size = 'large',
}: SearchBarProps) {
  const [options, setOptions] = useState<{ value: string }[]>([])
  const [text, setText] = useState<string>('')
  const handleSearch = (value: string) => {
    setOptions(
      value
        ? optionsData
            .filter(option => option.includes(value))
            .map(option => ({ value: option }))
        : [],
    )
  }
  // options.length = 0 的话也就无法触发search回调函数了
  const onSelect = (value: string) => {
    onSearch(value)
    setText(value)
  }

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{ ...style }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      size={size}
    >
      <Input.Search
        size={size}
        onChange={event => setText(event.target.value)}
        onSearch={() => {
          if (options.length === 0 && text.length !== 0) {
            onSearch(text)
          }
        }}
        placeholder={placeholder}
        enterButton
      />
    </AutoComplete>
  )
}
/**
 * 问题：
 * 1.Input.Search的onSearch回调获得的value是在Select之前的value
 * 2.会有不Select直接search的情况
 * 3.可以通过select触发search，可以通过enter按钮触发search，可以通过直接点击触发search（这个就不会触发select事件了）
 */
export default SearchBar
