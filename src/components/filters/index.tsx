import { searchResult } from '@/reducers/Data';
import { reorderData } from '@/services/ReorderData';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



const Filter = () => {

  const columns = useSelector(state=>state.dummyData.columns)
  const tasks = useSelector((state)=>state.dummyData.tasks);

  const dispatch = useDispatch();





const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{

  const searchText = e.target.value.trim().toLowerCase();

  if(searchText!=='')
  {
      const searchResults = tasks.map((item:any)=>{
 
        if(item.title.toLowerCase().includes(searchText)|| 
           item.assignee.toLowerCase().includes(searchText)|| 
           item.priority.toLowerCase().includes(searchText)
          )
        {
            return item;
        }
      }).filter((item)=>item!==undefined);

      reorderData(dispatch,columns,searchResults);
      console.log(searchResults);
   
  }
  else{
    reorderData(dispatch,columns,tasks);

  }

}
const debouncedSearch = debounce(handleSearch, 500);


    return (
        <div className=" border h-[15vh] pt-5 p-10">
            
          <h2 className="text-[20px] text-[#00000099] ">Filters:</h2>

          <div className="w-full p-5 pt-3 pl-0 flex">
          
           <input 
             type="text" placeholder="Search for task, assignee, priority"
             className="w-[20rem] h-10 p-2 outline-0 shadow-sm border rounded-md"
             onChange={debouncedSearch}
             />
           
           <select className="h-10 p-2 outline-0 shadow-sm border rounded-md text-[#00000087] ml-3 cursor-pointer" defaultValue="default">
            <option value="default" disabled>Select Severity</option>
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
           </select>
          
          <div className="relative">
          <p className="absolute top-[-20px] left-4 text-[#00000087]">From</p>
          <input type="date" className="h-10 p-2 outline-0 shadow-sm border rounded-md text-[#00000087] ml-3"/>
          </div>

          <div className="relative">
          <p className="absolute top-[-20px] left-4 text-[#00000087]">To</p>
          <input type="date" className="h-10 p-2 outline-0 shadow-sm border rounded-md text-[#00000087] ml-3"/>
          </div>

          <button className="h-10 p-2  ml-3 shadow-sm border rounded-md bg-[#0077ff]  hover:bg-[#0077ffd6] text-white">Clear Filters</button>

          </div>

        </div>
    );
}

export default Filter;