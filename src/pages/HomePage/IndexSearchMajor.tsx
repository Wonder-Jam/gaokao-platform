import React from 'react'

const IndexSearchMajor: React.FC = () => {
    return (
        <div style={{
            height: 500,
            marginTop: 100,
            display: "flex",

        }}>
            <div style={{
                // backgroundColor: '#0f0',
                width: '60%'
            }}>

            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: '#f00',
                height: '100%',
                width: '40%',
                // paddingLeft: 50
            }}>
                <div>
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
