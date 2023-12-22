import React from 'react'
import { ActiveDraggableContext } from '@dnd-kit/core/dist/components/DndContext'

const Intro: React.FC = () => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        // backgroundColor: '#efefef',
        width: '1280px',
        margin: '200px auto 230px',
      }}
    >
      <div
        style={{
          // margin: '0 auto',
          width: '100%',
          fontSize: 40,
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        Go School
      </div>

      <div
        style={{
          margin: '0 auto',
          width: '100%',
          maxWidth: '1400px',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              paddingTop: 30,
              width: '56%',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 500,
              lineHeight: '120%',
              margin: 0,
              fontSize: '24px',
              letterSpacing: '.06em',
              textAlign: 'center',
            }}
          >
            {/*GoSchool provides high school graduates with a search function for*/}
            {/*universities and their majors <br />across China, as well as <br/>a style*/}
            {/*display.*/}
            GoSchool 平台提供便利的大学及专业信息检索功能
            <br />
            若你在面对众多选择时仍暂无头绪
            <br />
            不妨去“看一看”吧！
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Intro
