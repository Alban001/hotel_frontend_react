import getConfigThoken from '../utils/getConfigThoken'
import { useState } from 'react'
import axios from 'axios';

const useCrud = () => {

    const [response, setResponse] = useState()

    // GET 

    const getApi = url =>{
        axios.get(url, getConfigThoken())
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }


    // CREATE 
    const createApi =(url, data)=>{
        axios.post(url, data ,getConfigThoken())
        .then(res => {
            console.log(res.data)
            setResponse(response ? [...response, res.data] : [res.data])
        })
        .catch(err => console.log(err))
    }

    // DELETE

    const deleteApi =(url,id)=>{
        axios.delete(url,getConfigThoken())
        .then(res => {
            console.log(res.data)
            setResponse(response.filter(e => e.id !== id))
        })
        .catch(err => console.log(err))
    }

    // UPDATE  
    
    const updateApi =(url,data,id)=>{
        axios.put(url, data ,getConfigThoken())
        .then(res => {
            console.log(res.data)
            setResponse(response.map(e=> e.id === id ? res.data : e))
        })
        .catch(err => console.log(err))
    }
    


  return [response, getApi, createApi, deleteApi,updateApi]
}

export default useCrud