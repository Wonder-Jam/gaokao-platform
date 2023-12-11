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

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* 设置容器的弹性换行为换行，让卡片在一行放不下时自动换行 */
  flex-wrap: wrap;
  /* 设置容器的对齐方式为居中，让卡片在容器内居中显示 */
  align-items: center;
  padding: 24px 0 24px 24px;
  overflow-y: auto;
`

export const ArrowLeftContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 24px;
  top: 24px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 10;
  box-shadow:
    0 2px 8px 0 rgba(0, 0, 0, 0.04),
    0 1px 2px 0 rgba(0, 0, 0, 0.02);
  &:hover {
    background-color: #f7f7f7;
  }
`

export const UpAndDownContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 8px;
  transform: translatex(-50%);
  height: 88px;
  width: 44px;
  background-color: #bfbfbf;
  z-index: 101;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background-color: #d9d9d9;
    cursor: pointer;
  }
`

export const WxContainer = styled.div`
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  &:active {
    background-color: #e5e5e5;
  }
`

export const RightBarContainer = styled.div<{ show: boolean }>`
  height: 100%;
  width: 300px;
  padding: 10px;
  /* background-color: #fafafa; */
  transform: translateX(${({ show }) => (show ? 0 : '100%')});
  transition: all 0.3s;
`

export const TabContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const ToggleContainer = styled.div<{ show: boolean }>`
  position: fixed;
  top: 50%;
  right: 300px;
  transform: translateY(-50%)
    translateX(${({ show }) => (show ? '0' : '300px')});
  transition: all 0.3s;
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

export const SchoolInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`

export const StyledButton = styled(Button)`
  size: large;
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
