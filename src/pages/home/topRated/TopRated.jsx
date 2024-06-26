import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Switchtabs from '../../../components/switchTabs/Switchtabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const TopRated = () => {
    const [endPoint,setEndPoint] = useState("movie")

    const {data,loading}= useFetch(`/${endPoint}/top_rated`)
    const onTabChange = (tab)=>{
      setEndPoint(tab === "Movies" ? "movie" : "tv")
    }
    
  return (
    <div className='carouselSection'>
     <ContentWrapper>
        <span className="carouselTitle">
            Top Rated
        </span>
        <Switchtabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
     </ContentWrapper>
     <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
     
    </div>
  )
}

export default TopRated
