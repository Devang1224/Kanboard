import { createSlice } from "@reduxjs/toolkit";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export interface DummyData {
  data: {
    [key: number]: {
      status: string;
      tasks: {
        id: string;
        title: string;
        summary: string;
        status: string;
        assignee: string;
        priority:string
        date: string;
      }[];
    };
  };
}

const initialState: DummyData = {
  data: {
    0: {
      status: "Resources",
      tasks: [
        {
          id: "a1",
          title: "task-1",
          summary: "",
          status: "Resources",
          assignee: "Ivy",
          priority:"Low",
          date: "May 15th 23",
        },
        {
          id: "a2",
          title: "task-2",
          summary: "",
          status: "Resources",
          assignee: "Ivy",
          priority:"Medium",
          date: "May 15th 23",
        },
        {
          id: "a3",
          title: "task-3",
          summary: "",
          status: "Resources",
          assignee: "Ivy",
          priority:"Low",
          date: "May 15th 23",
        },
        {
          id: "a4",
          title: "task-4",
          summary: "",
          status: "Resources",
          assignee: "Ivy",
          priority:"Highest",
          date: "May 15th 23",
        },
      ],
    },

    1: {
      status: "Todo",
      tasks: [
        {
          id: "b7",
          title: "task-7",
          summary: "",
          status: "Todo",
          assignee: "Ivy",
          priority:"Low",
          date: "May 15th 23",
        },
        {
          id: "b8",
          title: "task-8",
          summary: "",
          status: "Todo",
          assignee: "Ivy",
          priority:"Highest",
          date: "May 15th 23",
        },
        {
          id: "b9",
          title: "task-9",
          summary: "",
          status: "Todo",
          assignee: "Ivy",
          priority:"Low",
          date: "May 15th 23",
        },
      ],
    },

    2: {
      status: "Doing",
      tasks: [
        {
          id: "c13",
          title: "task-13",
          summary: "",
          status: "Doing",
          assignee: "Ivy",
          priority:"Medium",
          date: "May 15th 23",
        },
        {
          id: "c14",
          title: "task-14",
          summary: "",
          status: "Doing",
          assignee: "Ivy",
          priority:"Low",
          date: "May 15th 23",
        },
        {
          id: "c15",
          title: "task-15",
          summary: "",
          status: "Doing",
          assignee: "Ivy",
          priority:"Low",
          date: "May 15th 23",
        },
      ],
    },

    3: {
      status: "Done",
      tasks: [
        {
          id: "d19",
          title: "task-19",
          summary: "",
          status: "Done",
          assignee: "Ivy",
          priority:"Low",
          date: "May 15th 23",
        },
        {
          id: "d20",
          title: "task-20",
          summary: "",
          status: "Done",
          assignee: "Ivy",
          priority:"Low",
          date: "May 15th 23",
        },
        {
          id: "d21",
          title: "task-21",
          summary: "",
          status: "Done",
          assignee: "Ivy",
          priority:"Medium",
          date: "May 15th 23",
        },
      ],
    },
  },
};

export const dataSlice = createSlice({
  name: "dummyData",
  initialState,
  reducers: {
    updateData: (state, action) => {
      const { sourceId, sourceIndex, destinationIndex } = action.payload;

      const prevData = { ...state.data };
      const sourceTasks = [...prevData[sourceId].tasks]; // create a copy of the tasks array

      // remove the dragged item from its current position
      const [removed] = sourceTasks.splice(sourceIndex, 1);

      // insert the dragged item at the new position
      sourceTasks.splice(destinationIndex, 0, removed);

      state.data = {
        ...state.data,
        [sourceId]: {
          ...state.data[sourceId],
          tasks: sourceTasks,
        },
      };
    },

    movedData: (state, action) => {
      const { source, destination } = action.payload;

      const sourceId = parseInt(source.droppableId);
      const destinationId = parseInt(destination.droppableId);

      const sourceTasks = [...state.data[sourceId].tasks];
      const destinationTasks = [...state.data[destinationId].tasks];

      const [removed] = sourceTasks.splice(source.index, 1);

      destinationTasks.splice(destination.index, 0, removed);

      state.data = {
        ...state.data,
        [sourceId]: {
          ...state.data[sourceId],
          tasks: sourceTasks,
        },
        [destinationId]: {
          ...state.data[destinationId],
          tasks: destinationTasks,
        },
      };
    },
    createNewTask:(state,action) =>{

       const {newTask,columnId} = action.payload;
        state.data[columnId].tasks.push(newTask);
     },
     changeStatus:(state,action)=>{

     },

    
  },
});

export const {
     updateData,
     movedData, 
     createNewTask,
     changeStatus,
    
    } = dataSlice.actions;

export default dataSlice.reducer;
