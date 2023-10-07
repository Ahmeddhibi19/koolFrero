import React from 'react'
import { FaComment } from 'react-icons/fa';

const Notification = () => {
  return (
    <div className='w-full h-full'>
        <span className='w-full h-auto text-[30px] text-orange-500 font-bold'>Notifications :</span>
        <ul className='w-full h-full flex flex-col'>
            <li className='pl-2 mt-2 w-full h-[50px] flex flex-row items-center border-b-2 border-black/60 bg-gray-100 text-[17px]'>
                <FaComment size={30} className='p-1 mr-2 text-white bg-black rounded-full'/>
                <span>amine reacted to your comment</span>
            </li>
            <li className='pl-2 mt-2 w-full h-[50px] flex flex-row items-center border-b-2 border-black/60 bg-gray-100 text-[17px]'>
                <FaComment size={30} className='p-1 mr-2 text-white bg-black rounded-full'/>
                <span>amine reacted to your comment</span>
            </li>
            <li className='pl-2 mt-2 w-full h-[50px] flex flex-row items-center border-b-2 border-black/60 bg-gray-100 text-[17px]'>
                <FaComment size={30} className='p-1 mr-2 text-white bg-black rounded-full'/>
                <span>amine reacted to your comment</span>
            </li>
            <li className='pl-2 mt-2 w-full h-[50px] flex flex-row items-center border-b-2 border-black/60 bg-gray-100 text-[17px]'>
                <FaComment size={30} className='p-1 mr-2 text-white bg-black rounded-full'/>
                <span>amine reacted to your comment</span>
            </li>
            
        </ul>
    </div>
  )
}

export default Notification