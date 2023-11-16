import React, { createContext, useState, useEffect } from 'react';
import Entry from '@/components/Entry';
import EchartsMap from './components/EchartsMap';
import FilterMenu from './components/FilterMenu';
import UniversityList from './components/UniversityList';
import { MapContainer, Layer, CardListContainer } from './style';
import * as Enum from './enum';

export const SearchContext = createContext<{
  province: Enum.province;
  city: Enum.city;
  rank: Enum.rank;
  setChoices: React.Dispatch<React.SetStateAction<{
    province: Enum.province;
    city: Enum.city;
    rank: Enum.rank;
  }>>;
}>({
  province: Enum.province.None,
  city: Enum.city.None,
  rank: Enum.rank.None,
  setChoices: () => {}, // 初始值可以是一个空函数，不过在使用时会被替换
});


export default function SearchSchoolPage() {
  const [choices, setChoices] = useState({
    province: Enum.province.None,
    city: Enum.city.None,
    rank: Enum.rank.None,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(choices); // 这里改为输出 choices，因为 SearchContext 是 Provider，而不是具体的值
    }, 3000); // 3000ms = 3秒，你可以根据需要修改时间间隔

    return () => {
      clearInterval(intervalId); // 在组件卸载时清除定时器
    };
  }, [choices]);

  return (
    <SearchContext.Provider value={{ ...choices, setChoices }}>
      <>
        <Entry> </Entry>
        <Layer>
          <FilterMenu />
          <MapContainer>
            <EchartsMap />
          </MapContainer>
          <CardListContainer>
            <UniversityList />
          </CardListContainer>
        </Layer>
      </>
    </SearchContext.Provider>
  );
}
