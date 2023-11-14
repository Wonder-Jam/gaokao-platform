import styled from '@emotion/styled'

export const ListContainer = styled.div`
  width: 100%;
  // border: '1px solid #ccc';
  padding: 0px;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap; // 允许多个省份在同一行显示，并换行
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
`

export const ListItem = styled.li`
  cursor: pointer;
  margin-left: 5px;
`
export const SelectedItem = styled.li`
  backgroundcolor: '#eee';
`
