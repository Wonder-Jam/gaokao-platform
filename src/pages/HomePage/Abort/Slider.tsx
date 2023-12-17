import React from 'react'
import { Carousel, Image } from 'antd'

const Slider: React.FC = () => {
  let sliderSytle: React.CSSProperties = {
    width: '46%',
    display: 'inline-block',
    marginTop: '8px',
  }
  let contentStyle: React.CSSProperties = {
    height: '440px',
    width: '100%',
    color: '#4096ff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#e6f0fd',
  }
  return (
    <div style={sliderSytle}>
      <Carousel autoplay>
        <div>
          <Image
            height={'440px'}
            width={'100%'}
            src={
              'https://glb.nju.edu.cn/_upload/article/images/22/93/25a086814e7ab6e9650c3af237d2/9b5c5bc5-96de-4cc2-9961-2d7cb35717ed.jpg'
            }
          ></Image>
        </div>
        <div>
          <Image
            height={'440px'}
            width={'100%'}
            src={
              'https://glb.nju.edu.cn/_upload/article/images/22/93/25a086814e7ab6e9650c3af237d2/872c4a04-e69e-4974-ba0c-af3869b6858e.jpg'
            }
          ></Image>
        </div>
        <div>
          <Image
            height={'440px'}
            width={'100%'}
            src={
              'https://glb.nju.edu.cn/_upload/article/images/22/93/25a086814e7ab6e9650c3af237d2/f677570a-a0a0-4ba8-920a-5f6b479c4201.jpg'
            }
          ></Image>
        </div>
      </Carousel>
    </div>
  )
}

export default Slider
