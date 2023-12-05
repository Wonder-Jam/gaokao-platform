import React from 'react'
import { ActiveDraggableContext } from '@dnd-kit/core/dist/components/DndContext'

const Intro: React.FC = () => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        marginTop: 100,
        marginBottom: 100,
      }}
    >
      <div
        style={{
          boxSizing: 'border-box',
          width: '100%',
          paddingTop: '64px',
        }}
      ></div>
      <div
        style={{
          margin: '0 auto',
          width: '100%',
          fontSize: 30,
          fontWeight: 700,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        Go School
      </div>
      <div
        style={{
          boxSizing: 'border-box',
          margin: '0 auto',
          width: '100%',
          maxWidth: '1349px',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            width: '91%',
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            paddingLeft: '32px',
          }}
        >
          <h1
            style={{
              direction: 'ltr',
              paddingTop: 30,
              paddingLeft: 30,
              width: '56%',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 'normal',
              lineHeight: '120%',
              margin: 0,
              textRendering: 'optimizeLegibility',
              color: '#1c2b33',
              fontSize: '24px',
              letterSpacing: '.005em',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            GoSchool provides high school graduates with a search function for
            universities and their majors across China, as well as a style
            display.
          </h1>
        </div>
      </div>
      <div
        style={{
          boxSizing: 'border-box',
          width: '100%',
          paddingTop: '80px',
        }}
      ></div>
    </div>
  )
}

export default Intro
