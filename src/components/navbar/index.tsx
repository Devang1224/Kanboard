import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Navbar = () => {
    return (
        <div className="w-full shadow-custom p-2 py-3 flex items-center bg-white">
            <h1 className='text-[20px] mr-3'>
                Kanboard
            </h1>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc]">Your work<KeyboardArrowDownIcon className='w-5'/></div>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc]">Projects<KeyboardArrowDownIcon className='w-5'/></div>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc]">Filters<KeyboardArrowDownIcon className='w-5'/></div>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc]">Dashboards<KeyboardArrowDownIcon className='w-5'/></div>
            <div className="ml-2 p-1.5 rounded-md cursor-pointer hover:bg-[#aacfff62] hover:text-[#0052cc]">Teams<KeyboardArrowDownIcon className='w-5'/></div>


        </div>
    );
}

export default Navbar;