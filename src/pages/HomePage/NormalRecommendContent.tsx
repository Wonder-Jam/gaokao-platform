import React from "react";
import {Button, Input, Radio, Typography} from "antd";
import {EditOutlined} from "@ant-design/icons";
import MyResponsiveLine from "@/pages/HomePage/LineChart";

const { Title } = Typography;


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

const RecommendNormalContent: React.FC = () => {

    let select1Style: React.CSSProperties={
        display: "inline-block",
    };
    let select11Style:React.CSSProperties={
        display: "inline-block",
        position: "relative",
        top: "-10px",
        left: "10px"
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
        width: "44%",
        margin: "8px",
    };
    let bottomStyle: React.CSSProperties={
        position: "relative",
        margin: '6px',
        bottom: 0,
    };
    let chartStyle: React.CSSProperties={
        height: "154px",
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
            <Title level={5} style={{margin: '6px'}}>分数</Title>
            <div>
                <span style={inputStyle}>
                    <Input prefix={<EditOutlined />} suffix="分" placeholder={"  输入分数"}/>
                </span>
                <span style={inputStyle}>
                    <Input prefix={<EditOutlined />} suffix="分" placeholder={"  输入分数"}/>
                </span>
            </div>
            <div style={chartStyle}>
                {/*<MyResponsiveLine data={myData}></MyResponsiveLine>*/}
            </div>
            <div style={bottomStyle}>
                <Button type="primary" block>
                    智能推荐大学
                </Button>
            </div>
        </>
    )
}

export default RecommendNormalContent;
