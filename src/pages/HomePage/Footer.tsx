import React from 'react'
import styled from '@emotion/styled'
import { Image, Typography } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
export const Member = styled.span`
  font-size: 14px;
  margin-top: 5px;
  color: #434343;
`
export const Title = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 500;
`
const Footer: React.FC = () => {
  return (
    <div
      style={{
        // height: '150px',
        backgroundColor: '#f0f3fa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          padding: '25px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
          }}
        >
          <Title>参考资料</Title>
          <div>
            <Member>设计参考：</Member>
            <Typography.Link
              target="_blank"
              href="https://ant.design/docs/spec/introduce-cn"
            >
              <Image
                style={{
                  marginTop: '2px',
                }}
                width={'16px'}
                height={'16px'}
                preview={false}
                src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
              />
              Ant Design 设计
            </Typography.Link>
            {/* &nbsp;
            <Typography.Link
              target="_blank"
              href="https://medium.com/as-a-product-designer/%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E4%B8%AD%E9%A0%81%E8%85%B3-footer-%E7%9A%84%E8%A8%AD%E8%A8%88%E8%A7%80%E9%BB%9E-a1d25657bdc4"
            >
                            <Image
                style={{
                  marginTop: '2px',
                }}
                width={'16px'}
                height={'16px'}
                preview={false}
                src="https://miro.medium.com/v2/1*m-R_BkNf1Qjr1YbyOIJY2w.png"
              />
              网页设计中页脚 Footer 的设计观念
            </Typography.Link> */}
          </div>
          <div>
            <Member>网站部署支持：</Member>
            <Typography.Link target="_blank" href="https://vercel.com/">
              <Image
                style={{
                  marginTop: '2px',
                }}
                width={'16px'}
                height={'16px'}
                preview={false}
                src="https://assets.vercel.com/image/upload/front/favicon/vercel/32x32.png"
              />
              Vercel
            </Typography.Link>
          </div>
          <div>
            <Member>云数据库支持：</Member>
            <Typography.Link target="_blank" href="https://www.mongodb.com">
              <Image
                style={{
                  marginTop: '2px',
                }}
                width={'16px'}
                height={'16px'}
                preview={false}
                src="https://www.mongodb.com/assets/images/global/favicon.ico"
              />
              MongoDB
            </Typography.Link>
          </div>
          <div>
            <Member>图床支持：</Member>
            <Typography.Link target="_blank" href="https://www.backblaze.com">
              <Image
                style={{
                  marginTop: '2px',
                }}
                width={'16px'}
                height={'16px'}
                preview={false}
                src="https://assets-global.website-files.com/63d32de856f6323a43a277f2/64b1ab4daf31e414a481b056_Webclip.png"
              />
              Backblaze
            </Typography.Link>
            &nbsp;
          </div>
          <div>
            <Member>CDN支持：</Member>
            <Typography.Link target="_blank" href="https://www.cloudflare.com">
              <Image
                style={{
                  marginTop: '2px',
                }}
                width={'16px'}
                height={'16px'}
                preview={false}
                src="https://www.cloudflare.com/favicon.ico"
              />
              Cloudflare
            </Typography.Link>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            alignItems: 'center',
          }}
        >
          <Title>参与人员</Title>
          <Member>邹丁&nbsp;&nbsp;&nbsp;&nbsp;211250164</Member>
          <Member>刘尧力 211250165</Member>
          <Member>焦豪捷 211250144</Member>
          <Member>张靖琦 211250131</Member>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
          }}
        >
          <Title>帮助</Title>
          <div>
            <Typography.Link
              target="_blank"
              href="https://github.com/AustynDing/GoSchool"
            >
              <Image
                style={{
                  marginTop: '2px',
                }}
                width={'16px'}
                height={'16px'}
                preview={false}
                src="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg"
              />
              github
            </Typography.Link>
          </div>
          <div>
            <Typography.Link
              target="_blank"
              href="https://github.com/AustynDing/GoSchool/issues"
            >
              <QuestionCircleOutlined style={{ color: 'color: #434343 ' }} />
              问题反馈
            </Typography.Link>
          </div>
        </div>
      </section>
      {/* <span
        style={{
          textAlign: 'center',
          opacity: '0.4',
          colorScheme: 'light',
          lineHeight: '28px',
          fontSize: '13px',
        }}
      >
        Made with <span style={{ color: '#fff' }}>&#129505;</span> for
      </span>
      <span
        style={{
          fontSize: '14px',
          opacity: '0.7',
          marginBottom: '15px',
        }}
      >
        南软人机交互系统大作业
      </span> */}
    </div>
  )
}

export default Footer
