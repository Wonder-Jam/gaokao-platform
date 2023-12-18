// const myData =
//     [{
//         "id": "japan",
//         "color": "hsl(306, 70%, 50%)",
//         "data": [
//             {
//                 "x": "plane",
//                 "y": 201
//             },
//             {
//                 "x": "helicopter",
//                 "y": 253
//             },
//             {
//                 "x": "boat",
//                 "y": 190
//             },
//             {
//                 "x": "train",
//                 "y": 259
//             },
//             {
//                 "x": "subway",
//                 "y": 209
//             },
//             {
//                 "x": "bus",
//                 "y": 269
//             },
//             {
//                 "x": "car",
//                 "y": 73
//             },
//             {
//                 "x": "moto",
//                 "y": 126
//             },
//             {
//                 "x": "bicycle",
//                 "y": 155
//             },
//             {
//                 "x": "horse",
//                 "y": 180
//             },
//             {
//                 "x": "skateboard",
//                 "y": 93
//             },
//             {
//                 "x": "others",
//                 "y": 34
//             }
//         ]
//     },
//         {
//         "id": "france",
//         "color": "hsl(43, 70%, 50%)",
//         "data": [
//             {
//                 "x": "plane",
//                 "y": 25
//             },
//             {
//                 "x": "helicopter",
//                 "y": 266
//             },
//             {
//                 "x": "boat",
//                 "y": 186
//             },
//             {
//                 "x": "train",
//                 "y": 180
//             },
//             {
//                 "x": "subway",
//                 "y": 188
//             },
//             {
//                 "x": "bus",
//                 "y": 133
//             },
//             {
//                 "x": "car",
//                 "y": 195
//             },
//             {
//                 "x": "moto",
//                 "y": 75
//             },
//             {
//                 "x": "bicycle",
//                 "y": 271
//             },
//             {
//                 "x": "horse",
//                 "y": 108
//             },
//             {
//                 "x": "skateboard",
//                 "y": 178
//             },
//             {
//                 "x": "others",
//                 "y": 251
//             }
//         ]
//     }];

import { ResponsiveLine } from '@nivo/line'

const myData = [
  {
    id: 'line1',
    color: 'red',
    data: [
      { x: '2022-01-01', y: 10 },
      { x: '2022-01-02', y: 15 },
      // 其他数据点...
    ],
  },
  {
    id: 'line2',
    color: 'blue',
    data: [
      { x: '2022-01-01', y: 8 },
      { x: '2022-01-02', y: 12 },
      // 其他数据点...
    ],
  },
  // 其他线...
]
const MyResponsiveLine = ({
  data,
}: {
  data: Array<{
    id: string
    color: string
    data: Array<{
      x: string
      y: number
    }>
  }>
}) => {
  console.log(myData)
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="monotoneX"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}

export default MyResponsiveLine
