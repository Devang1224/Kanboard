const Filter = () => {
    return (
        <div className=" border h-[15vh] pt-5 p-10">
            
          <h2 className="text-[20px] text-[#00000099] ">Filters:</h2>

          <div className="w-full p-5 pt-3 pl-0 flex">
          
           <input type="text" placeholder="Search for task, assignee,type" className="w-[20rem] h-10 p-2 outline-0 shadow-sm border rounded-md"/>
           
           <select className="h-10 p-2 outline-0 shadow-sm border rounded-md text-[#00000087] ml-3">
            <option disabled>Select Severity</option>
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