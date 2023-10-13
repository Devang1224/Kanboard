import formatedDate from "@/utils/formatDate";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  id: string;
  title:string,
  status:string,
  assignee:string,
  date:string,
  summary:string,
  index:number

};

const SingleTask = ({ id,title,assignee,status,index}: Props) => {
  const date = formatedDate();
 

  return (
    <Draggable draggableId={id.toString()} index={index} key={id}>
      {
       (provided, snapshot) => (
        <div className={`h-[25%] p-2 pl-3 shadow-custom-2 mb-2 bg-white`}  ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <h1 className="text-[1.2rem]">{title}</h1>
          <p className=" text-[#5E6C84] text-[15px] pt-1 cursor-pointer hover:underline w-max">
            Summary for Task-1
          </p>
          <div className="flex w-full justify-between pt-2">
            <p>
              <span className="text-[#5E6C84]">Assignee:</span> {assignee}
            </p>
            <div className={` p-[5px] rounded-[40px] text-[13px]`}>
              {date}
            </div>
          </div>
          </div>

       )
      }
    </Draggable>
  );
};

export default SingleTask;
