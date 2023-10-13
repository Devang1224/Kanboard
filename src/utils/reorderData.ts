
// type Tasks= {
//   id: number;
//   title: string;
//   summary: string;
//   assignee: string;
//   status: string;
//   date: string;
// }[]

// export const reorderData = (
//   tasks:Tasks,
//   sourceIndex: number,
//   destinationIndex: number,
// ) => {
// console.log(sourceIndex,destinationIndex);

//   const reorderedData = Array.from(tasks);
//   const [removed] = reorderedData.splice(sourceIndex, 1);
//   reorderedData.splice(destinationIndex, 0, removed);

//   return reorderedData;
// };



// // srcData.status = PrevData[destinationId - 1].status;

//   // if (PrevData[destinationId - 1].tasks.length == 0) {
//   //   // if the destination container is empty
//   //   srcData.id = destinationId * 100;
//   // } else {
//   //   srcData.id = destinationIndex!;
//   // }

//   // if (sourceId != destinationId) {
//   //   PrevData[destinationId - 1].tasks.map((item) => {
//   //     // reordering the destination
//   //     if (item.id % 100 >= destinationIndex! % 100) {
//   //       item.id += 1;
//   //     }
//   //     return item;
//   //   });

//   //   PrevData[destinationId - 1].tasks.splice(
//   //     // adding an item to the destination
//   //     destinationIndex! % 100,
//   //     0,
//   //     srcData
//   //   );

//   //   PrevData[sourceId - 1].tasks.splice(sourceIndex % 100, 1); // removing an item from the source

//   //   PrevData[sourceId - 1].tasks.map((item) => {
//   //     // reordering the source
//   //     if (item.id % 100 > sourceIndex % 100) {
//   //       item.id -= 1;
//   //     }
//   //     return item;
//   //   });
//   // } else {
//   //   // if the sourceId and destinationId is same

//   //   PrevData[sourceId - 1].tasks.splice(sourceIndex % 100, 1);

//   //   PrevData[destinationId - 1].tasks.splice(
//   //     // adding an item to the destination
//   //     destinationIndex! % 100,
//   //     0,
//   //     srcData
//   //   );

//   //   PrevData[destinationId - 1].tasks.map((item, index) => {
//   //     // reordering the destination
//   //     item.id = index + destinationId! * 100;
//   //     return item;
//   //   });
//   // }

//   // return PrevData;