import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Switchtabs from '../../../components/switchTabs/Switchtabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Trending = () => {
    const [endPoint,setEndPoint] = useState("day")

    const {data,loading}= useFetch(`/trending/all/${endPoint}`)
    const onTabChange = (tab)=>{
      setEndPoint(tab === "Day" ? "day" : "week")
    }
    
  return (
    <div className='carouselSection'>
     <ContentWrapper>
        <span className="carouselTitle">
            Trending
        </span>
        <Switchtabs data={["Day","Week"]} onTabChange={onTabChange}/>
     </ContentWrapper>
     <Carousel data={data?.results} loading={loading}/>
     
    </div>
  )
}

export default Trending
