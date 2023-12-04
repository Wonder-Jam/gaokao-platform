import React, { useEffect, useState } from 'react';
import {ReactECharts} from '@/components/ReactECharts'; // 确保你已经安装了echarts-for-react

const GenderRatioChart: React.FC = () => {
  const [option, setOption] = useState({});

  useEffect(() => {
    setOption({
      title: {
        text: '男女性别比例',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '性别比例',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 55, name: '男' },
            { value: 45, name: '女' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  }, []);

  return <ReactECharts style={{height: '270px'}} option={option} />;
};

export default GenderRatioChart;
