import React, {useEffect, useState} from 'react'
import {Button, Carousel, Image} from "antd";
import QueueAnim from 'rc-queue-anim'



const IndexHeader: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            overflow: 'hidden',
            width: '100%',
            flexWrap: 'wrap',
            paddingLeft: 74,
            paddingTop: 66
        }}>
            <div style={{
                width: '40%',
                borderRadius: 30,
                overflow: 'hidden'
            }}>
                <Slider indexActive={activeIndex}></Slider>
            </div>

            <div style={{
                // backgroundColor: "#f00",
                width: '20%'
            }}>
                <Description></Description>
            </div>

            <div style={{
                marginRight: 30
            }}>
                <ProgressBar></ProgressBar>
            </div>

        </div>
    )
}

const Slider: React.FC<{ indexActive: number }> = ({indexActive}) => {

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    let contentStyle: React.CSSProperties = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <>
            {isClient ?
                <QueueAnim>
                    <div key={"img"}>
                        {indexActive === 0 && <QueueAnim type={"bottom"} key={"img0"}><div key={"img1"}><Image height={'500px'} width={'100%'} src={'https://glb.nju.edu.cn/_upload/article/images/22/93/25a086814e7ab6e9650c3af237d2/9b5c5bc5-96de-4cc2-9961-2d7cb35717ed.jpg'}></Image></div></QueueAnim>}
                        {indexActive === 1 && <QueueAnim type={"bottom"} key={"img1"}><div key={"img2"}><Image height={'500px'} width={'100%'} src={'https://glb.nju.edu.cn/_upload/article/images/22/93/25a086814e7ab6e9650c3af237d2/872c4a04-e69e-4974-ba0c-af3869b6858e.jpg'}></Image></div></QueueAnim>}
                    </div>
                </QueueAnim>
                : <></>}
        </>
    );
}

const ProgressBar: React.FC = () => {
    const [progress1, setProgress1] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress1(prevProgress1 => (prevProgress1 + 1) % 101);
        }, 40);

        // 清除定时器
        return () => clearInterval(intervalId);
    }, []); // 空数组表示只在组件挂载时运行一次

    return (
        <div>
            <div style={{
                backgroundColor: '#cbd2d9',
                borderRadius: 10,
                overflow: "hidden",
                height: '120px',
                width: '4px'
            }}>
                <div style={{ width: '10px', height: `${progress1}%`, background: '#0064e0', transition: 'height 0.04s' }}></div>
            </div>
            <div style={{
                backgroundColor: '#cbd2d9',
                borderRadius: 10,
                overflow: "hidden",
                height: '120px',
                width: '4px',
                marginTop: 10,
            }}>
                <div style={{ width: '10px', height: `${progress1}%`, background: '#0064e0', transition: 'height 0.04s' }}></div>
            </div>
        </div>

    )
}

const Description: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            height: '100%'
        }}>
            <div style={{
                fontSize: 40,
                fontWeight: 520
            }}>九乡河文理学院</div>
            <div style={{
                fontSize: 14,
                marginTop: 10,
                marginBottom: 10
            }}>九乡河文理学院是一所历史悠久、声誉卓著的高等学府。</div>
            <Button style={{width: '46%', fontWeight: '600'}} type={"primary"} shape={"round"} size={"large"}>了解更多</Button>
        </div>
    )
}

export default IndexHeader
