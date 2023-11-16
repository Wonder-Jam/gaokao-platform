import React, {useState} from "react";
import {Radio, RadioChangeEvent} from "antd";
import RecommendArtContent from "@/pages/HomePage/ArtRecommendContent";
import RecommendNormalContent from "@/pages/HomePage/NormalRecommendContent";

const SmartRecommend: React.FC = () => {
    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    let cardStyle: React.CSSProperties = {
        marginRight: '20px',
        marginBottom: '20px',
        marginTop: '20px',
        width: '23%',
        height: "486px",
        float: "left"
    }
    let cardHeadtitleName: React.CSSProperties = {
        fontSize: "14px",
        fontWeight: "bold",
        width: "40%",
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

export default SmartRecommend;
