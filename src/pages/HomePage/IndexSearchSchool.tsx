import React, {useEffect, useState} from 'react'
import TweenOne, {TweenOneGroup} from 'rc-tween-one'
import QueueAnim from 'rc-queue-anim'
import Icon from "antd/es/icon"

const PicDetails: React.FC = () => {
    const textData = {
        content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
            ' the motorcycle referred to in the mainland, Hong Kong and Southeast' +
            ' Asia known as motorcycles.',
        title: 'Motorcycle',
    };

    let dataArray = [
        { image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png' },
        { image: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png' },
    ];
    let newDataArray = dataArray.map(item => ({ ...item, ...textData }))
    const [picOpen, setPicOpen] = useState({})

    let onTweenEnd = (i) => {
        let tmp = {...picOpen}
        delete tmp[i]
        setPicOpen(tmp)
    };

    let onImgClick = (e, i) => {
        let tmp = {...picOpen}
        Object.keys(tmp).forEach((key) => {
            if (key !== i && tmp[key]) {
                tmp[key] = false
            }
        });
        tmp[i] = true;
        setPicOpen(tmp)
    }

    let onClose = (e, i) => {
        let tmp = {...picOpen}
        tmp[i] = false;
        setPicOpen(tmp)
    }

    let getDelay = (e) => {
        const i = e.index + dataArray.length % 4;
        return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
    }

    let getLiChildren = () => {
        const imgWidth = 110;
        const imgHeight = 76;
        const imgBoxWidth = 130;
        const imgBoxHeight = 96;
        return newDataArray.map((item, i) => {
            const {image, title, content} = item;
            const isEnter = typeof picOpen[i] === 'boolean';
            const isOpen = picOpen[i];

            const left = isEnter ? 0 : imgBoxWidth * (i % 4);
            const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
            const isRight = Math.floor((i % 4) / 2);
            const isTop = Math.floor(i / 4);
            let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
            top = isEnter ? top : imgBoxHeight * isTop;
            let imgTop = isTop ? imgBoxHeight : 0;
            imgTop = isEnter ? imgTop : 0;

            const liStyle = isEnter ? {width: '100%', height: 175, zIndex: 1} : null;
            const liAnimation = isOpen ?
                ({boxShadow: '0 2px 8px rgba(140, 140, 140, .35)'}) :
                ({boxShadow: '0 0px 0px rgba(140, 140, 140, 0)'});
            let aAnimation = isEnter ?
                ({
                    delay: 400,
                    ease: 'easeInOutCubic',
                    width: imgWidth,
                    height: imgHeight,
                    onComplete: ()=>onTweenEnd(i),
                    left: imgBoxWidth * (i % 4),
                    top: isTop ? imgBoxHeight : 0,
                }) : null;
            aAnimation = isOpen ?
                ({
                    ease: 'easeInOutCubic',
                    left: isRight ? (imgBoxWidth * 2) - 10 : 0,
                    width: '50%',
                    height: 175,
                    top: 0,
                }) : aAnimation;

            // 位置 js 控制；
            return (
                <TweenOne
                    key={i}
                    style={{
                        left,
                        top,
                        ...liStyle,
                    }}
                    component="li"
                    className={isOpen ? 'open' : ''}
                    animation={liAnimation}
                >
                    <TweenOne
                        component="a"
                        onClick={(e) => onImgClick(e, i)}
                        style={{
                            left: imgLeft,
                            top: imgTop,
                        }}
                        animation={aAnimation}
                    >
                        <img src={image} width="100%" height="100%"/>
                    </TweenOne>
                    <TweenOneGroup
                        enter={[
                            {
                                opacity: 0, duration: 0, type: 'from', delay: 400,
                            },
                            {ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%'},
                        ]}
                        leave={{ease: 'easeInOutCubic', left: isRight ? '50%' : '0%'}}
                        component=""
                    >
                        {isOpen && (
                            <div
                                className={`pic-details-demo-text-wrapper`}
                                key="text"
                                style={{
                                    left: isRight ? '0%' : '50%',
                                }}
                            >
                                <h1>{title}</h1>
                                <Icon type="cross" onClick={(e) => onClose(e, i)}/>
                                <em/>
                                <p>{content}</p>
                            </div>
                        )}
                    </TweenOneGroup>
                </TweenOne>
            );
        });
    };

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {isClient ? <div>
                <div className={`pic-details-demo-wrapper`}>
                    <div className={'pic-details-demo'}>
                        <div className={`pic-details-demo-header`}>
                            <ul>
                                <li />
                                <li />
                                <li />
                                <li />
                                <li />
                            </ul>
                        </div>
                        <QueueAnim type="bottom" className={`pic-details-demo-title`}>
                            <h1 key="h1">Motion Design</h1>
                            <p key="p">The react animation solution</p>
                        </QueueAnim>
                        <QueueAnim
                            delay={getDelay}
                            component="ul"
                            className={`pic-details-demo-image-wrapper`}
                            interval={0}
                            type="bottom"
                        >
                            {getLiChildren()}
                        </QueueAnim>
                    </div>
                </div>
            </div> : <></>}
        </>
    )
}

const IndexSearchSchool: React.FC = () => {

    return(
        <div style={{
            height: 500,
            marginTop: 100,
            display: "flex",

        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
                backgroundColor: '#f00',
                height: '100%',
                width: '40%',
                paddingLeft: 50
            }}>
                <p style={{
                    lineHeight: 1.15,
                    // color: '#000',
                    fontFamily: 'Gilroy-regular,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
                    margin: 0,
                    padding: 0,
                    fontWeight: 'bold',
                    fontSize: '25.344px',
                    letterSpacing: '.02em',
                    marginBottom: '6.72px',
                }}>查学校</p>
                <div style={{
                    lineHeight: 1.15,
                    fontFamily: 'Gilroy-regular,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
                    margin: 0,
                    padding: 0,
                    fontSize: '16.032px',
                    letterSpacing: '.02em',
                    color: '#777e87',
                }}>猜猜它们都是哪个大学的？</div>
            </div>
            <div style={{
                backgroundColor: '#0f0',
                width: '60%'
            }}>
                <PicDetails></PicDetails>
            </div>
        </div>
        )
}

export default IndexSearchSchool
