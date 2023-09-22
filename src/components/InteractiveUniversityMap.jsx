import React, { useState, useEffect } from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'

const MyResponsiveChoropleth = ({ data }) => {
  //   let fs = require('fs')
  //   let path = require('path')
  const [features, setFeatures] = useState(null)

  useEffect(() => {
    fetch('/files/ChinaMap.geoJson')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const featuresWithIds = data.features.map((feature, index) => ({
          id: `province_${index}`, // 使用索引作为id，你可以根据需要使用不同的标识符
          ...feature, // 替换为每个省份的实际value
        }));
        // setFeatures(data.features)
        setFeatures(featuresWithIds)
      })
      .catch(error => {
        // 处理错误
        console.error(error)
      })
    // const jsonData = fs.readFileSync(path.join(process.cwd(),"..", 'tmpData', `world_countries.json`), 'utf-8')
    // setFeatures(JSON.parse(jsonData))
  }, [])

  if (!features) {
    // 如果features还没有初始化完成，则返回loading状态或其他占位内容
    return <div>Loading...</div>
  }

  return (
    <ResponsiveChoropleth
      data={data}
      features={features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[-0.55, 1.25]}  // 设置投影的平移量
      projectionScale={500}  // 设置投影的缩放比例
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
        {
          id: 'gradient',
          type: 'linearGradient',
          colors: [
            {
              offset: 0,
              color: '#000',
            },
            {
              offset: 100,
              color: 'inherit',
            },
          ],
        },
      ]}
      fill={[
        {
          match: {
            id: 'CAN',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'CHN',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'ATA',
          },
          id: 'gradient',
        },
      ]}
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemTextColor: '#444444',
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}

export default MyResponsiveChoropleth
