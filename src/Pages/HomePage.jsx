import React, { useRef, useState } from 'react'
import {  useSelector } from 'react-redux'
import HotelCard from '../components/HomePage/HotelCard'
import CategoryFilter from '../components/HomePage/CategoryFilter'
import PriceFilt from '../components/HomePage/PriceFilt'




const HomePage = () => {

  const hotels = useSelector(state => state.hotels)

  const [inputName, setinputName] = useState('')

  const [fromTo, setFromto ]= useState({
    from: 0,
    to: Infinity
  })

  const inputValue = useRef()

  const handleChange =()=>{

      setinputName(inputValue.current.value)
  }
  const SearchFilter =item =>{

    // Filter by name

      const filterName = item.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim())

      // Filter by price

      const price = +item.price
      const filterPrice = price >= fromTo.from && price <= fromTo.to

      return filterName && filterPrice
  }

  return (
    <article>
      <div>
        <input onChange={handleChange} value={inputName} ref={inputValue} type='text'/>
      </div>
      <aside>
        <h3>Filter</h3>
        <CategoryFilter />
        <PriceFilt setFromto={setFromto} />
      </aside>
      <div>
      {
        hotels?.filter(SearchFilter).map(item=>(
          <HotelCard 
           key={item.id}
           hotel={item}
          />
        ))
      }
      </div>
      
    </article>
  )
}

export default HomePage