import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import HotelsIdPage from './Pages/HotelsIdPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage  from './Pages/RegisterPage'
import { useEffect } from 'react'
import {getReducerThunk} from './ReduxStore/store.slice'
import { useDispatch, useSelector } from 'react-redux'
import PrincipalHeader from './components/Shared/PrincipalHeader'
import Reservation from './Pages/Reservation'
import ProtectdRoutes from './Pages/ProtectdRoutes'

function App() {
  
  const hotels = useSelector(state => state.hotels)

  const dispatch= useDispatch()

   useEffect(()=> {
    const url='https://hotels-api.academlo.tech/hotels'
    dispatch(getReducerThunk(url))
   },[])
  
  return (
    <div>
      <PrincipalHeader />
      <Routes>
          <Route path='/' element={ <HomePage />}/>
          <Route path='/hotels/:id' element={ <HotelsIdPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={ <LoginPage />}/>

          <Route element={<ProtectdRoutes />}>
              <Route path='/reservations' element={<Reservation />}/>
          </Route>
          
      </Routes>
    </div>
  )
}

export default App
