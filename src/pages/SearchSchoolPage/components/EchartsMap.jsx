import React, { useEffect, useState, useRef, useContext } from 'react'
import * as echarts from 'echarts'
import { SearchContext } from '../Context/SearchContext'
import { Dropdown, Button, Spin } from 'antd'
import { BarChartOutlined } from '@ant-design/icons'
import {
  gdpData,
  universities211,
  universities985,
  universitiesDoubleFirstClass,
  educationBudget,
} from '../mockedData'
// import * as Enum from '../enum'

// import china from "../data/china"; // 假设你有中国地图数据

// TODO: 1. 使用context传递数据

import * as Enum from '../enum' // 假设你的枚举文件在 '../enum' 中
import { provinceMap, proviceDataMap, reverseProvinceMap } from '../maps'

// 在代码的开始处定义一个标志变量
// let locationFetch = 'api/locateUniversityRandomly'
let locationInterval = null

function EChartsMap() {
  const { province, city, rank, filterSchool, setChoices } =
    useContext(SearchContext)
  // const [features, setFeatures] = useState(null)
  // const [map, setMap] = useState('china')
  // const map = 'china'
  const chartRef = useRef(null)
  const myChart = useRef(null)
  const [isLoadingScatter, setIsLoadingScatter] = useState(false)
  const task = locationFetch => {
    // if (province === Enum.province.None) {
    //   myChart.current.setOption({
    //     geo: {
    //       roam: false,
    //     },
    //     series: [
    //       {
    //         name: 'map',
    //         roam: false,
    //       }
    //     ]
    //   })
    // } else {
    //   myChart.current.setOption({
    //     geo: {
    //       roam: true,
    //     },
    //     series: [
    //       {
    //         name: 'map',
    //         roam: true,
    //       }
    //     ]
    //   })
    // }
    setIsLoadingScatter(true)
    fetch(locationFetch)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const tmpScatter = data.map(item => {
          return {
            value: [item.lon, item.lat],
            name: item.name,
            symbol: 'image://' + item.logo,
            symbolSize: 20,
          }
        })
        console.log(tmpScatter)
        myChart.current.setOption({
          series: [
            {
              name: 'school',
              data: tmpScatter,
              colorBy: 'data',
            },
          ],
        })
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => setIsLoadingScatter(false))
  }

  function startInterval(locationFetch) {
    console.log('start interval!')
    if (locationInterval) {
      clearInterval(locationInterval)
    }
    task(locationFetch)
    locationInterval = setInterval(() => {
      task(locationFetch)
    }, 10000)
  }

  useEffect(() => {
    return () => {
      if (locationInterval) {
        clearInterval(locationInterval)
      }
    }
  }, [])

  const initEChart = (map, features) => {
    if (myChart.current) {
      echarts.registerMap(map, features)
      const option = {
        tooltip: {
          backgroundColor: '#FFFFFFE6',
          borderWidth: 0,
          trigger: 'item',
          formatter: function (params) {
            // console.log('params', params)
            const name = params.name
            const gdp = gdpData.find(item => item.name === name) ?? {
              value: 'unkown',
            }
            const _985 = universities985.find(item => item.name === name) ?? {
              value: 'unkown',
            }
            const _211 = universities211.find(item => item.name === name) ?? {
              value: 'unkown',
            }
            const doubleFirstClass = universitiesDoubleFirstClass.find(
              item => item.name === name,
            ) ?? { value: 'unkown' }
            const eduFunds = educationBudget.find(
              item => item.name === name,
            ) ?? { value: 'unkown' }
            return `
                        <div style="font-size: 16; font-weight: bold">${name}</div>
                        <div style="font-size: 10">GDP: ${gdp.value} (亿)</div>
                        <div style="font-size: 10">985: ${_985.value} (所)</div>
                        <div style="font-size: 10">211: ${_211.value} (所)</div>
                        <div style="font-size: 10">双一流: ${doubleFirstClass.value} (所)</div>
                        <div style="font-size: 10">教育经费: ${eduFunds.value} (亿)</div>
                    `
          },
          // formatter: '呼啦呼啦'
        },
        geo: {
          type: 'map',
          map: map,
          // name: 'map',
          roam: true, // 一定要关闭拖拽
          center:
            province === Enum.province.None
              ? ''
              : features.features[0].properties.center,
          zoom: 1.0,
          showLegendSymbol: false, // 存在legend时显示
          selectedMode: 'single',
          itemStyle: {
            areaColor: '#F0F8FF',
            borderColor: '#1677FF',
            borderWidth: 0.7, //设置外层边框
            shadowBlur: 4,
            // shadowOffsetY: 8,
            // shadowOffsetX: 0,
            shadowColor: '#87CEFA',
          },
          emphasis: {
            itemStyle: {
              areaColor: '#F5FFFA',
              // shadowOffsetX: 0,
              // shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          select: {
            itemStyle: {
              areaColor: '#F0FFFF',
              borderWidth: 1,
              borderColor: '#ADD8E6',
            },
          },
          // center: [105, 35], // 调整地图位置
        },
        series: [
          // {
          //   type: 'map',
          //   // map: map,
          //   name: 'map',
          //   roam: false, // 一定要关闭拖拽
          //   zoom: 1.0,
          // },
          {
            name: 'school',
            type: 'scatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            // data: scatter
            // data: [
            //   [121.47,31.23, 0],
            //   [116.40,39.90, 0],
            //   [106.55,29.56, 0]
            // ]
          },
          {
            type: 'map',
            map: map,
            name: 'map',
            geoIndex: 0,
            // roam: true,
          },
        ],
      }
      if (window !== undefined) {
        window.addEventListener('resize', () => {
          myChart.current.resize && myChart.current.resize()
        })
        myChart.current.setOption(option)
        myChart.current.on('click', function (params) {
          // console.log(provinceMap.get(params.name))
          if (provinceMap.get(params.name)) {
            setChoices({
              province: provinceMap.get(params.name),
              city: city,
              rank: rank,
              filterSchool,
            })
          }
        })
      }
    } else {
      console.log('faild to init chartRef')
    }
  }

  useEffect(() => {
    if (chartRef.current) {
      myChart.current = echarts.init(chartRef.current)
    }
  }, [chartRef.current])
  useEffect(() => {
    // console.log('something changed')
    // setFeatures(null)
    if (province === Enum.province.None) {
      // startInterval('api/locateUniversityRandomly_v2')
      task('api/locateUniversityRandomly_v2')
    } else {
      clearInterval(locationInterval)
      task(`api/locateUniversityByProvince_v2?location=${province}`)
    }
    fetch(proviceDataMap.get(province))
      .then(responce => responce.json())
      .then(data => {
        // setMap('tmp')
        if (province !== Enum.province.None) {
          initEChart('tmp', data)
        } else {
          initEChart('china', data)
        }
        // setFeatures(data)
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [province])

  const getMax = data => {
    return data.reduce((prevMax, current) => {
      console.log(current)
      const value = parseFloat(current.value)
      return value > prevMax ? value : prevMax
    }, 0)
  }

  useEffect(() => {
    // if (features) {
    switch (rank) {
      case Enum.rank.None:
        if (province === Enum.province.None) {
          // setMap('tmp')
          myChart.current.setOption({
            visualMap: {
              show: false,
            },
            series: [
              {
                name: 'map',
                data: [],
                itemStyle: {
                  areaColor: '#F0F8FF',
                  borderColor: '#1677FF',
                  borderWidth: 1, //设置外层边框
                  shadowBlur: 4,
                  // shadowOffsetY: 8,
                  // shadowOffsetX: 0,
                  // shadowColor: '#87CEFA',
                },
              },
            ],
            // legend: {
            //     // Try 'horizontal'
            //     show: false,
            // },
          })
        }
        break
      case Enum.rank.GDP:
        // TODO: 后续展示不同的数据，可以将代码逻辑抽象
        if (province === Enum.province.None) {
          const max = getMax(gdpData)
          myChart.current.setOption({
            visualMap: {
              show: true,
              min: 0,
              max: max,
              text: ['高', '低'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['#F0FFFF', '#0000CD'],
              },
            },
            series: [
              {
                name: 'map',
                data: gdpData,
                itemStyle: {
                  areaColor: '#F0F8FF',
                  borderColor: '#1677FF',
                  borderWidth: 0.7, //设置外层边框
                  shadowBlur: 4,
                  // shadowOffsetY: 1,
                  // shadowOffsetX: 0,
                  // shadowColor: '#87CEFA',
                },
              },
            ],
          })
          console.log('set gdp')
        }
        break
      case Enum.rank._985:
        if (province === Enum.province.None) {
          const max = getMax(universities985)
          myChart.current.setOption({
            visualMap: {
              show: true,
              min: 0,
              max: max,
              text: ['高', '低'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['#FFF0F5', '#FF4500'],
              },
            },
            series: [
              {
                name: 'map',
                data: universities985,
                itemStyle: {
                  areaColor: '#F0F8FF',
                  borderColor: '#1677FF',
                  borderWidth: 0.7, //设置外层边框
                  shadowBlur: 4,
                  // shadowOffsetY: 1,
                  // shadowOffsetX: 0,
                  // shadowColor: '#87CEFA',
                },
              },
            ],
          })
          console.log('set 985')
        }
        break
      case Enum.rank._211:
        if (province === Enum.province.None) {
          const max = getMax(universities211)
          console.log(max)
          myChart.current.setOption({
            visualMap: {
              show: true,
              min: 0,
              max: max,
              text: ['高', '低'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['#E0FFFF', '#228B22'],
              },
            },
            series: [
              {
                name: 'map',
                data: universities211,
                itemStyle: {
                  areaColor: '#F0F8FF',
                  borderColor: '#1677FF',
                  borderWidth: 0.7, //设置外层边框
                  shadowBlur: 4,
                  // shadowOffsetY: 1,
                  // shadowOffsetX: 0,
                  // shadowColor: '#87CEFA',
                },
              },
            ],
          })
          console.log('set 211')
        }
        break
      case Enum.rank.DoubleFristClass:
        if (province === Enum.province.None) {
          const max = getMax(universitiesDoubleFirstClass)
          console.log(max)
          myChart.current.setOption({
            visualMap: {
              show: true,
              min: 0,
              max: max,
              text: ['高', '低'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['#FFFFE0', '#CD9B1D'],
              },
            },
            series: [
              {
                name: 'map',
                data: universitiesDoubleFirstClass,
                itemStyle: {
                  areaColor: '#F0F8FF',
                  borderColor: '#1677FF',
                  borderWidth: 0.7, //设置外层边框
                  shadowBlur: 4,
                  // shadowOffsetY: 1,
                  // shadowOffsetX: 0,
                  // shadowColor: '#87CEFA',
                },
              },
            ],
          })
          console.log('set double first class')
        }
        break
      case Enum.rank.EduFunds:
        if (province === Enum.province.None) {
          const max = getMax(educationBudget)
          console.log(max)
          myChart.current.setOption({
            visualMap: {
              show: true,
              min: 0,
              max: max,
              text: ['高', '低'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['#FFFAFA', '#8B8378'],
              },
            },
            series: [
              {
                name: 'map',
                data: educationBudget,
                itemStyle: {
                  areaColor: '#F0F8FF',
                  borderColor: '#1677FF',
                  borderWidth: 0.7, //设置外层边框
                  shadowBlur: 4,
                  // shadowOffsetY: 1,
                  // shadowOffsetX: 0,
                  // shadowColor: '#87CEFA',
                },
              },
            ],
          })
          console.log('set edu funds')
        }
        break
    }
    // }
  }, [rank])

  // if (features) {
  //   initEChart()
  // }

  const items = [
    {
      key: '1',
      label: '全省GPD总值',
    },
    {
      key: '2',
      label: '985高校数量',
    },
    {
      key: '3',
      label: '211高校数量',
    },
    {
      key: '4',
      label: '双一流大学数量',
    },
    {
      key: '5',
      label: '教育总经费',
    },
    {
      key: '6',
      label: '无',
    },
  ]

  return (
    <>
      <div
        style={{
          position: 'absolute',
          zIndex: '1',
          marginTop: '-15px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {province !== Enum.province.None ? (
          <Button
            onClick={() => {
              setChoices({
                province: Enum.province.None,
                city,
                rank,
                filterSchool,
              })
            }}
          >
            返回全国地图
          </Button>
        ) : (
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ['6'],
              onSelect: e => {
                setChoices({
                  province,
                  city,
                  rank: Number(e.key),
                  filterSchool,
                })
              },
            }}
            placement="bottom"
            arrow
          >
            <Button icon={<BarChartOutlined />}>为地区排序</Button>
          </Dropdown>
        )}
      </div>
      {typeof window !== 'undefined' && (
        <Spin spinning={isLoadingScatter}>
          <div ref={chartRef} style={{ height: '90vh', margin: 'auto' }}>
            Loading...
          </div>
        </Spin>
      )}
    </>
  )
}

export default EChartsMap
