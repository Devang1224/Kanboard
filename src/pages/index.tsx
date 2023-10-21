import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Filter from '@/components/filters'
import Board from '@/components/board'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { reorderData } from '@/services/ReorderData'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const columns = useSelector((state)=>state.dummyData.columns);
  const tasks = useSelector((state)=>state.dummyData.tasks);

 const dispatch = useDispatch();


useEffect(()=>{
      
reorderData(dispatch,columns,tasks);
},[])


  return (
   <div className='w-full h-[100vh] bg-[#00000009]'>
     <Navbar/>
     <Filter/>
     <Board/>
   </div>
  )
}
