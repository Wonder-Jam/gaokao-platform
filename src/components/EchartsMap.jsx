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
                geo: {
                    map: "china",
                    roam: false,// 一定要关闭拖拽
                    zoom: 1.23,
                    center: [105, 36], // 调整地图位置
                    itemStyle: {
                        normal: {
                            areaColor: "#F0FFFF",
                            borderColor: "#1677FF",
                            borderWidth: 1, //设置外层边框
                            shadowBlur: 8,
                            shadowOffsetY: 8,
                            shadowOffsetX: 0,
                            shadowColor: "#87CEFA"
                        },
                        emphasis: {
                            areaColor: "#F5FFFA",
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 5,
                            borderWidth: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                },
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
