import { useCallback, useContext, useEffect, useState } from "react";
import Task from "../task";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { movedData, updateData } from "@/reducers/Data";

const Board = () => {

  const [isBrowser, setIsBrowser] = useState(false);
const data = useSelector((state)=>state.dummyData.data);
const dispatch = useDispatch();



  const onDragEnd = useCallback((result: DropResult) => {
    const { source, destination } = result;

    let sourceId = parseInt(source.droppableId);
    let sourceIndex = source.index;
    let destinationId = parseInt(destination?.droppableId!);
    let destinationIndex = destination?.index;

//  dispatch(showState());


    if (!destination) return;
    if (destinationId === sourceId && destinationIndex === sourceIndex) return;

    if(sourceId==destinationId){
      const items  = data[sourceId].tasks;
     dispatch(updateData({sourceId,items,sourceIndex,destinationIndex}));
    }
    else{

      const sourceTasks = data[sourceId].tasks;
      const destinationTasks = data[destinationId].tasks;
      dispatch(movedData({sourceTasks,destinationTasks,source,destination,data}));

    }
  


  }, []);



console.log(data);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);



  return (
    <div className="w-full  h-[70%] flex items-center p-10">
      {isBrowser && (
        <DragDropContext
          onDragEnd={onDragEnd}
        >
          <div className="w-full h-full  p-1 flex gap-3">
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
