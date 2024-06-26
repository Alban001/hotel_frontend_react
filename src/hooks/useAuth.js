
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const useAuth = () => {
 
    const navigate = useNavigate()
     // Register

    const registerUser =(data)=>{
        const url = 'https://hotels-api.academlo.tech/users'
        axios.post(url, data)
        .then(res => console.log(res.data),
        navigate('/login')
    )
        .catch(err => console.log(err))
    }

    // Login

    const userLogin =(data)=>{
        const url = 'https://hotels-api.academlo.tech/users/login'
        axios.post(url, data)
        .then(res =>{
            console.log(res.data),
             localStorage.setItem('token', res.data.token), 
             localStorage.setItem('user', JSON.stringify(res.data.user)),
             navigate('/')
        })

        .catch(err => console.log(err),
         localStorage.removeItem('token'),
         localStorage.removeItem('user')
    )
    }
    return {registerUser, userLogin }
}

export default useAuth