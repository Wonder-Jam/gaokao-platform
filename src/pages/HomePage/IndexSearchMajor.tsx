import React from 'react'

const IndexSearchMajor: React.FC = () => {
    return (
        <div style={{
            height: 500,
            marginTop: 200,
            display: "flex",

        }}>
            <div style={{
                // backgroundColor: '#0f0',
                width: '55%',
                marginLeft: '30px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{height: '60%', width: '70%', backgroundColor: '#efefef', borderRadius: '24px'}}>
                    <img src={'/images/major1.jpg'}/>
                </div>

            </div>

            <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: '#f00',
                height: '100%',
                width: '45%',
                // paddingLeft: 50
            }}>
                <div style={{position: "absolute", left: '10px', marginLeft: '30px'}}>
                    <p style={{
                        lineHeight: 1.15,
                        // color: '#000',
                        fontFamily: 'Gilroy-regular,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
                        margin: 0,
                        padding: 0,
                        fontWeight: 'bold',
                        fontSize: '38px',
                        letterSpacing: '.02em',
                        marginBottom: '10px',
                    }}>查专业</p>
                    <div style={{
                        lineHeight: 1.15,
                        fontFamily: 'Gilroy-regular,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
                        margin: 0,
                        padding: 0,
                        fontSize: '20px',
                        letterSpacing: '.02em',
                        color: '#777e87',
                    }}>喜欢土木工程怎么办？稳啦！</div>
                </div>
            </div>

        </div>
    )
}

export default IndexSearchMajor
