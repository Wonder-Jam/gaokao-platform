import React, { useEffect, useState, useRef } from "react";
import * as echarts from "echarts";
// import china from "../data/china"; // 假设你有中国地图数据

function EChartsMap() {

    const [features, setFeatures] = useState(null)
    const chartRef = useRef(null);
    const initEChart = () => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current);
            echarts.registerMap("china", features);
            const option = {
                series: [
                    {
                        type: "map",
                        map: "china",
                        roam: false,// 一定要关闭拖拽
                        zoom: 1.60,
                        center: [105, 35], // 调整地图位置
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
                        }
                    },
                ]
                // series: [
                //     {
                //         type: "map",
                //         map: "china", // 引入地图数据
                //     },
                // ],
            };

            myChart.setOption(option);
        } else {
            console.log("faild to init chartRef")
        }
    };

    useEffect(() => {

        fetch('/files/ChinaMap.geoJson')
            .then(response => response.json())
            .then(data => {
                setFeatures(data)
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })


    }, []);

    if (features) {
        initEChart();
    }

    return (
        <div
            ref={chartRef}
            style={{ width: "500px", height: "500px" }}
        >Loading...</div>
    );
}

export default EChartsMap;
