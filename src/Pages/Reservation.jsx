import {useEffect} from 'react'
import useCrud from '../hooks/useCrud'
import ReserverdCard from '../components/ReservationPage/ReservedCard'
import { useState } from 'react'
import FormReviews from '../ReservationPages/FormReviews'

const Reservation = () => {

     const [reserveSelect, setReserveSelect] = useState()

     const [booking, getBooking , , deleteBooking ] = useCrud()
    
    useEffect(()=>{
        const url = 'https://hotels-api.academlo.tech/bookings'
        getBooking(url)
    },[])

  return (
    <section>
      <FormReviews reserveSelect={reserveSelect} setReserveSelect={setReserveSelect} />
        <h2>Reservation</h2>
        {
            booking?.map(reserve=>(
                <ReserverdCard setReserveSelect={setReserveSelect} key={reserve.id} reserve={reserve} deleteBooking={deleteBooking}/>
            ))
        }
    </section>
  )
}

export default Reservation