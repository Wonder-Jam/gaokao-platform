import React from 'react'

const IndexVideoPlay: React.FC = () => {
  return (
    <div
      style={{
        width: 1280,
        height: 500,
        margin: '0px auto',
        marginBottom: '100px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: "center",
          // backgroundColor: '#f00',
          height: '20%',
          width: '83%',
          margin: '0 auto',
          marginTop: '40px',
          marginBottom: '14px',
          // paddingLeft: 50
        }}
      >
        <div style={{}}>
          <p
            style={{
              lineHeight: 1.15,
              // color: '#000',
              fontFamily:
                'Gilroy-regular,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
              margin: 0,
              padding: 0,
              fontWeight: 'bold',
              fontSize: '38px',
              letterSpacing: '.02em',
              marginBottom: '10px',
            }}
          >
            看一看
          </p>
          <div
            style={{
              lineHeight: 1.15,
              fontFamily:
                'Gilroy-regular,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
              margin: 0,
              padding: 0,
              fontSize: '20px',
              letterSpacing: '.02em',
              color: '#777e87',
            }}
          >
            嚼得菜根，做得大事
          </div>
        </div>
      </div>

      <div
        style={{
          // backgroundColor: '#0f0',
          height: '69%',
          width: '84%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          className={'video-1'}
          style={{
            position: 'relative',
            backgroundColor: '#efefef',
            overflow: 'hidden',
            width: '38%',
            borderRadius: '20px',
          }}
        >
          <video autoPlay loop muted height={'100%'}>
            <source src="/love.mp4" type="video/mp4" />
            Net error
          </video>
        </div>
        <div
          className={'video-2'}
          style={{
            position: 'relative',
            backgroundColor: '#efefef',
            overflow: 'hidden',
            width: '24%',
            borderRadius: '20px',
          }}
        >
          <video
            autoPlay
            loop
            muted
            width={'100%'}
            style={{ position: 'absolute', top: '-54px' }}
          >
            <source src="/cat.mp4" type="video/mp4" />
            Net error
          </video>
        </div>
        <div
          className={'video-group'}
          style={{
            width: '35%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              position: 'relative',
              backgroundColor: '#efefef',
              overflow: 'hidden',
              height: '48%',
              borderRadius: '20px',
            }}
          >
            <video
              autoPlay
              loop
              muted
              width={'104%'}
              style={{ position: 'absolute', top: '-26px' }}
            >
              <source src="/xjy.mp4" type="video/mp4" />
              Net error
            </video>
          </div>
          <div
            style={{
              position: 'relative',
              backgroundColor: '#efefef',
              overflow: 'hidden',
              height: '48%',
              borderRadius: '20px',
            }}
          >
            <video
              autoPlay
              loop
              muted
              width={'104%'}
              style={{ position: 'absolute', top: '-26px' }}
            >
              <source src="/quick.mp4" type="video/mp4" />
              Net error
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexVideoPlay
