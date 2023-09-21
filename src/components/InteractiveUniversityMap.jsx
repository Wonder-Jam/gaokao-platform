import React, { useState, useEffect } from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import fs from 'fs'
import path from 'path'

const MyResponsiveChoropleth = ({ data }) => {
  //   let fs = require('fs')
  //   let path = require('path')
  const [features, setFeatures] = useState(null)

  useEffect(() => {
    fetch('/files/world_countries.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setFeatures(data.features)
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
      projectionTranslation={[0.5, 0.5]}
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
