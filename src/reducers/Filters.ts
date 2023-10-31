import { createSlice } from "@reduxjs/toolkit";



const filters = {
    search:"",
    priority:"",
    date:{
      from:"",
      to:"",
    }
}

export const filterSlice = createSlice({
    name:"filter",
    initialState:filters,
    reducers:{
        
      searchFilter:(state,action)=>{

         const searchText = action.payload;
         if(searchText)
         { state.search = searchText}
         else 
         { state.search = ""}

      },
      
      priorityFilter:(state,action)=>{
          
        const priority = action.payload;

        if(priority && priority!="All")
        {state.priority = priority}
        else state.priority = "";

      },

      dateFilter:(state,action)=>{
         
        const {type,date} = action.payload;
        
        if(type==="FROM" && date)
        {
           state.date.from = date;
        }
        else{
          state.date.from = "";

        }

       if(type==="TO" && date){
          state.date.to = date;
        }
        else{
          state.date.to = "";
        }

      },
      clearFilters:(state)=>{
        state.search = ""
        state.priority = ""
        state.date = {
          from:"",
          to:"",
        }
      }

    }
})


export const {
searchFilter,
priorityFilter,
dateFilter,
clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;