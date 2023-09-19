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
  box-shadow:
    0 2px 8px 0 rgba(0, 0, 0, 0.04),
    0 1px 2px 0 rgba(0, 0, 0, 0.02);
  &:hover {
    background-color: #f7f7f7;
  }
`
