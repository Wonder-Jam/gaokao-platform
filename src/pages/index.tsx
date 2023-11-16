import React from 'react'
import Entry from '../components/Entry'
import Slider from "@/pages/HomePage/Slider";
import SmartRecommend from "@/pages/HomePage/SmartRecommend";

export default function Home() {
    return (
        <>
            <Entry>
                <div className={"headerContainer"}>
                    <Slider></Slider>
                    <SmartRecommend></SmartRecommend>
                </div>

            </Entry>
        </>
    )
}




