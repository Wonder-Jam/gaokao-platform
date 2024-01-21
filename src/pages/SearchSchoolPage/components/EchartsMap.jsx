import eventBus from '@/utils/eventBus'
import {
  BarChartOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
} from '@ant-design/icons'
import { Alert, Button, Dropdown, Spin, message } from 'antd'
import * as echarts from 'echarts'
import { useContext, useEffect, useRef, useState } from 'react'
import { SearchContext } from '../Context/SearchContext'
import {
  educationBudget,
  gdpData,
  universities211,
  universities985,
  universitiesDoubleFirstClass,
} from '../mockedData'
// import * as Enum from '../enum'

// import china from "../data/china"; // 假设你有中国地图数据

// TODO: 1. 使用context传递数据

import * as Enum from '../enum' // 假设你的枚举文件在 '../enum' 中
import { proviceDataMap, provinceMap } from '../maps'

// 在代码的开始处定义一个标志变量
// let locationFetch = 'api/locateUniversityRandomly'
let locationInterval = null

const EChartsMap = () => {
  const {
    province,
    city,
    rank,
    score,
    selectedClass,
    filterSchool,
    setChoices,
  } = useContext(SearchContext)
  const chartRef = useRef(null)
  const myChart = useRef(null)
  const [isLoadingScatter, setIsLoadingScatter] = useState(false)
  const [isRecommending, setIsRecommending] = useState(false)
  const [scatterData, setScatterData] = useState([])

  const fetchSchoolData = async locationFetch => {
    try {
      const res = await fetch(locationFetch)
      const data = await res.json()

      if (filterSchool.length !== 0) {
        const filteredData = data.filter(item => {
          return filterSchool.some(element => {
            return element === '双一流'
              ? item.note?.includes('一流')
              : item.note?.includes(element)
          })
        })

        setScatterData(filteredData)

        const tmpScatter = filteredData.map(item => ({
          value: [item.lon, item.lat],
          name: item.name,
          symbol: 'image://' + item.logo,
          symbolSize: 20,
          address: item.address,
          note: item.note,
        }))

        return tmpScatter
      }

      setScatterData(data)

      return data.map(item => ({
        value: [item.lon, item.lat],
        name: item.name,
        symbol: 'image://' + item.logo,
        symbolSize: 20,
        address: item.address,
        note: item.note,
      }))
    } catch (err) {
      console.error(err)
      throw err // Re-throw the error to be handled by the caller if needed.
    }
  }

  const updateScatterChart = scatterData => {
    myChart.current.setOption({
      series: [
        {
          name: 'school',
          data: scatterData,
          colorBy: 'data',
        },
      ],
    })
  }

  const task = async locationFetch => {
    try {
      const scatterData = await fetchSchoolData(locationFetch)
      updateScatterChart(scatterData)
    } catch (err) {
      // Handle or log errors if needed.
    }
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
          show: map === 'china' ? true : false,
          backgroundColor: '#FFFFFFE6',
          borderWidth: 0,
          trigger: 'item',
          formatter: function (params) {
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
        },
        geo: {
          type: 'map',
          map: map,
          roam: true,
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
            shadowColor: '#87CEFA',
          },
          emphasis: {
            itemStyle: {
              areaColor: '#F5FFFA',
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
        },
        series: [
          {
            name: 'school',
            type: 'scatter',
            coordinateSystem: 'geo',
            tooltip: {
              show: true,
              trigger: 'item',
              formatter: function (params) {
                // console.log(params)
                // console.log(params.data.symbol.substring(8))
                return `
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                <image src=${params.data.symbol.substring(
                  8,
                )} style="width: 50px; height: 50px" />
                <div style="font-size: 16; font-weight: bold">${
                  params.data.name
                }</div>
                <div style="font-size: 10">地址: ${params.data.address}</div>
                <div style="font-size: 10">等级: ${
                  params.data.note ?? '无特殊等级'
                }</div>
                <div style="font-size: 10">去年最低分数线: ${Math.floor(
                  Math.random() * 150 + 500,
                )}</div>
                </div>
              `
              },
            },
            geoIndex: 0,
          },
          {
            type: 'map',
            map: map,
            name: 'map',
            geoIndex: 0,
          },
        ],
      }
      if (window !== undefined) {
        window.addEventListener('resize', () => {
          console.log('window resize received!')
          myChart.current.resize && myChart.current.resize()
        })
        myChart.current.setOption(option)
        myChart.current.off('click')
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
      myChart.current.on('click', 'series.scatter', function (params) {
        console.log('echarts detect click!')
        const universityData = sessionStorage.getItem('universityData')
        if (universityData) {
          const universityDataJson = JSON.parse(universityData)
          console.log(universityDataJson)
          const { page } = universityDataJson
          const university = page.find(item => item.name === params.data.name)
          if (university) {
            eventBus.emit('universityClicked', university)
          } else {
            console.log('没找到！')
            message.error('无法找到该学校的信息')
          }
        } else {
          console.log('连sessionStorage都没找到！')
          message.error('无法找到该学校的信息')
        }
      })
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
    const fetchDataAndInitChart = async () => {
      try {
        let locationFetch
        if (province === Enum.province.None) {
          locationFetch = 'api/locateUniversityRandomly_v2'
        } else {
          setIsRecommending(true)
          locationFetch = `api/locateUniversityByProvince_v2?location=${province}`
        }
        setIsLoadingScatter(true)
        const scatterData = await task(locationFetch)
        const provinceData = await fetch(proviceDataMap.get(province)).then(
          res => res.json(),
        )
        setIsLoadingScatter(false)
        setTimeout(() => setIsRecommending(false), 1500)
        if (province !== Enum.province.None) {
          initEChart('tmp', provinceData)
        } else {
          initEChart('china', provinceData)
        }
        console.log(provinceData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchDataAndInitChart()
  }, [province, score, selectedClass, filterSchool])

  const getMax = data => {
    return data.reduce((prevMax, current) => {
      const value = parseFloat(current.value)
      return value > prevMax ? value : prevMax
    }, 0)
  }

  const setMapOption = (data, visualMapColor) => {
    const max = getMax(data)

    return {
      visualMap: {
        show: true,
        min: 0,
        max: max,
        text: ['高', '低'],
        realtime: false,
        calculable: true,
        inRange: {
          color: visualMapColor,
        },
        seriesIndex: 1,
      },
      series: [
        {
          name: 'map',
          data: data,
          itemStyle: {
            areaColor: '#F0F8FF',
            borderColor: '#1677FF',
            borderWidth: 0.7,
            shadowBlur: 4,
          },
        },
      ],
    }
  }

  const rankConfigMap = {
    [Enum.rank.None]: {
      visualMap: { show: false },
      series: [
        {
          name: 'map',
          data: [],
          itemStyle: {
            areaColor: '#F0F8FF',
            borderColor: '#1677FF',
            borderWidth: 1,
            shadowBlur: 4,
          },
        },
      ],
    },
    [Enum.rank.GDP]: setMapOption(gdpData, ['#F0FFFF', '#0000CD']),
    [Enum.rank._985]: setMapOption(universities985, ['#FFF0F5', '#FF4500']),
    [Enum.rank._211]: setMapOption(universities211, ['#E0FFFF', '#228B22']),
    [Enum.rank.DoubleFristClass]: setMapOption(universitiesDoubleFirstClass, [
      '#FFFFE0',
      '#CD9B1D',
    ]),
    [Enum.rank.EduFunds]: setMapOption(educationBudget, ['#FFFAFA', '#8B8378']),
  }

  useEffect(() => {
    if (province === Enum.province.None) {
      myChart.current.setOption(rankConfigMap[rank])
      console.log(`set ${Enum.rank[rank]}`)
    }
  }, [rank, province])

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
        {isRecommending && (
          <Alert
            style={{ zIndex: 2, position: 'absolute' }}
            message={
              isLoadingScatter
                ? '正在智能推荐'
                : `为您推荐${scatterData.length}所大学`
            }
            type={isLoadingScatter ? 'info' : 'success'}
            showIcon
            closable
            icon={
              isLoadingScatter ? <LoadingOutlined /> : <CheckCircleOutlined />
            }
          />
        )}
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
          <div
            ref={chartRef}
            style={{ width: '100%', height: '90vh', margin: 'auto' }}
          >
            Loading...
          </div>
        </Spin>
      )}
    </>
  )
}

export default EChartsMap
