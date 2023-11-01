import { useEffect, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SingleTask from "../singleTask";
import { Droppable } from "react-beautiful-dnd";
import NewTaskModal from "../newTask";
import { useDispatch } from "react-redux";
import { changeStatus } from "@/reducers/Data";
import { ToastContainer, toast } from 'react-toastify';


type Props = {
  id: string;
  tasks: {
    id: string;
    title: string;
    summary: string;
    assignee: string;
    priority: string;
    status: string;
    date: string;
  }[];
  status: string;
};

const Task = ({ id, tasks, status }: Props) => {

  const [openInputHead, setOpenInputHead] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const[newStatus,setNewStatus] = useState({colId:-1,status:''});


  const dispatch = useDispatch();

  const handleInputBlur = () => {
    const changedStatus = newStatus.status;
    const columnId = newStatus.colId;
    if (changedStatus !== '') {
      dispatch(changeStatus({ colId:columnId, newStatus:changedStatus }));
    }
    setOpenInputHead(false);
  };

  useEffect(() => {
    if (openInputHead && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openInputHead]);



  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const colId = parseInt(e.target.id);
    const newStatus = e.target.value.trim();
     setNewStatus({colId,status:newStatus});

  };


  


  return (
    <>
    <div className="min-w-[24%] h-full bg-[#e7e8e9] rounded-xl p-1 pt-0 overflow-y-auto dark:bg-[#454545]">
      <div className="p-2 h-12 sticky bg-[#e7e8e9] z-10 top-0 dark:bg-[#454545]">
        {openInputHead ? (
          <input
            type="text autofocus"
            className="w-full h-9 p-2"
            ref={inputRef}
            id={`${id}`}
            onBlur={handleInputBlur}
            onChange={handleStatusChange}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
               handleInputBlur()
              }
            }}
          />
        ) : (
          <h1
            className="p-1 pl-2 text-[#5E6C84]  cursor-pointer hover:bg-[#5e6c8424] hover:rounded-md overflow-x-scroll whitespace-nowrap dark:text-[#e9e7e7] dark:hover:bg-[#b4cbf324]"
            onClick={() => setOpenInputHead(true)}
          >
            {status}
          </h1>
        )}
      </div>

      <Droppable droppableId={id.toString()} type="PERSON">
        {(provided, snapshot) => (
          <div
            className="p-1 "
            ref={provided?.innerRef}
            {...provided?.droppableProps}
          >
            {tasks?.map((item, index) => (
              <SingleTask
                id={item.id}
                index={index}
                title={item.title}
                status={item.status}
                assignee={item.assignee}
                priority={item.priority}
                date={item.date}
                key={item.id}
                summary={item.summary}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div
        className="flex items-center p-2 text-[#5E6C84] hover:bg-[#5e6c8434] cursor-pointer mt-2 dark:text-[#d0cfcf]"
        onClick={() => setOpenModal(true)}
      >
        <AddIcon/> Create Task
        <NewTaskModal columnId={id} columnStatus={status} openModal={openModal} setOpenModal={setOpenModal} />
      </div>

    
    </div>
   
    </>
  );
};

export default Task;
