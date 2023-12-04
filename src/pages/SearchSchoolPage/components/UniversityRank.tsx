// 引入React和ECharts相关的模块
import React, { useEffect, useState } from 'react'
import { EChartsOption } from 'echarts'
import { ReactECharts } from '@/components/ReactECharts' // 这是一个封装好的React组件，可以参考[2]中的实现

// 定义一个函数组件，接受一个props参数，包含南京大学的录取数据
interface Props {
    data: {
        year: number // 年份
        rank: number // 分数线
        type: 'USNews' | 'QS' | 'THE' | 'ARWU' // 类别
    }[]
}

const UniversityRank: React.FC<Props> = props => {
    // 定义一个状态变量，用来存储ECharts的配置选项
    const [option, setOption] = useState<EChartsOption>({})

    // 使用useEffect钩子，在组件挂载时根据props.data生成ECharts的配置选项
    useEffect(() => {
        // 对数据进行分组，按照类别分为文史和理工两组
        const groups = props.data.reduce(
            (acc, cur) => {
                acc[cur.type].push([cur.year, cur.rank])
                return acc
            },
            {
                USNews: [] as [number, number][],
                QS: [] as [number, number][],
                THE: [] as [number, number][],
                ARWU: [] as [number, number][],
            },
        )

        // 生成ECharts的配置选项
        const option: EChartsOption = {
            title: {
                text: '历年高校排名情况', // 图表标题
            },
            tooltip: {
                trigger: 'axis', // 提示框触发方式，横轴触发
            },
            legend: {
                bottom: 'bottom', // 图例位置
                data: ['USNews', 'QS', 'THE', 'ARWU'], // 图例，对应两条折线的名称
            },
            xAxis: {
                type: 'category', // 横轴类型，类目型
                data: groups.USNews.map(item => item[0]), // 横轴数据，取文史组的年份
            },
            yAxis: {
                type: 'value', // 纵轴类型，数值型
                min: Math.min(groups.USNews.reduce((acc, cur) => Math.min(acc, cur[1]), 10000) - 5, groups.QS.reduce((acc, cur) => Math.min(acc, cur[1]), 10000) - 5, groups.THE.reduce((acc, cur) => Math.min(acc, cur[1]), 1000) - 5, groups.THE.reduce((acc, cur) => Math.min(acc, cur[1]), 1000) - 5), // 纵轴最小值，取文史组中分数最低的减20
                max: Math.max(groups.USNews.reduce((acc, cur) => Math.max(acc, cur[1]), 0) + 5, groups.QS.reduce((acc, cur) => Math.max(acc, cur[1]), 0) + 5, groups.THE.reduce((acc, cur) => Math.max(acc, cur[1]), 0) + 5, groups.ARWU.reduce((acc, cur) => Math.max(acc, cur[1]), 0) + 5), // 纵轴最大值，取理工组中分数最高的加20
                inverse: true,
            },
            series: [
                {
                    name: 'USNews', // 系列名称，对应图例
                    type: 'line', // 系列类型，折线图
                    data: groups.USNews.map(item => item[1]), // 系列数据，取文史组的分数
                },
                {
                    name: 'QS', // 系列名称，对应图例
                    type: 'line', // 系列类型，折线图
                    data: groups.QS.map(item => item[1]), // 系列数据，取理工组的分数
                },
                {
                    name: 'THE', // 系列名称，对应图例
                    type: 'line', // 系列类型，折线图
                    data: groups.THE.map(item => item[1]), // 系列数据，取理工组的分数
                },
                {
                    name: 'ARWU', // 系列名称，对应图例
                    type: 'line', // 系列类型，折线图
                    data: groups.ARWU.map(item => item[1]), // 系列数据，取理工组的分数
                },
            ],
        }

        // 更新状态变量
        setOption(option)
    }, [props.data])

    // 返回一个ReactECharts组件，传入option作为props
    return <ReactECharts style={{ height: '270px' }} option={option} />
}

export default UniversityRank
