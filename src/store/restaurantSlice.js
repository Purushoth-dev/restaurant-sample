import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const url = "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant";

export const fetchData = createAsyncThunk('restaurants/fetch-data', 
async (body, thunkAPI) => {

  try {
    let response =  await axios.post(url, body);

    const {
      error,
      errorMessage,
      banners,
      listRestaurants
    } = response.data;
    
    if(error !== "false") {
      return thunkAPI.rejectWithValue(errorMessage);
    }

    return listRestaurants;
  }
  catch(error) {
    thunkAPI.rejectWithValue(error.response.data);
  }
})

export const counterSlice = createSlice({
  name: 'restaurants',
  initialState: {
    list : [],
    loading: false,
    error: null
  },
  reducers : {
    addFoodToCart: (state, action) => {

    }
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
        state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
        state.list = action.payload;
        state.loading = false
        state.error = null
    }, 
    [fetchData.rejected] :(state, action) =>{
        state.error= action.payload
        state.loading = false
        state.list=[]
    }
  }
})

// Action creators are generated for each case reducer function


export default counterSlice.reducer