import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Filter from '@/components/filters'
import Board from '@/components/board'
import { store } from '../store/store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='w-full h-[100vh] bg-[#00000009]'>
     <Navbar/>
     <Filter/>
     <Board/>
   </div>
  )
}
