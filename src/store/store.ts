import { configureStore } from '@reduxjs/toolkit'

import dataReducer from "../reducers/Data"

export const store = configureStore(

    {
        reducer: {
        dummyData: dataReducer, 
      }, 
    }
    
    )