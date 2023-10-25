import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = 'https://pizza-project-backend.onrender.com'

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async() => {
    const response = await axios.get('/pizzas')
    return response.data
})

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        items: [],
        status: "idle"
    },
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state, action) => {
            state.status = 'pending'
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.items = action.payload

        },
        [fetchPizzas.rejected]: (state, action) => {
            state.status = 'rejected'
            state.items = []
        }

    }
})


export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer