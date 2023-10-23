type Tasks = {
  id: string;
  title: string;
  summary: string;
  status: string;
  assignee: string;
  priority: string;
  date: string;
}[];

type DateObj = {
  from:string,
  to:string,
}

///////// Search Filter /////////////////
export const searchFilter = (tasks: Tasks, searchText: string) => {
  const searchResults = tasks
    .map((item) => {
      if (
        item.title.toLowerCase().includes(searchText) ||
        item.assignee.toLowerCase().includes(searchText) ||
        item.priority.toLowerCase().includes(searchText)
      ) {
        return item;
      }
    })
    .filter((item) => item !== undefined);

  return searchResults;
};


///////// Priority Filter /////////////////
export const priorityFilter = (tasks: Tasks, priority: string) => {
  const filteredTasks = tasks.filter((item) => {
    if (item.priority === priority) return item;
  });

  return filteredTasks;
};




export const dateFilter = (tasks:Tasks,date:DateObj)=>{

  const { from, to } = date;

  const fromDate = new Date(`${from}T00:00:00`);
  const toDate = new Date(`${to}T23:59:59`);

if(fromDate>toDate)
 return [];

  const dateFilteredTasks = tasks.filter((item) => {
    const itemDate = new Date(item.date);

    if (from === "" && to === "") {
      return true;
    } else if (from !== "" && to !== "") {
      return itemDate >= fromDate && itemDate <= toDate;
    } else if (from !== "") {
      return itemDate >= fromDate;
    } else if (to !== "") {
      return itemDate <= toDate;
    }

    return false;
  });



  return dateFilteredTasks;
}