import React from 'react'

const ReservedCard = ({reserve,setReserveSelect,deleteBooking}) => {
  
  const checkIn = new Date(reserve.checkIn)
  const checkOut = new Date(reserve.checkOut)

  const reservationsDay = (checkOut - checkIn) / (1000 * 60 * 60 *24)

   const handleReview =()=>{
      const obj = {
        ...reserve,
        reservationsDay,
        subtotal: reserve.hotel.price * reservationsDay
      }
      setReserveSelect(obj)
   }
  
   const handleDeleteBooking =()=>{
    const url = `https://hotels-api.academlo.tech/bookings/${reserve.id}`
    deleteBooking(url, reserve.id)
   }

  return (
    <article>
       <header>
        <img src={reserve.hotel.images[0].url} alt="" />
       </header>
       <section>
        <h3>{reserve.hotel.name}</h3>
        <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div onClick={handleReview}>Rate and comment this visit....</div>
       </section>
       <ul>
        <li><span>Reservations Day </span><span> {reservationsDay}</span></li>
        <li><span>Subtotal Price</span><span>  {reserve.hotel.price * reservationsDay} USD</span></li>
       </ul>
       <footer>
        <button onClick={handleDeleteBooking}><i className='bx bx-trash'></i></button>
       </footer>
    </article>
  )
}

export default ReservedCard