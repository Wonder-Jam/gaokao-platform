import styled from '@emotion/styled'

export const HotSpotListContainer = styled.div`
  height: 80vh;
  overflow-y: auto;
  background-color: #f5f5f5;
  border-radius: 10px;
`
export const ItemContainer = styled.div`
  cursor: pointer;
  font-weight: 500;
  padding: 0 5px;
  &:hover {
    background-color: #f0f0f0;
  }
`
export const NumberContainer = styled.span`
  width: 10%;
  padding-right: 10px;
  text-align: end;
`

export const TitleContainer = styled.span`
  width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
