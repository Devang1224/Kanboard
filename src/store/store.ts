import { configureStore } from '@reduxjs/toolkit'

import dataReducer from "../reducers/Data"
import filterReducer from "../reducers/Filters"

export const store = configureStore(

    {
        reducer: {
        dummyData: dataReducer, 
        filterReducer
      }, 
    }
    
    )

 export type RootState = ReturnType<typeof store.getState>;