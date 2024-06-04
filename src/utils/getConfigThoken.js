const getConfigThoken =()=>{

    return {
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}
export default getConfigThoken