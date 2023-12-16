import React, {useEffect, useState} from 'react'
import {Button, Image} from "antd";
import QueueAnim from 'rc-queue-anim'
import {PauseCircleOutlined, PlayCircleOutlined} from "@ant-design/icons";



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
                width: '30%'
            }}>
                <Description indexActive={activeIndex}></Description>
            </div>

            <div style={{
                marginRight: 90,
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
            }}>
                <ProgressBar indexActive={activeIndex} onChange={()=>setActiveIndex(activeIndex==0?1:0)}></ProgressBar>
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
                        {indexActive === 0 && <QueueAnim type={["bottom", "top"]} duration={2000} key={"img0"}><div key={"img1"}><Image height={'500px'} width={'100%'} src={'https://glb.nju.edu.cn/_upload/article/images/22/93/25a086814e7ab6e9650c3af237d2/9b5c5bc5-96de-4cc2-9961-2d7cb35717ed.jpg'}></Image></div></QueueAnim>}
                        {indexActive === 1 && <QueueAnim type={["bottom", "top"]} duration={2000} key={"img1"}><div key={"img2"}><Image height={'500px'} width={'100%'} src={'https://glb.nju.edu.cn/_upload/article/images/22/93/25a086814e7ab6e9650c3af237d2/872c4a04-e69e-4974-ba0c-af3869b6858e.jpg'}></Image></div></QueueAnim>}
                    </div>
                </QueueAnim>
                : <></>}
        </>
    );
}

const ProgressBar: React.FC<{ indexActive: number, onChange: ()=>void}> = ({indexActive, onChange}) => {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [isAuto, setIsAuto] = useState(true)

    useEffect(() => {

        const intervalId = setInterval(() => {
            setProgress1(prevProgress1 => {
                if (!isAuto){
                    if (indexActive === 0){
                        return 100
                    }else{
                        return 0
                    }
                }
                if (prevProgress1 == 102){
                    onChange()
                    return 0;
                }else if (indexActive == 0){
                    return prevProgress1+2
                }else {
                    return prevProgress1
                }
            })
            setProgress2(prevProgress2 => {
                if (!isAuto){
                    if (indexActive === 1){
                        return 100
                    }else{
                        return 0
                    }
                }
                if (prevProgress2 == 102){
                    onChange()
                    return 0;
                }else if (indexActive == 1){
                    return prevProgress2+2
                }else {
                    return prevProgress2
                }
            })
        }, 80);

        return () => clearInterval(intervalId);
    }, [indexActive, isAuto]);

    return (
        <div>
            <div style={{
                backgroundColor: '#cbd2d9',
                borderRadius: 10,
                overflow: "hidden",
                height: '120px',
                width: '4px',
                marginLeft: 7,
                cursor: "pointer",
            }} onClick={()=>{
                setIsAuto(!isAuto)
            }}>
                <div style={{ width: '10px', height: `${progress1}%`, background: '#0064e0', transition: 'height 0.08s' }}></div>
            </div>
            <div style={{
                backgroundColor: '#cbd2d9',
                borderRadius: 10,
                overflow: "hidden",
                height: '120px',
                width: '4px',
                marginTop: 10,
                marginBottom: 12,
                marginLeft: 7,
                cursor: "pointer",
            }} onClick={()=>{
                setIsAuto(!isAuto)
            }}>
                <div style={{ width: '10px', height: `${progress2}%`, background: '#0064e0', transition: 'height 0.08s' }}></div>
            </div>
            <div onClick={()=>setIsAuto(!isAuto)} style={{cursor: "pointer"}}>
                {isAuto ? <PauseCircleOutlined style={{color: '#666'}} /> : <PlayCircleOutlined style={{color: '#666'}} />}
            </div>
        </div>

    )
}

const Description: React.FC<{ indexActive: number }> = ({indexActive}) => {

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div style={{
            display: 'flex',
            // flexDirection: 'column',
            // justifyContent: "center",
            alignItems: "center",
            height: '100%',
            // backgroundColor: '#0f0'
        }}>
            <div>
            {isClient ?
                <QueueAnim>
                    <div key={"img"}>
                        {indexActive === 0 &&
                            <QueueAnim type={['right', 'left']} duration={3000} key={"img1"}>
                                <div key={'1'}>
                                    <div key={'title'} style={{fontSize: 40, fontWeight: 520}}>九乡河文理学院</div>
                                    <div key={'content'} style={{fontSize: 14, marginTop: 10, marginBottom: 10}}>九乡河文理学院是一所历史悠久、声誉卓著的高等学府。</div>
                                    <div key={'button'}><Button style={{width: '102px', fontWeight: '600'}} type={"primary"} shape={"round"} size={"large"}>了解更多</Button></div>
                                </div>
                            </QueueAnim>}
                        {indexActive === 1 &&
                            <QueueAnim type={['right', 'left']} duration={3000} key={"img2"}>
                                <div key={'2'}>
                                    <div key={'title'} style={{fontSize: 40, fontWeight: 520}}>南哪儿大学</div>
                                    <div key={'content'} style={{fontSize: 14, marginTop: 10, marginBottom: 10}}>“你是在南京哪个大学？”</div>
                                    <div key={'button'}><Button style={{width: '104px', fontWeight: '600'}} type={"primary"} shape={"round"} size={"large"}>了解更多</Button></div>
                                </div>

                                {/*<div key="a">Queue Demo</div>*/}
                                {/*<div key="b">Queue Demo</div>*/}
                                {/*<div key="c">Queue Demo</div>*/}
                                {/*<div key="d">Queue Demo</div>*/}
                            </QueueAnim>}
                    </div>
                </QueueAnim>
                : <></>}
            </div>
        </div>
    )
}

export default IndexHeader
