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
import { reorderData } from '@/utils/ReorderData'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

 const dispatch = useDispatch();



  return (
   <div className='w-full h-[100vh] bg-[#00000009] dark:bg-[#292929]'>
     <Navbar/>
     <Filter/>
     <Board/>
    
   </div>
  )
}
