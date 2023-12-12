import styled from '@emotion/styled'
import { Button } from 'antd'

export const CardContainer = styled.div`
  min-width: 142px;
  max-width: 330px;
  margin: 10px;
  @media screen and (max-width: 695px) {
    width: 40%;
  }
  @media screen and (min-width: 695px) and (max-width: 1100px) {
    width: 30%;
  }
  @media screen and (min-width: 1100px) and (max-width: 1425px) {
    width: 20%;
  }
  @media screen and (min-width: 1425px) {
    width: 17%;
  }
`

export const ArticlesContainer = styled.div`
  width: 30%;
  height: 100%;
  min-width: 300px;
  overflow-y: auto;
`

export const EmptySpace = styled.div`
  height: 150px;
  width: 100%;
  background-color: #fff;
`

export const CardDetailContainer = styled.div`
  width: 75vw;
  height: 90vh;
  border-radius: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  position: relative;
`

export const InfoContainer = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  height: 150px;
  width: 30%;
  min-width: 300px;
  background-color: #fff;
  right: 0;
`

export const BadgeContainer = styled.div`
  margin-top: 10px;
`

export const WxContainer = styled.div`
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  &:active {
    background-color: #e5e5e5;
  }
`
export const SchoolInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`

export const StyledButton = styled(Button)`
  size: large;
`
