import React, { useEffect, useState, useRef, useContext } from 'react'
import * as echarts from 'echarts'
import { SearchContext } from '../Context/SearchContext'
import { Dropdown, Button } from 'antd'
import { BarChartOutlined } from '@ant-design/icons'
// import * as Enum from '../enum'

// import china from "../data/china"; // 假设你有中国地图数据

// TODO: 1. 使用context传递数据

import * as Enum from '../enum' // 假设你的枚举文件在 '../enum' 中
import { provinceMap, proviceDataMap, reverseProvinceMap } from '../maps'

// 在代码的开始处定义一个标志变量





function EChartsMap() {
  const { province, city, rank, filterSchool, setChoices } =
    useContext(SearchContext)
  const [features, setFeatures] = useState(null)
  const [map, setMap] = useState('china')
  // const map = 'china'
  const chartRef = useRef(null)
  const myChart = useRef(null)
  let shouldRunInterval = false;
  let locationInterval;

  function startInterval() {
    shouldRunInterval = true;
    if (!locationInterval) {
      locationInterval = setInterval(() => {
        if (shouldRunInterval) {
          fetch('api/locateUniversityRandomly')
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const tmpScatter = data.map((item) => [
                item.location.lng,
                item.location.lat,
                100,
              ]);
              console.log(tmpScatter);
              myChart.current.setOption({
                series: [
                  {
                    name: 'school',
                    data: tmpScatter,
                  },
                ],
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }, 60000);
    }
  }


  function stopInterval() {
    shouldRunInterval = false;
  }
  const initEChart = () => {
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
          roam: false, // 一定要关闭拖拽
          zoom: 1.0,
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
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
              color: '#1677FF',
            },
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
          }

        ]
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
    setFeatures(null)
    myChart.current.showLoading({
      color: '#1677ff',
    })
    fetch(proviceDataMap.get(province))
      .then(responce => responce.json())
      .then(data => {
        // setMap('tmp')
        if (province !== Enum.province.None) {
          setMap('tmp')
        } else {
          setMap('china')
        }
        setFeatures(data)
        console.log(data)
        myChart.current.hideLoading()
        if (province === Enum.province.None) {
          startInterval()
        } else {
          // clearInterval(locationInterval)
          stopInterval()
          fetch(`api/locateUniversityByProvince?province=${reverseProvinceMap.get(province)}`).then(res => res.json()).then(data => {
            console.log(data)
            const tmpScatter = data.map(item => [
              item.location.lng,
              item.location.lat,
              // { name: item.name }
              100
            ]);
            // setScatter(tmpScatter)
            myChart.current.setOption({
              series: [
                {
                  name: 'school',
                  // data: [[32,114]]
                  data: tmpScatter
                },
              ],
            })
          }).catch(err => {
            console.log(err)
          })
        }
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

  const gdpData = [
    { name: '北京市', value: '41610.9' },
    { name: '天津市', value: '16311.3' },
    { name: '河北省', value: '42370.4' },
    { name: '山西省', value: '25642.6' },
    { name: '内蒙古自治区', value: '23158.6' },
    { name: '辽宁省', value: '28975.1' },
    { name: '吉林省', value: '13070.2' },
    { name: '黑龙江省', value: '15901.0' },
    { name: '上海市', value: '44652.8' },
    { name: '江苏省', value: '122875.6' },
    { name: '浙江省', value: '77715.4' },
    { name: '安徽省', value: '45045.0' },
    { name: '福建省', value: '53109.9' },
    { name: '江西省', value: '32074.7' },
    { name: '山东省', value: '87435.1' },
    { name: '河南省', value: '61345.1' },
    { name: '湖北省', value: '53734.9' },
    { name: '湖南省', value: '48670.4' },
    { name: '广东省', value: '129118.6' },
    { name: '广西壮族自治区', value: '26300.9' },
    { name: '海南省', value: '6818.2' },
    { name: '重庆市', value: '29129.0' },
    { name: '四川省', value: '56749.8' },
    { name: '贵州省', value: '20164.6' },
    { name: '云南省', value: '28954.2' },
    { name: '西藏自治区', value: '2132.6' },
    { name: '陕西省', value: '32772.7' },
    { name: '甘肃省', value: '11201.6' },
    { name: '青海省', value: '3610.1' },
    { name: '宁夏回族自治区', value: '5069.6' },
    { name: '新疆维吾尔自治区', value: '17741.3' },
  ]

  // 985数组
  const universities985 = [
    { name: '北京市', value: 8 },
    { name: '天津市', value: 2 },
    { name: '河北省', value: 0 },
    { name: '山西省', value: 0 },
    { name: '内蒙古自治区', value: 0 },
    { name: '辽宁省', value: 2 },
    { name: '吉林省', value: 1 },
    { name: '黑龙江省', value: 1 },
    { name: '上海市', value: 4 },
    { name: '江苏省', value: 2 },
    { name: '浙江省', value: 1 },
    { name: '安徽省', value: 1 },
    { name: '福建省', value: 1 },
    { name: '江西省', value: 0 },
    { name: '山东省', value: 2 },
    { name: '河南省', value: 0 },
    { name: '湖北省', value: 2 },
    { name: '湖南省', value: 3 },
    { name: '广东省', value: 2 },
    { name: '广西壮族自治区', value: 0 },
    { name: '海南省', value: 0 },
    { name: '重庆市', value: 1 },
    { name: '四川省', value: 2 },
    { name: '贵州省', value: 0 },
    { name: '云南省', value: 0 },
    { name: '西藏自治区', value: 0 },
    { name: '陕西省', value: 3 },
    { name: '甘肃省', value: 1 },
    { name: '青海省', value: 0 },
    { name: '宁夏回族自治区', value: 0 },
    { name: '新疆维吾尔自治区', value: 0 },
  ]

  // 211数组
  const universities211 = [
    { name: '北京市', value: 27 },
    { name: '天津市', value: 3 },
    { name: '河北省', value: 1 },
    { name: '山西省', value: 1 },
    { name: '内蒙古自治区', value: 1 },
    { name: '辽宁省', value: 4 },
    { name: '吉林省', value: 3 },
    { name: '黑龙江省', value: 4 },
    { name: '上海市', value: 10 },
    { name: '江苏省', value: 11 },
    { name: '浙江省', value: 1 },
    { name: '安徽省', value: 3 },
    { name: '福建省', value: 2 },
    { name: '江西省', value: 1 },
    { name: '山东省', value: 3 },
    { name: '河南省', value: 1 },
    { name: '湖北省', value: 7 },
    { name: '湖南省', value: 4 },
    { name: '广东省', value: 4 },
    { name: '广西壮族自治区', value: 1 },
    { name: '海南省', value: 1 },
    { name: '重庆市', value: 2 },
    { name: '四川省', value: 5 },
    { name: '贵州省', value: 1 },
    { name: '云南省', value: 1 },
    { name: '西藏自治区', value: 1 },
    { name: '陕西省', value: 8 },
    { name: '甘肃省', value: 1 },
    { name: '青海省', value: 1 },
    { name: '宁夏回族自治区', value: 1 },
    { name: '新疆维吾尔自治区', value: 2 },
  ]

  // 双一流数组
  const universitiesDoubleFirstClass = [
    { name: '北京市', value: 11 },
    { name: '天津市', value: 4 },
    { name: '河北省', value: 1 },
    { name: '山西省', value: 1 },
    { name: '内蒙古自治区', value: 1 },
    { name: '辽宁省', value: 3 },
    { name: '吉林省', value: 2 },
    { name: '黑龙江省', value: 2 },
    { name: '上海市', value: 9 },
    { name: '江苏省', value: 6 },
    { name: '浙江省', value: 3 },
    { name: '安徽省', value: 3 },
    { name: '福建省', value: 2 },
    { name: '江西省', value: 1 },
    { name: '山东省', value: 4 },
    { name: '河南省', value: 2 },
    { name: '湖北省', value: 5 },
    { name: '湖南省', value: 5 },
    { name: '广东省', value: 6 },
    { name: '广西壮族自治区', value: 1 },
    { name: '海南省', value: 1 },
    { name: '重庆市', value: 2 },
    { name: '四川省', value: 5 },
    { name: '贵州省', value: 1 },
    { name: '云南省', value: 1 },
    { name: '西藏自治区', value: 1 },
    { name: '陕西省', value: 6 },
    { name: '甘肃省', value: 1 },
    { name: '青海省', value: 1 },
    { name: '宁夏回族自治区', value: 1 },
    { name: '新疆维吾尔自治区', value: 2 },
  ]

  // 教育总经费数组（单位：亿元）
  const educationBudget = [
    { name: '北京市', value: 500 },
    { name: '天津市', value: 200 },
    { name: '河北省', value: 300 },
    { name: '山西省', value: 150 },
    { name: '内蒙古自治区', value: 100 },
    { name: '辽宁省', value: 250 },
    { name: '吉林省', value: 120 },
    { name: '黑龙江省', value: 100 },
    { name: '上海市', value: 400 },
    { name: '江苏省', value: 450 },
    { name: '浙江省', value: 350 },
    { name: '安徽省', value: 200 },
    { name: '福建省', value: 200 },
    { name: '江西省', value: 150 },
    { name: '山东省', value: 400 },
    { name: '河南省', value: 300 },
    { name: '湖北省', value: 250 },
    { name: '湖南省', value: 250 },
    { name: '广东省', value: 600 },
    { name: '广西壮族自治区', value: 150 },
    { name: '海南省', value: 50 },
    { name: '重庆市', value: 200 },
    { name: '四川省', value: 300 },
    { name: '贵州省', value: 100 },
    { name: '云南省', value: 150 },
    { name: '西藏自治区', value: 50 },
    { name: '陕西省', value: 200 },
    { name: '甘肃省', value: 100 },
    { name: '青海省', value: 50 },
    { name: '宁夏回族自治区', value: 50 },
    { name: '新疆维吾尔自治区', value: 150 },
  ]

  useEffect(() => {
    if (features) {
      switch (rank) {
        case Enum.rank.None:
          if (province === Enum.province.None) {
            setMap('tmp')
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
    }
  }, [rank])

  if (features) {
    initEChart()
  }

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
      {(typeof window !== 'undefined') &&
        <div ref={chartRef} style={{ height: '85vh', margin: 'auto' }}>
          Loading...
        </div>
      }
    </>
  )
}

export default EChartsMap
