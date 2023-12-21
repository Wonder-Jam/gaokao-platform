import React from 'react'
import { Avatar, List } from 'antd'
import { VideoSchoolType, WeChatArticles } from '../../data'
import Player from 'xgplayer'

import 'xgplayer/dist/index.min.css'
import {
  CardDetailContainer,
  InfoContainer,
  BadgeContainer,
  ArticlesContainer,
  EmptySpace,
  WxContainer,
  SchoolInfoContainer,
  StyledButton,
} from './style'
export function CardDetail(props: VideoSchoolType) {
  const {
    videoUrl,
    schoolName,
    schoolSiteUrl,
    schoolRecuritmentUrl,
    schoolBdage,
    schoolCover,
  } = props
  React.useEffect(() => {
    const player = new Player({
      id: videoUrl + 'video',
      url: videoUrl,
      width: '70%',
      height: '100%',
      poster: schoolCover,
    })
    return () => {
      if (player) {
        player.destroy()
      }
    }
  }, [])
  return (
    <CardDetailContainer>
      <div id={videoUrl + 'video'}></div>
      <InfoContainer>
        <BadgeContainer>
          <img src={schoolBdage} />
        </BadgeContainer>
        <SchoolInfoContainer>
          <div style={{ color: '#0070f3' }}>{schoolName}</div>
          <StyledButton size="large" target="_blank" href={schoolSiteUrl}>
            学校官网
          </StyledButton>
          <StyledButton
            size="large"
            target="_blank"
            href={schoolRecuritmentUrl}
          >
            本科招生网
          </StyledButton>
        </SchoolInfoContainer>
      </InfoContainer>
      <ArticlesContainer>
        <EmptySpace></EmptySpace>
        <List
          itemLayout="horizontal"
          dataSource={WeChatArticles}
          renderItem={(item, index) => (
            <WxContainer
              onClick={() => window.open(item.destinationLink, '_blank')}
            >
              <List.Item>
                <Avatar
                  shape="square"
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  src={item.image}
                  style={{ marginRight: '5px' }}
                />
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            </WxContainer>
          )}
        />
      </ArticlesContainer>
    </CardDetailContainer>
  )
}
