import React, { useState, useEffect } from 'react'

const Interactivemap = ({ data }) => {
    //   let fs = require('fs')
    //   let path = require('path')
    const [features, setFeatures] = useState(null)
  
    useEffect(() => {
      fetch('/files/ChinaMap.geoJson')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          const featuresWithIds = data.features.map((feature, index) => ({
            id: feature.properties.name, // 使用索引作为id，你可以根据需要使用不同的标识符
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // 随机颜色
            ...feature, // 替换为每个省份的实际value
          }));
          // setFeatures(data.features)
          setFeatures(featuresWithIds)
          console.log(featuresWithIds)
        })
        .catch(error => {
          // 处理错误
          console.error(error)
        })
      // const jsonData = fs.readFileSync(path.join(process.cwd(),"..", 'tmpData', `world_countries.json`), 'utf-8')
      // setFeatures(JSON.parse(jsonData))
    }, [])
}