import React, { useEffect, useState, useRef, useContext } from "react";
import * as echarts from "echarts";
import { SearchContext } from "../index";
// import china from "../data/china"; // 假设你有中国地图数据

// TODO: 1. 使用context传递数据

import * as Enum from '../enum'; // 假设你的枚举文件在 '../enum' 中

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
    ['全国', Enum.province.None]
]);

const proviceDataMap = new Map([
    [Enum.province.Henan, 'https://geo.datav.aliyun.com/areas_v3/bound/410000_full.json'],
    [Enum.province.Hubei, 'https://geo.datav.aliyun.com/areas_v3/bound/420000_full.json'],
    [Enum.province.Guangdong, 'https://geo.datav.aliyun.com/areas_v3/bound/440000_full.json'],
    [Enum.province.Beijing, 'https://geo.datav.aliyun.com/areas_v3/bound/110000_full.json'],
    [Enum.province.Shanghai, 'https://geo.datav.aliyun.com/areas_v3/bound/310000_full.json'],
    [Enum.province.Zhejiang, 'https://geo.datav.aliyun.com/areas_v3/bound/330000_full.json'],
    [Enum.province.Fujian, 'https://geo.datav.aliyun.com/areas_v3/bound/350000_full.json'],
    [Enum.province.Jiangxi, 'https://geo.datav.aliyun.com/areas_v3/bound/360000_full.json'],
    [Enum.province.Shandong, 'https://geo.datav.aliyun.com/areas_v3/bound/370000_full.json'],
    [Enum.province.Tianjin, 'https://geo.datav.aliyun.com/areas_v3/bound/120000_full.json'],
    [Enum.province.Guangxi, 'https://geo.datav.aliyun.com/areas_v3/bound/450000_full.json'],
    [Enum.province.Chongqing, 'https://geo.datav.aliyun.com/areas_v3/bound/500000_full.json'],
    [Enum.province.Sichuan, 'https://geo.datav.aliyun.com/areas_v3/bound/510000_full.json'],
    [Enum.province.Anhui, 'https://geo.datav.aliyun.com/areas_v3/bound/340000_full.json'],
    [Enum.province.Jiangsu, 'https://geo.datav.aliyun.com/areas_v3/bound/320000_full.json'],
    [Enum.province.Hunan, 'https://geo.datav.aliyun.com/areas_v3/bound/430000_full.json'],
    [Enum.province.Guizhou, 'https://geo.datav.aliyun.com/areas_v3/bound/520000_full.json'],
    [Enum.province.Yunnan, 'https://geo.datav.aliyun.com/areas_v3/bound/530000_full.json'],
    [Enum.province.Hainan, 'https://geo.datav.aliyun.com/areas_v3/bound/460000_full.json'],
    [Enum.province.Hebei, 'https://geo.datav.aliyun.com/areas_v3/bound/130000_full.json'],
    [Enum.province.Shanxi, 'https://geo.datav.aliyun.com/areas_v3/bound/140000_full.json'],
    [Enum.province.Liaoning, 'https://geo.datav.aliyun.com/areas_v3/bound/210000_full.json'],
    [Enum.province.Jilin, 'https://geo.datav.aliyun.com/areas_v3/bound/220000_full.json'],
    [Enum.province.Heilongjiang, 'https://geo.datav.aliyun.com/areas_v3/bound/230000_full.json'],
    [Enum.province.Qinghai, 'https://geo.datav.aliyun.com/areas_v3/bound/630000_full.json'],
    [Enum.province.Xinjiang, 'https://geo.datav.aliyun.com/areas_v3/bound/650000_full.json'],
    [Enum.province.Ningxia, 'https://geo.datav.aliyun.com/areas_v3/bound/640000_full.json'],
    [Enum.province.InnerMongolia, 'https://geo.datav.aliyun.com/areas_v3/bound/150000_full.json'],
    [Enum.province.Gansu, 'https://geo.datav.aliyun.com/areas_v3/bound/620000_full.json'],
    [Enum.province.Shaanxi, 'https://geo.datav.aliyun.com/areas_v3/bound/610000_full.json'],
    [Enum.province.Taiwan, 'https://geo.datav.aliyun.com/areas_v3/bound/710000.json'],
    [Enum.province.Tibet, 'https://geo.datav.aliyun.com/areas_v3/bound/540000_full.json'],
    [Enum.province.HongKong, 'https://geo.datav.aliyun.com/areas_v3/bound/810000_full.json'],
    [Enum.province.Macau, 'https://geo.datav.aliyun.com/areas_v3/bound/820000_full.json'],
    [Enum.province.None, 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json'],
    // 可根据需要继续添加其他省份
]);




function EChartsMap() {
    const { province, city, rank, setChoices } = useContext(SearchContext);
    let myChart;
    const [features, setFeatures] = useState(null);
    const [map, setMap] = useState(null);
    const chartRef = useRef(null);
    const initEChart = () => {
        if (chartRef.current) {
            myChart = echarts.init(chartRef.current);
            echarts.registerMap(map, features);
            const option = {
                series: [
                    {
                        type: "map",
                        map: map,
                        roam: false,// 一定要关闭拖拽
                        zoom: 1.00,
                        // center: [105, 35], // 调整地图位置
                        showLegendSymbol: false, // 存在legend时显示
                        selectedMode: "single",
                        itemStyle: {
                            areaColor: "#F0F8FF",
                            borderColor: "#1677FF",
                            borderWidth: 1, //设置外层边框
                            shadowBlur: 8,
                            shadowOffsetY: 8,
                            shadowOffsetX: 0,
                            shadowColor: "#87CEFA"
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: "#F5FFFA",
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 5,
                                borderWidth: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        },
                        select: {
                            itemStyle: {
                                areaColor: "#F0FFFF",
                                borderWidth: 1,
                                borderColor: "#ADD8E6"
                            }
                        },

                    },
                ]
            };

            myChart.setOption(option);
            myChart.on('click', function (params) {
                // console.log(provinceMap.get(params.name))
                setChoices({ province: provinceMap.get(params.name), city: city, rank: rank })
            });
            // useEffect(()=>{
            // myChart.dispatchAction({
            //     type: 'geoSelect',
            //     name: province
            // })
            // },[province, city, rank])
        } else {
            console.log("faild to init chartRef");
        }
    };

    useEffect(() => {

        fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
            .then(response => response.json())
            .then(data => {
                setMap("china");
                setFeatures(data);
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            })


    }, []);

    useEffect(() => {
        console.log("something changed")
        setFeatures(null);
        fetch(proviceDataMap.get(province))
            .then(responce => responce.json())
            .then(data => {
                setMap('tmp');
                setFeatures(data);
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [province])

    if (features) {
        initEChart();
    }

    return (
        <div
            ref={chartRef}
            style={{ width: "1000px", height: "1000px" }}
        >Loading...</div>
    );
}

export default EChartsMap;
