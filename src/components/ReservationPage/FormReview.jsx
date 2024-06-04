import React from 'react'

const FormReview = ({reserveSelect, reservationsDays}) => {

  return (
    <article>
      <h3>Reserve</h3>
      <section>
       <header>

          <img src={reserveSelect?.hotel.images[0].url} alt="" />
        </header>
        <h4>{reserveSelect?.hotel.name}</h4>
        <p>
          {reserveSelect?.hotel.city.name},{" "}
          {reserveSelect?.hotel.city.country}
        </p>
        <ul>
          <li>
            <span>Reservation Days</span>
            <span>{reserveSelect.reservationsDays}</span>
          </li>
          <li>
            <span>subtotal Price</span>
            <span>{reserveSelected?.subtotal}</span>
          </li>
        </ul>
        </section>
        <form>
        <label>
          <span>Rating</span>
          <select>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
          <option value="3">⭐️⭐️⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="1">⭐️</option>
          </select>
        </label>
        <label>
          <span>Comments</span>
          <textarea />
        </label>
        <button>Submit</button>
      </form>
      </article>
  )
}

export default FormReview