

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
 

export default function formatedDate(dateString:string){

    const date = new Date(dateString);
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    const formattedDate = `${month} ${day}th ${year}`;

    return formattedDate;
}


