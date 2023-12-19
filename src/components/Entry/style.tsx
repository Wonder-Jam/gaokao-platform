import styled from '@emotion/styled'
export const HeaderContainer = styled.div`
  display: flex;
  z-index: 99;
  width: 100%;
  height: 8%;
  background-color: #fff;
  transition: all .3s;
  // align-items: center;
  // justify-content: space-between;
  flex-direction: row;
  position: fixed;
`
export const MainContainer = styled.div`
  // padding-top: 146px;
  height: 100%;
  overflow-y: scroll;
  overscroll-behavior: auto;
`

export const HeaderBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const ImageContainer = styled.span`
  cursor: pointer;
  display: flex;
  // width: 169px;
  margin-right: 10px;
  margin-left: 10px;
  // margin-top: 16px;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 16px;
`
