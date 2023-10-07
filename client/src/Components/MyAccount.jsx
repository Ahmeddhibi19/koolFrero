import React from 'react';
import {BsFillCartFill,BsPerson,} from 'react-icons/bs';
import { FaMapMarker,FaGoogleWallet ,FaUserFriends,FaUser} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, NavLink ,Outlet} from 'react-router-dom';
import { FaBell } from 'react-icons/fa';


const MyAccount = () => {
  return (
    <>
    
    <div className='w-full h-auto  flex flex-col sm:flex-col-2 lg:flex-row  justify-between mt-7 '>
        <div className=' a w-[400px] sm:w-[400px] lg:w-[900px] h-full flex flex-col mr-5 '>
            <div className='ml-[20px] mt-[10px] flex flex-row text-[30px] font-bold '>
                <BsPerson size={50} className='mr-5 text-white bg-black rounded-full'/> Username
            </div>
            <hr  className='w-full h-[2px] bg-black/50 mt-[15px]'/>
            
            <ul className='mt-[20px]'>
                <li className='ml-[20px] mt-[10px] flex flex-row text-[19px] font-bold items-center'><FaMapMarker size={25} className='p-1 mr-2 text-white bg-black rounded-full' />adresse : <span className='text-[12px] mt-1 ml-2'> Tunis,elmanar</span></li>
                <li className='ml-[20px] mt-[10px] flex flex-row text-[19px] font-bold items-center'><MdEmail size={25} className='p-1 mr-2 text-white bg-black rounded-full' />email :<span className='text-[12px] mt-1 ml-2'> adhibi345@gmail.com</span></li>
                <li className='ml-[20px] mt-[10px] flex flex-row text-[19px] font-bold items-center'><NavLink to='changepassword'>change password</NavLink></li>
                <li ><NavLink to='/mywallet' className='ml-[20px] mt-[10px] flex flex-row text-[19px] font-bold items-center'><FaGoogleWallet size={25} className='p-1 mr-2 text-white bg-black rounded-full' />my wallet</NavLink></li>
                <li ><NavLink to='Avis' className='ml-[20px] mt-[10px] flex flex-row text-[19px] font-bold items-center'>Avis</NavLink></li>
            </ul>

        </div>
        <hr className='w-[5px] h-auto bg-black' />
        <div className='b w-[400px] sm:w-[400px] lg:w-[1900px] h-full mr-5'>
            <span className='w-full flex justify-center items-center text-[35px] bg-gray-100 h-[76px] border-b-2 border-[#03C988] '>Latest Delivery</span>
            <ul className='mt-[30px] w-full'>
                <li className='mt-6 w-full flex flex-col border-b-2 border-black h-auto'>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between bg-gray-200'>
                        <span className='text-[26px]'> Username : Ahmed Dhibi </span>
                        <span className='text-[26px]'>Date : 07/10/2023</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Food-Name : Pepporoni Pizza</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Price : 20$</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>DeliveryId : #254965871215487</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Exact time of passing the delivery : 17:14</span>
                    </div>

                </li>
                <li className='mt-6 w-full flex flex-col border-b-2 border-black h-auto'>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between bg-gray-200'>
                        <span className='text-[26px]'> Username : Ahmed Dhibi </span>
                        <span className='text-[26px]'>Date : 07/10/2023</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Food-Name : Pepporoni Pizza</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Price : 20$</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>DeliveryId : #254965871215487</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Exact time of passing the delivery : 17:14</span>
                    </div>

                </li>
                <li className='mt-6 w-full flex flex-col border-b-2 border-black h-auto'>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between bg-gray-200'>
                        <span className='text-[26px]'> Username : Ahmed Dhibi </span>
                        <span className='text-[26px]'>Date : 07/10/2023</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Food-Name : Pepporoni Pizza</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Price : 20$</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>DeliveryId : #254965871215487</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Exact time of passing the delivery : 17:14</span>
                    </div>

                </li>
                <li className='mt-6 w-full flex flex-col border-b-2 border-black h-auto'>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between bg-gray-200'>
                        <span className='text-[26px]'> Username : Ahmed Dhibi </span>
                        <span className='text-[26px]'>Date : 07/10/2023</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Food-Name : Pepporoni Pizza</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Price : 20$</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>DeliveryId : #254965871215487</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Exact time of passing the delivery : 17:14</span>
                    </div>

                </li>
                <li className='mt-6 w-full flex flex-col border-b-2 border-black h-auto'>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between bg-gray-200'>
                        <span className='text-[26px]'> Username : Ahmed Dhibi </span>
                        <span className='text-[26px]'>Date : 07/10/2023</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Food-Name : Pepporoni Pizza</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Price : 20$</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>DeliveryId : #254965871215487</span>
                    </div>
                    <div className='w-full text-[20px] pl-5 pr-5 flex justify-between'>
                        <span className='text-[26px]'>Exact time of passing the delivery : 17:14</span>
                    </div>

                </li>

            </ul>

        </div>
        <hr className='w-[5px] h-auto bg-black' />
        <div className='c w-[400px] sm:w-[400px] lg:w-[900px] mt-2 sm:mt-0 h-full  '>
          <div className='w-full h-[76px] bg-gray-100 border-b-2 border-[#03C988] flex flex-row items-center justify-between'>
            <Link to='notification'><FaBell size={40} className='ml-[30px]  p-1 mr-2 text-white bg-black rounded-full'/></Link>
            <Link to='friends'><FaUserFriends size={40} className='  p-1 mr-2 text-white bg-black rounded-full'/></Link>
            <span className='p-2 text-[20px] mr-[30px] rounded-[20px] bg-orange-700 text-white hover:text-orange-700 hover:bg-white hover:border-orange-500 cursor-pointer'>LogOut</span>
            
          </div>
          <Outlet />

        </div>
        

    </div>
    
    </>
    
  )
}

export default MyAccount