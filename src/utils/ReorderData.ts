import { ReorderData } from "@/reducers/Data";
import { Dispatch } from "@reduxjs/toolkit";

type Tasks = {
    id: string;
    title: string;
    summary: string;
    status: string;
    assignee: string;
    priority: string;
    date: string;
  }[];

type Columns = {
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





export const reorderData = async (
  dispatch: Dispatch,
  columns: Columns,
  tasks: Tasks
) => {
  const reorderedData = JSON.parse(JSON.stringify(columns));
  try {
    Object.entries(reorderedData)?.map(([columnKey, item]) => {
      for (const ind in tasks) {
        const typedItem: { status: string; tasks: Tasks } = item as { status: string; tasks: Tasks };
        if (tasks[ind].status === typedItem.status) {
          typedItem.tasks.push(tasks[ind]);
         }
      }
    });

    dispatch(ReorderData(reorderedData));
  } catch (err) {
    console.log(err);
  }
};
