import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const storeSlice = createSlice({
    name: 'hotels',
    initialState: null,
    reducers: {
        setHotels: (state, action)=> action.payload
    }
})

export const { setHotels } = storeSlice.actions;

export default storeSlice.reducer;

export const getReducerThunk = url => (dispatch)=>{

    axios.get(url)
    .then(res => dispatch(setHotels(res.data)))
    .catch(err => console.log(err))
}
