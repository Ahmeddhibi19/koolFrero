import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineSearch, AiOutlineClose,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsPerson,} from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb'
import {FaUserFreinds,FaGoogleWallet} from 'react-icons/fa'
import {MdHelp,MdOutlineFavorite} from 'react-icons/md'

const Topnav = () => {
   const [Sidenav,setSidenav]=useState(false);
   console.log(Sidenav);
  return (
    <div className='max-w-[1520] mx-auto p-4'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <div onClick={()=> setSidenav(!Sidenav)} className='cursor-pointer'>
                    <AiOutlineMenu size={25}/>
                </div>
                <h1 className='text-2xl sm:text-2xl lg:text-4xl px-2'>Kool
                    <span className='font-bold text-orange-700'>Frero</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-orange-700 text-white rounded-full p-2 text-[17.5px] '>Free</p>
                    <p className='p-2 text-[17.5px]'>Delivery</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}/>
                <input type="text" className='bg-transparent p-2 w-full focus:outline-none' placeholder='search meals'/>
            </div>
            <button className='bg-orange-700 text-white  items-center py-2 rounded-full hidden md:flex'>
                <BsFillCartFill size={20}/>cart
            </button>
            {
                Sidenav ?(<div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={()=>setSidenav(!Sidenav)}></div>):null
            }

            <div className={Sidenav ?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
            :"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose onClick={()=>setSidenav(!Sidenav)} size={25} className='absolute right-4 top-4 cursor-pointer'/>
                <h2 className='text-2xl p-4 cursor-pointer'>Kool<span className='text-orange-700 font-bold'>Frero</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex cursor-pointer'>
                            <BsPerson size={25} className='mr-4 text-white bg-black rounded-full'/> My account
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer'>
                            <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full'/> Delivery
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer'>
                            <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full'/> My Favourite
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer'>
                            <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full'/> My Wallet
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer'>
                            <MdHelp size={25} className='mr-4 text-white bg-black rounded-full'/> Help
                        </li>
                    </ul>
                </nav>
            </div>
                
            
            
        </div>
</div>

  )
}

export default Topnav