import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth'
import UserLogged from '../components/LoginPage/UserLogged';

const LoginPage = () => {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))
  const {register , handleSubmit , reset} = useForm();

  const {userLogin} = useAuth() 

 
const submit =data=>{

  userLogin(data)
  reset({
    email: '',
    password: ' ',
  })
}


   if(localStorage.getItem('token')){
      return (
        <UserLogged setuser={setuser} user={user} />
      )
   }

  return (
    <div>

      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label>
          <span >Password</span>
          <input {...register('password')} type="password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage