import formatedDate from "@/utils/formatDate";
import { Draggable } from "react-beautiful-dnd";

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
}: Props) => {
  return (
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
            <p className=" text-[#5E6C84] text-[15px] pt-1 cursor-pointer hover:underline w-max">
              Summary for Task-1
            </p>
            <div
              className={`pr-2 pl-2 mr-1 border rounded-md text-green-500 border-green-500 
                        ${ priority == "Highest" && " text-red-500 border-red-500"} 
                        ${priority == "Medium" &&  " text-orange-500 border-orange-500"  }`}
             >
              {priority}
            </div>
          </div>
          <div className="flex w-full justify-between pt-2">
            <p>
              <span className="text-[#5E6C84]">Assignee:</span> {assignee}
            </p>
            <div className={` p-[5px] rounded-[40px] text-[13px]`}>{date}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default SingleTask;
