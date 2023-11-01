import formatedDate from "@/utils/formatDate";
import { Draggable } from "react-beautiful-dnd";
import Modal from '@mui/material/Modal';
import { useState } from "react";
import TaskDetails from "../taskDetails";


type Props = {
  id: string;
  title: string;
  status: string;
  assignee: string;
  priority: string;
  date: string;
  summary: string;
  index: number;
};

const SingleTask = ({
  id,
  title,
  assignee,
  status,
  index,
  priority,
  date,
  summary
}: Props) => {

  
  const [openTaskDetailsModal,setTaskDetailsModal] = useState(false);

  return (<>
    <Draggable draggableId={id} index={index} key={id}>
      {(provided, snapshot) => (
        <div
          className={`h-[25%] p-2 pl-3 shadow-custom-2 mb-2 bg-white`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h1 className="text-[1.2rem]">{title}</h1>
          <div className="flex justify-between">
            <p className=" text-[#5E6C84] text-[15px] pt-1 cursor-pointer hover:underline w-max"
            onClick={()=>setTaskDetailsModal(true)}
            >
              Description
            </p>
            <div
              className={`pr-2 pl-2 mr-1 border rounded-md text-green-500 border-green-500 
                           ${priority === "Highest" ? "text-red-500 border-red-500" : ""}
                             ${priority === "Medium" ? "text-orange-500 border-orange-500" : ""}`}

             >
              {priority}
            </div>
          </div>
          <div className="flex w-full justify-between pt-2">
            <p>
              <span className="text-[#5E6C84]">Assignee:</span> {assignee}
            </p>
            <div className={` p-[5px] rounded-[40px] text-[13px]`}>{formatedDate(date)}</div>
          </div>
        </div>
      )}
    </Draggable>
    
    <Modal
        open={openTaskDetailsModal}
        onClose={()=>setTaskDetailsModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><>
       <TaskDetails 
       title={title}
       assignee={assignee}
       status={status}
       description={summary}
       priority={priority}
       date={date}
       /></>
      </Modal>
    </>
  );
};

export default SingleTask;
