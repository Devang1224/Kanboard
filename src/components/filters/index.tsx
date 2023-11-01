import { clearFilters, dateFilter, priorityFilter, searchFilter } from '@/reducers/Filters';
import { reorderData } from '@/utils/ReorderData';
import { debounce } from 'lodash';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



const Filter = () => {


  const dispatch = useDispatch();
  const searchTextRef: RefObject<HTMLInputElement> = useRef(null);
  const priorityRef: RefObject<HTMLSelectElement> = useRef(null);
  const fromDateRef: RefObject<HTMLInputElement> = useRef(null);
  const toDateRef: RefObject<HTMLInputElement> = useRef(null);


const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{

  const searchText = e.target.value.trim().toLowerCase();
     dispatch(searchFilter(searchText));
}
const debouncedSearch = debounce(handleSearch, 500);


const handleSeverityChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{

const priority = e.target.value;
dispatch(priorityFilter(priority));

}

const handleDateFilter = (type:string,e: React.ChangeEvent<HTMLInputElement>)=>{

const date = e.target.value;
dispatch(dateFilter({type,date}));

}

const handleClearFilters = (e: React.MouseEvent<HTMLButtonElement>)=>{
e.preventDefault();
dispatch(clearFilters());
   searchTextRef.current!.value = '';
    priorityRef.current!.value = 'default'; 
    fromDateRef.current!.value = '';
    toDateRef.current!.value = '';

}

    return (
        <div className="border border-x-0 h-[15vh] pt-5 p-10 dark:bg-[#292929]">
            
          <h2 className="text-[20px] text-[#00000099] dark:text-white ">Filters:</h2>

          <div className="rw-full p-5 pt-3 pl-0 flex">
          
           <input 
             type="text" placeholder="Search for task, assignee, priority"
             className="w-[20rem] h-10 p-2 outline-none shadow-sm border rounded-md dark:bg-[#454545] dark:border-none dark:text-white"
             onChange={debouncedSearch}
             ref={searchTextRef}
             />
           
           <select 
             className="h-10 p-2 outline-0 shadow-sm border rounded-md text-[#00000087] ml-3 cursor-pointer dark:bg-[#454545] dark:border-none dark:text-[#d0cfcf]" 
             defaultValue="default"
             onChange = {handleSeverityChange}
             ref={priorityRef}
             >
            <option value="default" disabled >Select Severity</option>
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>Highest</option>
           </select>
          
          <div className="relative">
          <p className="absolute top-[-20px] left-4 text-[#00000087] dark:text-white">From</p>
          <input type="date" className="h-10 p-2 outline-0 shadow-sm border rounded-md text-[#00000087] ml-3 dark:bg-[#454545] dark:border-none dark:text-[#d0cfcf]"
           onChange = {(e)=>handleDateFilter("FROM",e)}
           ref={fromDateRef}
          />
          </div>

          <div className="relative">
          <p className="absolute top-[-20px] left-4 text-[#00000087] dark:text-white">To</p>
          <input type="date" className="h-10 p-2 outline-0 shadow-sm border rounded-md text-[#00000087] ml-3 dark:bg-[#454545] dark:border-none dark:text-[#d0cfcf]"
           onChange = {(e)=>handleDateFilter("TO",e)}
           ref={toDateRef}
          />
          </div>

          <button className="p-2  ml-3 shadow-sm rounded-md bg-[#0077ff]  hover:bg-[#0077ffd6] text-white" onClick={handleClearFilters}>Clear Filters</button>

          </div>

        </div>
    );
}

export default Filter;



