import styled from '@emotion/styled'
export const CardContainer = styled.div<{
  isShown: boolean
}>`
  color: ${({ isShown }) => (isShown ? 'red' : 'green')};
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
`

export const ArrowLeftContainer = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 40px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 24px;
    top: 24px;
`
