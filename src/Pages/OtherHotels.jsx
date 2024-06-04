import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import HotelCard from '../components/HomePage/HotelCard'

const OtherHotels = ({hotel}) => {
   
    const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`

    const [hotelsInCity, getOtherHotels] = useFetch(url)

    useEffect(()=>{
        if(hotel){
            getOtherHotels()
        }
    },[hotel])

  return (
    <section>
   
        <h3>Others hotels in : <span>{hotel?.city.name}</span></h3>
        <div>
        {
            hotelsInCity?.filter(filt=> filt.id !== hotel?.id).map( item=>(
                <HotelCard key={item.id} hotel={item}/>
            ))
        }
    </div>
    </section>    
   
  )
}

export default OtherHotels