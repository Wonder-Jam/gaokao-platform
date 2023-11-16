import React from "react";
import {Button, Input, Radio, Typography} from "antd";
import {EditOutlined} from "@ant-design/icons";

const { Title } = Typography;

const RecommendNormalContent: React.FC = () => {

    let select1Style: React.CSSProperties={
        display: "inline-block",
    };
    let select11Style:React.CSSProperties={
        display: "inline-block",
    };

    let bigtitle:React.CSSProperties={
        marginBottom: "0",
        marginLeft: "8px",
        fontSize: "16px",
    }

    let subtitle:React.CSSProperties={
        margin: "0",
        fontWeight: "10px",
        fontSize: "10px",
        color: "gray"
    };
    let inputStyle: React.CSSProperties={
        display: "inline-block",
        width: "50%"
    };
    let bottomStyle: React.CSSProperties={
        position: "relative",
        bottom: 0,
    };
    let chartStyle: React.CSSProperties={
        height: "200px",
    };
    return (
        <>
            <div>
                <span style={select1Style}>
                    <p style={bigtitle}> 首选 </p>
                    <p style={subtitle}>（二选一）</p>
                </span>
                <span style={select11Style}>
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">物理</Radio.Button>
                        <Radio.Button value="b">历史</Radio.Button>
                    </Radio.Group>
                </span>
            </div>
            <div>
                <span style={select1Style}>
                    <p style={bigtitle}> 次选 </p>
                    <p style={subtitle}>（四选二）</p>
                </span>
                <span style={select11Style}>
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">化学</Radio.Button>
                        <Radio.Button value="b">生物</Radio.Button>
                        <Radio.Button value="c">政治</Radio.Button>
                        <Radio.Button value="d">地理</Radio.Button>
                    </Radio.Group>
                </span>
            </div>
            <Title level={5}>分数</Title>
            <div>
                <span style={inputStyle}>
                    <Input prefix={<EditOutlined />} suffix="分" placeholder={"  输入分数"}/>
                </span>
                <span style={inputStyle}>
                    <Input prefix={<EditOutlined />} suffix="分" placeholder={"  输入分数"}/>
                </span>
            </div>
            <div style={chartStyle}>
                <MyResponsiveLine data={myData}></MyResponsiveLine>
            </div>
            <div style={bottomStyle}>
                <Button type="primary" block>
                    智能推荐大学
                </Button>
            </div>

        </>
    )
}

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
];
const MyResponsiveLine = ({ data }:{ data:
        Array<{
            id:   string
            color: string
            data: Array<{
                x: string
                y: number
            }>
        }>
}) => {
    console.log(myData);
    return (
        <div></div>
    );
    // return (
    //     <ResponsiveLine
    //         data={data}
    //         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    //         xScale={{ type: 'point' }}
    //         yScale={{
    //             type: 'linear',
    //             min: 'auto',
    //             max: 'auto',
    //             stacked: true,
    //             reverse: false
    //         }}
    //         yFormat=" >-.2f"
    //         curve="monotoneX"
    //         axisTop={null}
    //         axisRight={null}
    //         axisBottom={{
    //             tickSize: 5,
    //             tickPadding: 5,
    //             tickRotation: 0,
    //             legend: 'transportation',
    //             legendOffset: 36,
    //             legendPosition: 'middle'
    //         }}
    //         axisLeft={{
    //             tickSize: 5,
    //             tickPadding: 5,
    //             tickRotation: 0,
    //             legend: 'count',
    //             legendOffset: -40,
    //             legendPosition: 'middle'
    //         }}
    //         enableGridX={false}
    //         enableGridY={false}
    //         pointSize={10}
    //         pointColor={{ theme: 'background' }}
    //         pointBorderWidth={2}
    //         pointBorderColor={{ from: 'serieColor' }}
    //         pointLabelYOffset={-12}
    //         useMesh={true}
    //         legends={[
    //             {
    //                 anchor: 'bottom-right',
    //                 direction: 'column',
    //                 justify: false,
    //                 translateX: 100,
    //                 translateY: 0,
    //                 itemsSpacing: 0,
    //                 itemDirection: 'left-to-right',
    //                 itemWidth: 80,
    //                 itemHeight: 20,
    //                 itemOpacity: 0.75,
    //                 symbolSize: 12,
    //                 symbolShape: 'circle',
    //                 symbolBorderColor: 'rgba(0, 0, 0, .5)',
    //                 effects: [
    //                     {
    //                         on: 'hover',
    //                         style: {
    //                             itemBackground: 'rgba(0, 0, 0, .03)',
    //                             itemOpacity: 1
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]}
    //     />
    // )
}

export default RecommendNormalContent;
