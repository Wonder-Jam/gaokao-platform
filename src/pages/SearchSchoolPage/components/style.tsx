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
  margin-right: 5px;
`
export const SelectedItem = styled.li`
  backgroundcolor: '#eee';
`

export const UniversityItem = styled.li`
  display: flex;
  padding: 0px;
  flex-direction: column;
  font-family: PingFangSC-Regular, sans-serif;
`

export const DetailBackgroundContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #ffffff;
  background-image:url(https://files.lsmcloud.top/blogdce2e342063735250399b454065cab94.jpg);
  background-size: cover;
`

export const Mask = styled.div`
  height:100%;
  width:100%;
  background: rgba(255,255,255,.7);
`
