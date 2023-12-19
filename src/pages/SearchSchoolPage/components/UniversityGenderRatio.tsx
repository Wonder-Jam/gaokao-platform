import React, { useEffect, useState } from 'react'
import { ReactECharts } from '@/components/ReactECharts' // 确保你已经安装了echarts-for-react

interface AppProps {
  female: number
  male: number
}

const GenderRatioChart: React.FC<AppProps> = props => {
  const [option, setOption] = useState({})

  useEffect(() => {
    setOption({
      title: {
        text: '男女性别比例',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '性别比例',
          type: 'pie',
          radius: '50%',
          data: [
            { value: props.male*100, name: '男' },
            { value: props.female*100, name: '女' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    })
  }, [])

  return <ReactECharts style={{ height: '270px' }} option={option} />
}

export default GenderRatioChart
