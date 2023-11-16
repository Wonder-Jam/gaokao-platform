import React from "react";
import {Carousel} from "antd";

const Slider: React.FC = () => {
    let sliderSytle: React.CSSProperties = {
        margin: '10px',
        width: '70%',
        float: "left"
    };
    let contentStyle: React.CSSProperties = {
        height: '480px',
        color: '#4096ff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#e6f0fd',
    };
    return (
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
            </Carousel>
        </div>
    );
}

export default Slider;
