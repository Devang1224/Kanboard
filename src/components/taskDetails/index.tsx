
type Props = {
    title: string;
    status: string;
    assignee: string;
    priority: string;
    date: string;
    description: string;
  };



const TaskDetails = ({
    title,
    assignee,
    status,
    priority,
    date,
    description
  }: Props) => {
    return (
        <div className="h-[80vh] w-[80vw] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] outline-none">
           <div className="h-full w-full p-3">

             <div className="p-2 flex justify-between">
               <div>
                   <h1 className="text-[25px] text-[#525e73]">Title</h1>
                    <p className="text-[30px] overflow-x-auto whitespace-nowrap">{title}</p>
                </div>

                <div className="">
                   <h1 className="text-[20px] text-[#525e73] p-1">Status</h1>
                   <p className="text-[25px] pl-1">{status}</p>
                </div>

               <div className="pr-5">
                   <h1 className="text-[20px] text-[#525e73]">Priority</h1>
                    <p className={`text-[25px] border rounded-md p-1 text-green-500 border-green-500 
                        ${ priority == "Highest" && " text-red-500 border-red-500"} 
                        ${priority == "Medium" &&  " text-orange-500 border-orange-500"}`}
                     >

                        {priority}
                    </p>
                 </div>

             </div>             
            
             <div className="p-2 h-[60%]">
                <h1 className="text-[25px] text-[#525e73]">Description</h1>
                <p className=" h-[90%] p-2 border border-[#80808094] overflow-y-auto"> 
                 {description}
                </p>
             </div>             
             
             <div className="flex  mt-4">
                <h1 className="text-[20px] text-[#525e73] pl-4">Assignee:</h1>
                <p className="text-[25px] pl-2">{assignee}</p>
             </div>
                 
           
            
             

           </div>
       </div>
    );
}

export default TaskDetails;