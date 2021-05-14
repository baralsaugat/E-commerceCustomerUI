import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    status: "",
    message: "",
    categoryList: []
}


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers:{
        fetchAllCategorySuccess: (state, {payload}) =>{
            state.categoryList = payload.result
        }
    }
})


const {reducer, actions} = categorySlice;


export const {fetchAllCategorySuccess} = actions

export default reducer
