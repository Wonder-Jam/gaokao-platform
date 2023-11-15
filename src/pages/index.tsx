import React, {useState} from 'react'
import Entry from '../components/Entry'
import {Carousel, Input, Radio, Button, RadioChangeEvent} from 'antd';
import { Typography } from 'antd';
import {EditOutlined} from "@ant-design/icons";


const { Title } = Typography;

export default function Home() {
    let demoStyle : React.CSSProperties={
        height:"300px",
        width:"500px",
    };
    return (
        <>
            <Entry>
                <div className={"headerContainer"}>
                    <Slider></Slider>
                    <SmartRecommend></SmartRecommend>

                </div>
            </Entry>
        </>
    )
}

const contentStyle: React.CSSProperties = {
    height: '480px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const cardStyle: React.CSSProperties = {
    marginRight: '20px',
    marginBottom: '20px',
    marginTop: '20px',
    width: '20%',
    height: "486px",
    float: "left"
}

const sliderSytle: React.CSSProperties = {
    margin: '10px',
    width: '70%',
    float: "left"
}

const Slider: React.FC = () => (
    <div style={sliderSytle}>
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    </div>
);
const SmartRecommend: React.FC = () => {
    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    let cardHeadtitleName: React.CSSProperties = {
        fontSize: "14px",
        fontWeight: "bold",
        width: "40%"
    };
    let cardHeadtitleCheckboox: React.CSSProperties = {
        float: "right"
    };
    return (
        <div style={cardStyle}>
            <div className={"header-title"}>
                <span className={"header-title-name"} style={cardHeadtitleName}>模拟报志愿</span>
                <span className={"header-title-checkbox"} style = {cardHeadtitleCheckboox}>
                        <Radio.Group onChange={onChange} value={value}>
                              <Radio value={1}>普通类</Radio>
                              <Radio value={2}>艺术类</Radio>
                        </Radio.Group>
                </span>
            </div>
            <div className={"header-body"}>
                {value == 1 ? (
                    <RecommendNormalContent></RecommendNormalContent>
                ):(
                    <RecommendArtContent></RecommendArtContent>
                )}
            </div>
        </div>
    )
}

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
            <div style={bottomStyle}>
                <Button type="primary" block>
                    Primary
                </Button>
            </div>

        </>
    )
}

const RecommendArtContent: React.FC = () => {

    return (
        <></>
    )
}
