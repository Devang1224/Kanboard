import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import {BsFillSunFill} from 'react-icons/bs';
import {BsMoonStars} from 'react-icons/bs';



const Navbar = () => {

const[darkTheme,setDarkTheme] = useState(false);

useEffect(()=>{

if(darkTheme){
    document.documentElement.classList.add("dark");
}
else{
    document.documentElement.classList.remove("dark");
}

},[darkTheme])


const handleToggleDarkTheme = ()=>{
    setDarkTheme(prev=>!prev);
}

    return (
        <div className="w-full shadow-custom p-2 py-3 flex items-center bg-white dark:bg-[#292929] dark:text-white dark:shadow-custom-dark transition-dark">

            <h1 className='text-[20px] mr-3'>
                Kanboard
            </h1>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc] dark:hover:text-[#89b6fa]">Your work<KeyboardArrowDownIcon className='w-5'/></div>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc] dark:hover:text-[#89b6fa]">Projects<KeyboardArrowDownIcon className='w-5'/></div>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc] dark:hover:text-[#89b6fa]">Filters<KeyboardArrowDownIcon className='w-5'/></div>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc] dark:hover:text-[#89b6fa]">Dashboards<KeyboardArrowDownIcon className='w-5'/></div>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc] dark:hover:text-[#89b6fa]">Teams<KeyboardArrowDownIcon className='w-5'/></div>
             
             <div className='ml-auto text-[25px] cursor-pointer mr-5' onClick={handleToggleDarkTheme}>
                 {darkTheme?<BsFillSunFill/>:<BsMoonStars/>}
             </div>

        </div>
    );
}
// #81b0f6
export default Navbar;