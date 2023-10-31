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
                        map: "china", // 引入地图数据
                    },
                ],
            };

            myChart.setOption(option);
        } else{
            console.log("faild to init chartRef")
        }
    };

    useEffect(() => {

        fetch('/files/ChinaMap.geoJson')
            .then(response => response.json())
            .then(data => {
                setFeatures(data)
            })
            .catch(error => {
                console.error(error)
            })

        
    }, []);

    if (!features) {
        // 如果features还没有初始化完成，则返回loading状态或其他占位内容
        return <div>Loading...</div>
    } else{
        initEChart();
    }

    return (
        <div
            ref={chartRef}
            style={{  height: "100%" }}
        ></div>
    );
}

export default EChartsMap;
