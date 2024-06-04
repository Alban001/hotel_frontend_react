import React from 'react'
import {useForm} from 'react-hook-form'
import useCrud from '../hooks/useCrud'


const FormReviews = ({reserveSelect,setReserveSelect}) => {
    console.log(reserveSelect)
    const {handleSubmit , reset, register } = useForm()

    const [,,createReview] = useCrud()

    const submit = data =>{
        const url = 'https://hotels-api.academlo.tech/reviews'
        data.hotelId = reserveSelect?.hotel.id
        data.rating = +data.rating
        createReview(url, data)
        setReserveSelect('')
    }

  return (
    <article>   
        <h3>Reserve</h3>
        <section>
            <header>
                <img src={reserveSelect?.hotel.images[0].url} alt="reservation hotel" />
            </header>
           
            <h4>{reserveSelect?.hotel.name}</h4>

            <p>
                {reserveSelect?.hotel.city.name} , {""} 
                {reserveSelect?.hotel.city.country}
            </p>
            <ul>
                <li><span>Reservations days : </span><span>{reserveSelect?.reservationsDays}</span></li>
                <li><span>Subtotal Price : </span><span>{reserveSelect?.subtotal}</span></li>
            </ul>
        </section>
        <form onSubmit={handleSubmit(submit)}>
            <label>
                <span>Rating</span>
                <select {...register('rating')}>
                    <option value="5">&#8902;&#8902;&#8902;&#8902;&#8902;</option>
                    <option value="4">&#8902;&#8902;&#8902;&#8902;</option>
                    <option value="3">&#8902;&#8902;&#8902;</option>
                    <option value="2">&#8902;&#8902;</option>
                    <option value="1">&#8902;</option>
                </select>
               
            </label>
            <label >
                <span>Comments</span>
                <textarea {...register('comment')}/>
            </label>
            <button>Submit</button>
        </form>
    </article>
  )
}

export default FormReviews