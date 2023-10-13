import { createSlice } from '@reduxjs/toolkit'


export interface DummyData {
    data: {
        [key: number]: {
          status: string;
          tasks: {
            id: number;
            title: string;
            summary: string;
            status: string;
            assignee: string;
            date: string;
          }[];
        };
      };
}

const initialState: DummyData= {
  data: {
    0:{
        status:"Resources",
        tasks:[
            {
                id:1,
                title:"task-1",
                summary:"",
                status:"Resources",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:2,
                title:"task-2",
                summary:"",
                status:"Resources",
                assignee:"Ivy",
                date:"May 15th 23",

            }, {
                id:3,
                title:"task-3",
                summary:"",
                status:"Resources",
                assignee:"Ivy",
                date:"May 15th 23",

            }, {
                id:4,
                title:"task-4",
                summary:"",
                status:"Resources",
                assignee:"Ivy",
                date:"May 15th 23",

            }, {
                id:5,
                title:"task-5",
                summary:"",
                status:"Resources",
                assignee:"Ivy",
                date:"May 15th 23",

            }, {
                id:6,
                title:"task-6",
                summary:"",
                status:"Resources",
                assignee:"Ivy",
                date:"May 15th 23",
            },
        ],

    },
    
    1:{
        status:"Todo",
        tasks:[
            {
                id:7,
                title:"task-7",
                summary:"",
                status:"Todo",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:8,
                title:"task-8",
                summary:"",
                status:"Todo",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:9,
                title:"task-9",
                summary:"",
                status:"Todo",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:10,
                title:"task-10",
                summary:"",
                status:"Todo",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:11,
                title:"task-11",
                summary:"",
                status:"Todo",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:12,
                title:"task-12",
                summary:"",
                status:"Todo",
                assignee:"Ivy",
                date:"May 15th 23",
            },
        ],

    },
    
    2:{
        status:"Doing",
        tasks:[
            {
                id:13,
                title:"task-13",
                summary:"",
                status:"Doing",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:14,
                title:"task-14",
                summary:"",
                status:"Doing",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:15,
                title:"task-15",
                summary:"",
                status:"Doing",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:16,
                title:"task-16",
                summary:"",
                status:"Doing",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:17,
                title:"task-17",
                summary:"",
                status:"Doing",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {

                id:18,
                title:"task-18",
                summary:"",
                status:"Doing",
                assignee:"Ivy",
                date:"May 15th 23",
            },
        ],
    },
    
    3:{
        status:"Done",
        tasks:[
            {
                id:19,
                title:"task-19",
                summary:"",
                status:"Done",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:20,
                title:"task-20",
                summary:"",
                status:"Done",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:21,
                title:"task-21",
                summary:"",
                status:"Done",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:22,
                title:"task-22",
                summary:"",
                status:"Done",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:23,
                title:"task-23",
                summary:"",
                status:"Done",
                assignee:"Ivy",
                date:"May 15th 23",
            }, {
                id:24,
                title:"task-24",
                summary:"",
                status:"Done",
                assignee:"Ivy",
                date:"May 15th 23",
            },
        ],
    },
  },
}

export const dataSlice = createSlice({
  name: "dummyData",
  initialState,
  reducers: {

    updateData: (state, action) => {
      const { sourceId, items, sourceIndex, destinationIndex } = action.payload;

      const prevData = { ...state.data };
      const sourceTasks = prevData[sourceId].tasks.slice(); // Create a copy of the tasks array

      // Remove the dragged item from its current position
      const [removed] = sourceTasks.splice(sourceIndex, 1);

      // Insert the dragged item at the new position
      sourceTasks.splice(destinationIndex, 0, removed);

      // Update the tasks array with the reordered tasks
      prevData[sourceId].tasks = sourceTasks;
      state.data = prevData;

     console.log(sourceId,prevData,sourceIndex,destinationIndex);

    },

    movedData:(state,action)=>{

        const { sourceTasks, destinationTasks, source, destination } = action.payload;

        const sourceId = parseInt(source.droppableId);
        const destinationId = parseInt(destination.droppableId);
      
        const prevData = {...state.data}; // Create a copy of the data 
      
        const srcClone = [...sourceTasks];
        const destClone = [...destinationTasks];
      
        const [removed] = srcClone.splice(source.index, 1);
      
        const updatedRemoved = { ...removed, status: prevData[destinationId].status };
      
        destClone.splice(destination.index, 0, updatedRemoved);
      
        prevData[sourceId].tasks = srcClone;
        prevData[destinationId].tasks = destClone;
      
        state.data = prevData;


    },
    showState: (state) => {
        // return { data: JSON.parse(JSON.stringify(state.data)) };
      }
  },
});


export const {updateData,movedData,showState} = dataSlice.actions

export default dataSlice.reducer

