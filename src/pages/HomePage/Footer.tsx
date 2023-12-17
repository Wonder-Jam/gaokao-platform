import React from 'react'
import { GithubFilled } from '@ant-design/icons'

const Footer: React.FC = () => {
  return (
    <div
      style={{
        height: '80px',
        backgroundColor: '#f0f3fa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          opacity: '0.4',
          colorScheme: 'light',
          lineHeight: '26px',
          fontSize: '10px',
        }}
      >
        Made with <span style={{ color: '#fff' }}>&#129505;</span> for
      </div>
      <div
        style={{
          fontSize: '12px',
          opacity: '0.7',
        }}
      >
        南软人机交互系统大作业
      </div>
    </div>
  )
}

export default Footer
