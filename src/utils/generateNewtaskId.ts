
import { v4 as uuidv4 } from "uuid";


export default function generateTaskId(){
    const uuid = uuidv4();
    const shortString = uuid.split("-")[0];
    return shortString;
  };