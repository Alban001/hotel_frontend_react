import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import {Map, Marker} from 'pigeon-maps'
import OtherHotels from './OtherHotels'
import FormReserve from './FormReserve'

const HotelsIdPage = () => {

  const hotels= useSelector(state=> state.hotels)

  const {id} = useParams()
  const url = `https://hotels-api.academlo.tech/hotels/${id}`

  const [hotelDetail, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel(`/hotels/${id}`)
  }, [id])
  

  return (
    <article>
      <h1>{hotelDetail?.name}</h1>
      <div className='slider'>
          <img src={hotelDetail?.images[0].url} alt="" />
          {
            hotelDetail && 
            <Map height={200} center={[+hotelDetail?.lat, +hotelDetail?.lon]} zoom={15}>
                <Marker anchor={[+hotelDetail?.lat, +hotelDetail?.lon]}  color='blueviolet'/>
            </Map>
          } 
      </div>
      <section>
        <h3>{hotelDetail?.city.name}, {hotelDetail?.city.country}</h3>
        <p>
        <i className='bx bx-map'></i>
        <span>{hotelDetail?.address}</span>
        </p>
        <p>
          {hotelDetail?.description}
        </p>
      </section>
      {
        localStorage.getItem('token')
        ? <FormReserve hotelId={hotelDetail?.id} />
        :
        <h4> To make a reservation, please <Link to='/login'>Login</Link> </h4>
      }
   
      <OtherHotels  hotel={hotelDetail}/>
    </article>
  )
}

export default HotelsIdPage