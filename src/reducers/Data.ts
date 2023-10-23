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
        priority: string;
        date: string;
      }[];
    };
  };
  tasks: {
    id: string;
    title: string;
    summary: string;
    status: string;
    assignee: string;
    priority: string;
    date: string;
  }[];

  columns: {
    [key: number]: {
      status: string;
      tasks: {
        id: string;
        title: string;
        summary: string;
        status: string;
        assignee: string;
        priority: string;
        date: string;
      }[];
    };
  };
}

const initialState: DummyData = {
  data: {},
  columns: {
    0: {
      status: "Resources",
      tasks: [],
    },
    1: {
      status: "Todo",
      tasks: [],
    },

    2: {
      status: "Doing",
      tasks: [],
    },
    3: {
      status: "Done",
      tasks: [],
    },
  },

  tasks: [
    {
      id: "a1",
      title: "task-1",
      summary: "",
      status: "Resources",
      assignee: "Ivy",
      priority: "Low",
      date: "Mon Oct 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "a2",
      title: "task-2",
      summary: "",
      status: "Resources",
      assignee: "Ivy",
      priority: "Medium",
      date: "Tue May 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "a3",
      title: "task-3",
      summary: "",
      status: "Resources",
      assignee: "Ken",
      priority: "Low",
      date: "Mon Jun 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "a4",
      title: "task-4",
      summary: "",
      status: "Resources",
      assignee: "Lucy",
      priority: "Highest",
      date: "Mon Oct 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "b7",
      title: "task-7",
      summary: "",
      status: "Todo",
      assignee: "Rick",
      priority: "Low",
      date: "Mon Jan 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "b8",
      title: "task-8",
      summary: "",
      status: "Todo",
      assignee: "Ivy",
      priority: "Highest",
      date: "Mon Feb 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "b9",
      title: "task-9",
      summary: "",
      status: "Todo",
      assignee: "Ivy",
      priority: "Low",
      date: "Mon Apr 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "c13",
      title: "task-13",
      summary: "",
      status: "Doing",
      assignee: "Glen",
      priority: "Medium",
      date: "Mon Oct 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "c14",
      title: "task-14",
      summary: "",
      status: "Doing",
      assignee: "Lori",
      priority: "Low",
      date: "Mon Jan 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "c15",
      title: "task-15",
      summary: "",
      status: "Doing",
      assignee: "Daryl",
      priority: "Low",
      date: "Mon Mar 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "d19",
      title: "task-19",
      summary: "",
      status: "Done",
      assignee: "Tony",
      priority: "Low",
      date: "Mon Mar 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "d20",
      title: "task-20",
      summary: "",
      status: "Done",
      assignee: "Ivy",
      priority: "Low",
      date: "Mon May 23 2023 20:21:05 GMT+0530",
    },
    {
      id: "d21",
      title: "task-21",
      summary: "",
      status: "Done",
      assignee: "Carl",
      priority: "Medium",
      date: "Mon May 23 2023 20:21:05 GMT+0530",
    },
  ],
};

export const dataSlice = createSlice({
  name: "dummyData",
  initialState,
  reducers: {
    ReorderData: (state, action) => {
      state.data = action.payload;
    },
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

      let [removed] = sourceTasks.splice(source.index, 1);

      const updatedTask = {
        ...removed,
        status: state.data[destinationId].status,
      };

      const originalTaskIndex = state.tasks.findIndex(  // changing task's status on drop
        (task) => task.id === updatedTask.id
      );
      if (originalTaskIndex !== -1) {
        state.tasks[originalTaskIndex] = updatedTask;
      }

      destinationTasks.splice(destination.index, 0, updatedTask);
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
    createNewTask: (state, action) => {
      const { newTask, columnId } = action.payload;
      console.log(newTask);
      state.data[columnId].tasks = [...state.data[columnId].tasks,newTask];
      state.tasks.push(newTask);
    },
    changeStatus: (state, action) => {
      const { colId, newStatus } = action.payload;
      state.data[colId].status = newStatus;
      state.columns[colId].status = newStatus;
       

    },
  },
});

export const {
  updateData,
  movedData,
  createNewTask,
  changeStatus,
  ReorderData,
} = dataSlice.actions;

export default dataSlice.reducer;

