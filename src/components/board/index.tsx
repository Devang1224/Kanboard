import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Task from "../task";
import { DragDropContext, DragStart, DragUpdate, DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { movedData, updateData } from "@/reducers/Data";
import { dateFilter, priorityFilter, searchFilter } from "@/utils/filterFunctions";
import { reorderData } from "@/utils/ReorderData";
import { RootState } from "@/store/store";


const Board = () => {

const [isBrowser, setIsBrowser] = useState(false);
const data = useSelector((state:RootState)=>state.dummyData.data);
const filters = useSelector((state:RootState)=>state.filterReducer);
const columns = useSelector((state:RootState)=>state.dummyData.columns)
const tasks = useSelector((state:RootState)=>state.dummyData.tasks);


const dispatch = useDispatch();



useEffect(()=>{

  let filteredTasks = [...tasks];

if(filters.search!="")
{
  filteredTasks = searchFilter(filteredTasks,filters.search);
}

if(filters.priority!="")
{
  filteredTasks = priorityFilter(filteredTasks,filters.priority);
}

if(filters.date.from!="" || filters.date.to!="")
{
 filteredTasks = dateFilter(filteredTasks,filters.date);
}



reorderData(dispatch,columns,filteredTasks);

},[filters])



  const onDragEnd = useCallback((result: DropResult) => {

    const { source, destination } = result;

    let sourceId = parseInt(source.droppableId);
    let sourceIndex = source.index;
    let destinationId = parseInt(destination?.droppableId!);
    let destinationIndex = destination?.index;


    if (!destination) return;
    if (destinationId === sourceId && destinationIndex === sourceIndex) return;

    if(sourceId==destinationId){
      const items  = data[sourceId]?.tasks;
     dispatch(updateData({sourceId,items,sourceIndex,destinationIndex}));
    }
    else{

      const sourceTasks = data[sourceId]?.tasks;
      const destinationTasks = data[destinationId]?.tasks;
      dispatch(movedData({sourceTasks,destinationTasks,source,destination,data}));

    }
  }, []);



  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);



  return (
    <div className="w-[100vw] h-[70%] flex items-center p-10 dark:bg-[#292929] ">
      {isBrowser && (
        <DragDropContext
          onDragEnd={onDragEnd}
        >
          <div className="w-full h-full p-1 flex gap-3 overflow-x-auto" >

            {
              Object.entries(data)?.map(([columnKey,item]) => (
                <Task tasks={item.tasks} status={item.status} id={columnKey} key={columnKey} />
              ))
            }

          </div>
        </DragDropContext>
      )}
    </div>
  );
};

export default Board;
