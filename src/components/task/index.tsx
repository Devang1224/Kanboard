import { useEffect, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import SingleTask from "../singleTask";
import { Droppable } from "react-beautiful-dnd";


type Props={
  id:string,
  tasks:{
    id: string;
    title: string;
    summary: string;
    assignee: string;
    status: string;
    date: string;
  }[],
  status:string,
}

const Task = ({id,tasks,status}:Props) => {

  const [openInputHead, setOpenInputHead] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [openModal,setOpenModal] = useState(false);


  const handleInputBlur = () => {
    setOpenInputHead(false);
  };

  useEffect(() => {
    if (openInputHead && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openInputHead]);


  const handleStatusChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

     const colId = parseInt(e.target.id);
     const newStatus = e.target.value;
    
    // setData((prev)=>
    // {
      
    //   let updatedData = [...prev];

    //   updatedData.map((item)=>{
    //     if(item.id==colId)
    //     {
    //       item.status = newStatus;
    //     }
    //   })

    //   return updatedData;

    // })
     
  }

  return (
    <div  className="w-[24%] bg-[#e7e8e9] rounded-xl p-1 pt-0 overflow-auto ">

       <div className="p-2 h-12 sticky bg-[#e7e8e9] z-10 top-0">
              {openInputHead ? (
                <input
                  type="text autofocus"
                  className="w-full h-9 p-2"
                  ref={inputRef}
                  id={`${id}`}
                  onBlur={handleInputBlur}
                  onChange={handleStatusChange}
                  onKeyUp={(e)=>{if(e.key === 'Enter'){setOpenInputHead(false)}}}
                />
              ) : (
                <h1
                  className="p-1 pl-2 text-[#5E6C84]  cursor-pointer hover:bg-[#5e6c8424] hover:rounded-[50px] "
                  onClick={() => setOpenInputHead(true)}
                >
                  {status}
                </h1>
              )}
       </div>

    <Droppable droppableId={id.toString()} type="PERSON">
      {
       (provided, snapshot) => (

       <div className="p-1 "ref={provided?.innerRef} 
           {...provided?.droppableProps}>
            {
              tasks?.map((item,index)=>(
              <SingleTask id={item.id} 
                          index={index}
                          title={item.title} 
                          status={item.status} 
                          assignee={item. assignee} 
                          date={item.date} 
                          key={item.id}
                          summary={item.summary}
                           />))
            }

          {provided.placeholder}
          </div>

      )}
    </Droppable>

            <div className="flex items-center p-2 text-[#5E6C84] hover:bg-[#5e6c8434] cursor-pointer mt-2"
                onClick={() => setOpenModal(true)}
              >
                <AddIcon/> Create issue
              </div>

              <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="flex justify-center items-center"
              >
                <div className="w-[30%] h-[40%] bg-[#fffcfcd3] outline-none rounded-lg p-3 flex flex-col">
                  <label
                    htmlFor="taskTitle"
                    className="text-[#525e73] text-lg p-1"
                  >
                    Title:
                  </label>
                  <input
                    id="taskTitle"
                    type="text"
                    className="shadow-md outline-none rounded-md p-1"
                    required
                  />

                  <label
                    htmlFor="summary"
                    className="text-[#525e73] text-lg p-1 mt-1"
                  >
                    Summary:
                  </label>
                  <textarea
                    id="summary"
                    maxLength={255}
                    className="h-[30%] resize-none p-1 outline-none shadow-custom rounded-md "
                  ></textarea>

                  <label
                    htmlFor="assignee"
                    className="text-[#525e73] text-lg p-1 mt-1"
                  >
                    Assignee:
                  </label>
                  <input
                    id="assignee"
                    type="text"
                    className="w-[12rem] shadow-md outline-none rounded-md p-1"
                    required
                  />
                </div>
              </Modal>
    </div>
  );
};

export default Task;
