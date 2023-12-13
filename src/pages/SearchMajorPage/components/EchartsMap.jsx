import React, { useEffect, useState, useRef, useContext } from 'react'
import * as echarts from 'echarts'
import { SearchContext } from '../Context/SearchContext'
import { Dropdown, Button } from 'antd'
import { BarChartOutlined } from '@ant-design/icons'
// import * as Enum from '../enum'

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
  [Enum.province.Henan, 'files/bloge7c3ac71beb11bab2eec9d0b6b3478d9.json'],
  [Enum.province.Hubei, 'files/blog0ff6bdf7e69aa8167205091a21348312.json'],
  [Enum.province.Guangdong, 'files/blogb6618ef45ca26e3c66ab149ac5f1e8cc.json'],
  [Enum.province.Beijing, 'files/blog762f35dcdfdb2454963ac17f30ed51b4.json'],
  [Enum.province.Shanghai, 'files/bloga7b15c0ffeca18e230aaf71eaa071cba.json'],
  [Enum.province.Zhejiang, 'files/blogad11cc78181310bfd9a264bdb4d7f923.json'],
  [Enum.province.Fujian, 'files/blog0db4d0018493f0bdb1317f8f76494845.json'],
  [Enum.province.Jiangxi, 'files/blog8a97e1df367a82b3a289fc2de0aa125a.json'],
  [Enum.province.Shandong, 'files/blog63b614c2b64f91dc1af50e9249b9064d.json'],
  [Enum.province.Tianjin, 'files/blogbf6820899f8b9097dd87e1787fa2483e.json'],
  [Enum.province.Guangxi, 'files/blog98dbe4fff41f52086addf5d115236ea1.json'],
  [Enum.province.Chongqing, 'files/blog94f10703705e3b9eddfc0fef076a08c9.json'],
  [Enum.province.Sichuan, 'files/blog944fe675b05339e73b7319fd83c0bd7e.json'],
  [Enum.province.Anhui, 'files/blogc533e0653f87cb54cea395d439899733.json'],
  [Enum.province.Jiangsu, 'files/blog755fe42c7bd752e4639eb2c57aaa1f4b.json'],
  [Enum.province.Hunan, 'files/blog4479ffc6ac8c1ae178c3acabaa2bb446.json'],
  [Enum.province.Guizhou, 'files/blog536a05acaf3582afe0997f34354176c2.json'],
  [Enum.province.Yunnan, 'files/blog7652fc7ad1ce040570021a1e098f221b.json'],
  [Enum.province.Hainan, 'files/blog52e061459d5a515610bdddbaa278ae73.json'],
  [Enum.province.Hebei, 'files/bloga33c1aeb72121cc9e4dd53900ad4499b.json'],
  [Enum.province.Shanxi, 'files/bloge8c48e1efa44ea3e7209a212224eabfb.json'],
  [Enum.province.Liaoning, 'files/blog6697e0b9c891555fa0861495c62295b0.json'],
  [Enum.province.Jilin, 'files/blog23983de192c0e5d75ab8aae06d5f6417.json'],
  [
    Enum.province.Heilongjiang,
    'files/blogb7b6d1ec5b854b127f6038e914942bc6.json',
  ],
  [Enum.province.Qinghai, 'files/blog27f639a8114b36eb9d9815a16754d096.json'],
  [Enum.province.Xinjiang, 'files/blog490643e90bc37480b48a350b9d2f8f78.json'],
  [Enum.province.Ningxia, 'files/blog2f96ea15dfc02084b606e156a7ab34a9.json'],
  [
    Enum.province.InnerMongolia,
    'files/bloga9338e4013ef07ec7a3ac604b762e30f.json',
  ],
  [Enum.province.Gansu, 'files/bloged2fc1445e4c81551c01d0a70aa64935.json'],
  [Enum.province.Shaanxi, 'files/blog371d3d77f07e61823959c18a09a0777e.json'],
  [Enum.province.Taiwan, 'files/blogea0be0a0f85316d02cb0edc06468e45d.json'],
  [Enum.province.Tibet, 'files/blogfea42f3e6b02803679d2df20bd91e2bd.json'],
  [Enum.province.HongKong, 'files/bloga68ee7ce25ce905813b7bc1aba916e0c.json'],
  [Enum.province.Macau, 'files/blog753d411b0690bb4d237ba60051fb4402.json'],
  [Enum.province.None, 'files/blogcb2ba75ad5f4a65bb00b748889479f93.json'],
  // 可根据需要继续添加其他省份
])

function EChartsMap() {
  const { province, city, rank, filterSchool, setChoices } =
    useContext(SearchContext)
  const [features, setFeatures] = useState(null)
  const [map, setMap] = useState(null)
  const chartRef = useRef(null)
  const myChart = useRef(null)
  const initEChart = () => {
    if (myChart.current) {
      echarts.registerMap(map, features)
      const option = {
        tooltip: {
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
    console.log('something changed')
    setFeatures(null)
    myChart.current.showLoading({
      color: '#1677ff',
    })
    fetch(proviceDataMap.get(province))
      .then(responce => responce.json())
      .then(data => {
        setMap('tmp')
        setFeatures(data)
        console.log(data)
        myChart.current.hideLoading()
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
            myChart.current.setOption({
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
      <div ref={chartRef} style={{ height: '85vh', margin: 'auto' }}>
        Loading...
      </div>
    </>
  )
}

export default EChartsMap
