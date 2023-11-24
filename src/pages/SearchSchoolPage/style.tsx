import styled from '@emotion/styled'

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
`

export const Layer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
`

export const CardListContainer = styled.div`
  width: 30%;
  height: 100%;
  overflow-y: auto;
  background-color: #f5f5f5;
  // margin-left: 5px;
`
