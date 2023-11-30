import React, { useEffect, useState, useRef, useContext } from 'react'  
import * as echarts from 'echarts'
import { SearchContext } from '../Context/SearchContext'
// import china from "../data/china"; // 假设你有中国地图数据

// TODO: 1. 使用context传递数据

import * as Enum from '../enum' // 假设你的枚举文件在 '../enum' 中

const provinceMap = new Map([
  ['新疆维吾尔自治区', Enum.province.Xinjiang],
  ['广西壮族自治区', Enum.province.Guangxi],
  ['湖南省', Enum.province.Hunan],
  ['北京市', Enum.province.Beijing],
  ['天津市', Enum.province.Tianjin],
  ['上海市', Enum.province.Shanghai],
  ['重庆市', Enum.province.Chongqing],
  ['河北省', Enum.province.Hebei],
  ['山西省', Enum.province.Shanxi],
  ['内蒙古自治区', Enum.province.InnerMongolia],
  ['辽宁省', Enum.province.Liaoning],
  ['吉林省', Enum.province.Jilin],
  ['黑龙江省', Enum.province.Heilongjiang],
  ['江苏省', Enum.province.Jiangsu],
  ['浙江省', Enum.province.Zhejiang],
  ['安徽省', Enum.province.Anhui],
  ['福建省', Enum.province.Fujian],
  ['江西省', Enum.province.Jiangxi],
  ['山东省', Enum.province.Shandong],
  ['河南省', Enum.province.Henan],
  ['湖北省', Enum.province.Hubei],
  ['广东省', Enum.province.Guangdong],
  ['海南省', Enum.province.Hainan],
  ['四川省', Enum.province.Sichuan],
  ['贵州省', Enum.province.Guizhou],
  ['云南省', Enum.province.Yunnan],
  ['西藏自治区', Enum.province.Tibet],
  ['陕西省', Enum.province.Shaanxi],
  ['甘肃省', Enum.province.Gansu],
  ['青海省', Enum.province.Qinghai],
  ['宁夏回族自治区', Enum.province.Ningxia],
  ['香港特别行政区', Enum.province.HongKong],
  ['澳门特别行政区', Enum.province.Macau],
  ['台湾省', Enum.province.Taiwan],
  ['全国', Enum.province.None],
])

const proviceDataMap = new Map([
  [
    Enum.province.Henan,
    'https://geo.datav.aliyun.com/areas_v3/bound/410000_full.json',
  ],
  [
    Enum.province.Hubei,
    'https://geo.datav.aliyun.com/areas_v3/bound/420000_full.json',
  ],
  [
    Enum.province.Guangdong,
    'https://geo.datav.aliyun.com/areas_v3/bound/440000_full.json',
  ],
  [
    Enum.province.Beijing,
    'https://geo.datav.aliyun.com/areas_v3/bound/110000_full.json',
  ],
  [
    Enum.province.Shanghai,
    'https://geo.datav.aliyun.com/areas_v3/bound/310000_full.json',
  ],
  [
    Enum.province.Zhejiang,
    'https://geo.datav.aliyun.com/areas_v3/bound/330000_full.json',
  ],
  [
    Enum.province.Fujian,
    'https://geo.datav.aliyun.com/areas_v3/bound/350000_full.json',
  ],
  [
    Enum.province.Jiangxi,
    'https://geo.datav.aliyun.com/areas_v3/bound/360000_full.json',
  ],
  [
    Enum.province.Shandong,
    'https://geo.datav.aliyun.com/areas_v3/bound/370000_full.json',
  ],
  [
    Enum.province.Tianjin,
    'https://geo.datav.aliyun.com/areas_v3/bound/120000_full.json',
  ],
  [
    Enum.province.Guangxi,
    'https://geo.datav.aliyun.com/areas_v3/bound/450000_full.json',
  ],
  [
    Enum.province.Chongqing,
    'https://geo.datav.aliyun.com/areas_v3/bound/500000_full.json',
  ],
  [
    Enum.province.Sichuan,
    'https://geo.datav.aliyun.com/areas_v3/bound/510000_full.json',
  ],
  [
    Enum.province.Anhui,
    'https://geo.datav.aliyun.com/areas_v3/bound/340000_full.json',
  ],
  [
    Enum.province.Jiangsu,
    'https://geo.datav.aliyun.com/areas_v3/bound/320000_full.json',
  ],
  [
    Enum.province.Hunan,
    'https://geo.datav.aliyun.com/areas_v3/bound/430000_full.json',
  ],
  [
    Enum.province.Guizhou,
    'https://geo.datav.aliyun.com/areas_v3/bound/520000_full.json',
  ],
  [
    Enum.province.Yunnan,
    'https://geo.datav.aliyun.com/areas_v3/bound/530000_full.json',
  ],
  [
    Enum.province.Hainan,
    'https://geo.datav.aliyun.com/areas_v3/bound/460000_full.json',
  ],
  [
    Enum.province.Hebei,
    'https://geo.datav.aliyun.com/areas_v3/bound/130000_full.json',
  ],
  [
    Enum.province.Shanxi,
    'https://geo.datav.aliyun.com/areas_v3/bound/140000_full.json',
  ],
  [
    Enum.province.Liaoning,
    'https://geo.datav.aliyun.com/areas_v3/bound/210000_full.json',
  ],
  [
    Enum.province.Jilin,
    'https://geo.datav.aliyun.com/areas_v3/bound/220000_full.json',
  ],
  [
    Enum.province.Heilongjiang,
    'https://geo.datav.aliyun.com/areas_v3/bound/230000_full.json',
  ],
  [
    Enum.province.Qinghai,
    'https://geo.datav.aliyun.com/areas_v3/bound/630000_full.json',
  ],
  [
    Enum.province.Xinjiang,
    'https://geo.datav.aliyun.com/areas_v3/bound/650000_full.json',
  ],
  [
    Enum.province.Ningxia,
    'https://geo.datav.aliyun.com/areas_v3/bound/640000_full.json',
  ],
  [
    Enum.province.InnerMongolia,
    'https://geo.datav.aliyun.com/areas_v3/bound/150000_full.json',
  ],
  [
    Enum.province.Gansu,
    'https://geo.datav.aliyun.com/areas_v3/bound/620000_full.json',
  ],
  [
    Enum.province.Shaanxi,
    'https://geo.datav.aliyun.com/areas_v3/bound/610000_full.json',
  ],
  [
    Enum.province.Taiwan,
    'https://geo.datav.aliyun.com/areas_v3/bound/710000.json',
  ],
  [
    Enum.province.Tibet,
    'https://geo.datav.aliyun.com/areas_v3/bound/540000_full.json',
  ],
  [
    Enum.province.HongKong,
    'https://geo.datav.aliyun.com/areas_v3/bound/810000_full.json',
  ],
  [
    Enum.province.Macau,
    'https://geo.datav.aliyun.com/areas_v3/bound/820000_full.json',
  ],
  [
    Enum.province.None,
    'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
  ],
  // 可根据需要继续添加其他省份
])

function EChartsMap() {
  const { province, city, rank, setChoices } = useContext(SearchContext)
  let myChart
  const [features, setFeatures] = useState(null)
  const [map, setMap] = useState(null)
  const chartRef = useRef(null)
  const initEChart = () => {
    if (chartRef.current) {
      myChart = echarts.init(chartRef.current)
      echarts.registerMap(map, features)
      const option = {
        tooltip: {
          // textStyle: {
          //     color: "#B1D6F6",
          //     fontSize: 8,
          //     padding: 20,
          //     align: "left"
          // },
          backgroundColor: '#FFFFFFE6',
          borderWidth: 0,

          trigger: 'item',
          formatter: function (params) {
            console.log(params)
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
        series: [
          {
            type: 'map',
            map: map,
            name: 'map',
            roam: false, // 一定要关闭拖拽
            zoom: 1.0,
            // center: [105, 35], // 调整地图位置
            showLegendSymbol: false, // 存在legend时显示
            selectedMode: 'single',
            itemStyle: {
              areaColor: '#F0F8FF',
              borderColor: '#1677FF',
              borderWidth: 1, //设置外层边框
              shadowBlur: 8,
              shadowOffsetY: 8,
              shadowOffsetX: 0,
              shadowColor: '#87CEFA',
            },
            emphasis: {
              itemStyle: {
                areaColor: '#F5FFFA',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
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
        ],
      }

      myChart.setOption(option)
      myChart.on('click', function (params) {
        // console.log(provinceMap.get(params.name))
        if (provinceMap.get(params.name)) {
          setChoices({
            province: provinceMap.get(params.name),
            city: city,
            rank: rank,
          })
        }
      })
    } else {
      console.log('faild to init chartRef')
    }
  }

  useEffect(() => {
    // fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    fetch('files/china.json')
      .then(response => response.json())
      .then(data => {
        setMap('china')
        setFeatures(data)
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    console.log('something changed')
    setFeatures(null)
    fetch(proviceDataMap.get(province))
      .then(responce => responce.json())
      .then(data => {
        setMap('tmp')
        setFeatures(data)
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
            myChart.setOption({
              visualMap: {
                show: false,
              },
              series: [
                {
                  data: [],
                  itemStyle: {
                    areaColor: '#F0F8FF',
                    borderColor: '#1677FF',
                    borderWidth: 1, //设置外层边框
                    shadowBlur: 8,
                    shadowOffsetY: 8,
                    shadowOffsetX: 0,
                    shadowColor: '#87CEFA',
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
            myChart.setOption({
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
                    shadowOffsetY: 1,
                    shadowOffsetX: 0,
                    shadowColor: '#87CEFA',
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
            myChart.setOption({
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
                    shadowOffsetY: 1,
                    shadowOffsetX: 0,
                    shadowColor: '#87CEFA',
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
            myChart.setOption({
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
                    shadowOffsetY: 1,
                    shadowOffsetX: 0,
                    shadowColor: '#87CEFA',
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
            myChart.setOption({
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
                    shadowOffsetY: 1,
                    shadowOffsetX: 0,
                    shadowColor: '#87CEFA',
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
            myChart.setOption({
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
                    shadowOffsetY: 1,
                    shadowOffsetX: 0,
                    shadowColor: '#87CEFA',
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

    return (
        <div
            ref={chartRef}
            style={{ height: "85vh", margin: "auto"}}
        >Loading...</div>
    );
}

export default EChartsMap
