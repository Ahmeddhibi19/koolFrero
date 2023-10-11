import React from 'react'
import Meal from './Meal';
import {useState}from 'react'
import { mealdata } from '../data/data'
import{ArrowSmRightIcon} from "@heroicons/react/outline";
import { FaHeart, FaStar, FaHome } from 'react-icons/fa';
import { cart } from './Meal';


const Cart = (props) => {
    const { cart } = props;
  return (
    <div className='max-w-[1520px] px-4 m-auto py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Your selected food</h1>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 py-4'>
            {
                
               cart.map((item)=>(
                    <>
                        <div key={item.id} className='border-non hover:scale-105 duration-300'>
                            <img src={item.image} alt={item.name}
                            className='w-full h-[250px] object-cover rounded-lg ' />
                            <div className='flex justify-between py-2 px-2'>
                                <p className='font-bold'>{item.name}</p>
                                <p className='bg-orange-700 h-10 w-18 rounded-full -mt-7 text-white py-0 px-2 border-8 border-white font-bold'>{item.price}</p>
                            </div>
                            <div className='pl-2 py-4 -mt-7 flex justify-between'>
                                <p className='flex  items-center  text-indigo-600 cursor-pointer w-[180px]'>View More
                                    <ArrowSmRightIcon className='w-5 ml-2'/>
                                    
                                        
                                        
                                        
                                </p>
                                
                            </div>
                        </div>
                        
                

                    </>
                    
                ))
            }
        </div>
        <div className=''>
        
        total amount: {
                cart.reduce((acc, item) => acc + parseFloat(item.price.split('$')[0]), 0)
                }$


        </div>


    </div>
  )
}

export default Cart